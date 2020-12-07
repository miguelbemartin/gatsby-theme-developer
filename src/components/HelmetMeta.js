import React from 'react';
import useSiteMetadata from "../hooks/use-site-metadata";
import {Helmet} from "react-helmet";

export default ({ metaTitle, metaDescription, urlPath = "", coverImage = "" }) => {
        const { author,
                default_preview_image,
                title,
                description,
                site_url} = useSiteMetadata();

        const canonicalUrl = urlPath ? `${site_url}${urlPath}` : site_url;
        const previewImage = coverImage ? coverImage : default_preview_image;

        return <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={canonicalUrl} />
                <meta name="description" content={metaDescription ? metaDescription : description} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={metaDescription}/>
                <meta property="og:url" content={canonicalUrl}/>
                <meta property="og:image" content={previewImage}/>
                <meta property="og:site_name" content={title}/>
                <meta property="article:author" content={author.url}/>
        </Helmet>
}
