import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import useFormattedDate from "../../src/hooks/use-formatted-date";
import ArticleInList from "../../src/components/ArticleInList";

jest.mock('../../src/hooks/use-formatted-date');

describe("ArticleInList component", () => {
    it('renders correctly', () => {
        useFormattedDate.mockReturnValue("2020-12-01");
        const tree = renderer
            .create(<ArticleInList
                title={"title"}
                description={"this is the description"}
                slug={"/test"}
                coverImage={"/custom-image.png"}
                date={"2020-12-01 16:00"}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useFormattedDate).toBeCalled();
    });
})
