import React from 'react';
import renderer from 'react-test-renderer';
import Meta from '../../src/components/Meta';
import {describe, it, jest} from '@jest/globals';
import useSiteMetadata from '../../src/hooks/use-site-metadata';
import siteMetadataStub from '../sitemeta.stub';

jest.mock('../../src/hooks/use-site-metadata');


describe("Meta component", () => {
    it('renders correctly with all params', () => {
        useSiteMetadata.mockReturnValue(siteMetadataStub);

        const tree = renderer
            .create(<Meta
                metaTitle={"The Title On The Meta"}
                metaDescription={"The Description on the meta"}
                coverImage={"/image-custom.png"}
                urlPath={"/test"}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useSiteMetadata).toBeCalled();
    });

    it('renders correctly with default site params', () => {
        useSiteMetadata.mockReturnValue(siteMetadataStub);

        const tree = renderer
            .create(<Meta
                metaTitle={"The Title On The Meta"}
                metaDescription={"The Description on the meta"}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect(useSiteMetadata).toBeCalled();
    });
})
