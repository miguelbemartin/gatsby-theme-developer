import React from 'react';
import renderer from 'react-test-renderer';
import {describe, it, jest} from '@jest/globals';
import useStrings from "../../src/hooks/use-strings";
import siteMetaStub from '../sitemeta.stub';
import strings from '../../src/strings/all-strings';
import Author from "../../src/components/Author";

jest.mock('../../src/hooks/use-strings');

describe("Author component", () => {
    it('renders correctly', () => {

        useStrings.mockReturnValue(strings.en);

        const tree = renderer
            .create(<Author author={siteMetaStub.author}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useStrings).toBeCalled();
    });
})
