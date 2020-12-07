import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import ArticleDetail from "../../src/components/ArticleDetail";
import useFormattedDate from "../../src/hooks/use-formatted-date";

jest.mock('../../src/hooks/use-formatted-date');

describe("ArticleDetail component", () => {
    it('renders correctly', () => {
        useFormattedDate.mockReturnValue("2020-12-01");
        const tree = renderer
            .create(<ArticleDetail
                title={"title"}
                content={"<h2>test</h2><p>test world</p>"}
                coverImage={"/custom-image.png"}
                date={"2020-12-01 16:00"}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useFormattedDate).toBeCalled();
    });
})
