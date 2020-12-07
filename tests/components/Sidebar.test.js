import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import Sidebar from "../../src/components/Sidebar";
import useAvailableAuthorLinks from "../../src/hooks/use-available-author-links";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import siteMetaStub from '../sitemeta.stub';

jest.mock('../../src/hooks/use-available-author-links');

describe("Sidebar component", () => {
    it('renders correctly', () => {

        useAvailableAuthorLinks.mockReturnValue([
            { key: "twitter", icon: <FaTwitter/> },
            { key: "github", icon: <FaGithub/> },
            { key: "linkedin", icon: <FaLinkedin/> },
            { key: "instagram", icon: <FaInstagram/> },
            { key: "mail", icon: <FaEnvelope/> }
        ]);

        const tree = renderer
            .create(<Sidebar
                title={"The Title"}
                description={"The description"}
                links={[{key: "test", href: "/"}]}
                author={siteMetaStub.author}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useAvailableAuthorLinks).toBeCalled();
    });
})
