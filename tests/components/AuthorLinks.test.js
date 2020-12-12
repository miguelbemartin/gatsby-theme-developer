import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import useAvailableAuthorLinks from "../../src/hooks/use-available-author-links";
import siteMetaStub from '../sitemeta.stub';
import AuthorLinks from "../../src/components/AuthorLinks";

jest.mock('../../src/hooks/use-available-author-links');

describe("AuthorLinks component", () => {
    it('renders correctly', () => {

        useAvailableAuthorLinks.mockReturnValue([
            { key: "twitter", icon: <FaTwitter/> },
            { key: "github", icon: <FaGithub/> },
            { key: "linkedin", icon: <FaLinkedin/> },
            { key: "instagram", icon: <FaInstagram/> },
            { key: "mail", icon: <FaEnvelope/> }
        ]);

        const tree = renderer
            .create(<AuthorLinks author={siteMetaStub.author}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useAvailableAuthorLinks).toBeCalled();
    });
})
