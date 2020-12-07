import React from 'react';
import renderer from 'react-test-renderer';
import Meta from '../../src/components/HelmetMeta';
import {describe, it, jest} from '@jest/globals';
import useSiteMetadata from '../../src/hooks/use-site-metadata';
import siteMetadataStub from '../sitemeta.stub';
import {Helmet} from "react-helmet";
import ReactDOMServer from 'react-dom/server';

jest.mock('../../src/hooks/use-site-metadata');
Helmet.canUseDOM = false;

describe("Meta component", () => {
    it('renders correctly with all params', () => {
        useSiteMetadata.mockReturnValue(siteMetadataStub);

        ReactDOMServer.renderToString(
            <Meta metaTitle={"The Title On The Meta"}
                  metaDescription={"The Description on the meta"}
                  coverImage={"/image-custom.png"}
                  urlPath={"/test"}/>);

        const helmet = Helmet.renderStatic();
        const tree = renderer
            .create(
                <>
                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                </>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(useSiteMetadata).toBeCalled();
    });

    it('renders correctly with default site params', () => {
        useSiteMetadata.mockReturnValue(siteMetadataStub);

        ReactDOMServer.renderToString(
            <Meta metaTitle={"The Title On The Meta"}
                  metaDescription={"The Description on the meta"}/>);

        const helmet = Helmet.renderStatic();
        const tree = renderer
            .create(
                <>
                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                </>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(useSiteMetadata).toBeCalled();
    });
})
