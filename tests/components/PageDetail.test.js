import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import PageDetail from "../../src/components/PageDetail";

describe("PageDetail component", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<PageDetail
                title={"title"}
                content={"<h2>test</h2><p>test world</p>"}
                coverImage={"/custom-image.png"}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
})
