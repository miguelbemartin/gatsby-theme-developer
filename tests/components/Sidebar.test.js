import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import Sidebar from "../../src/components/Sidebar";
import siteMetaStub from '../sitemeta.stub';

describe("Sidebar component", () => {
    it('renders correctly', () => {

        const tree = renderer
            .create(<Sidebar
                title={"The Title"}
                description={"The description"}
                links={[{key: "test", href: "/"}]}
                author={siteMetaStub.author}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})
