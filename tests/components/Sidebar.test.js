import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import Sidebar from "../../src/components/Sidebar";
import siteMetaStub from '../sitemeta.stub';
import useIsCurrentPage from "../../src/hooks/use-is-current-page";

jest.mock('../../src/hooks/use-is-current-page');

describe("Sidebar component", () => {
    it('renders correctly', () => {
        useIsCurrentPage.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const tree = renderer
            .create(<Sidebar
                title={"The Title"}
                description={"The description"}
                links={[{key: "test", href: "/"}, {key: "test2", href: "/two"}]}
                author={siteMetaStub.author}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(useIsCurrentPage).toBeCalledTimes(2);
    });
})
