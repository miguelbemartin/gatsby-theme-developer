import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from "../hooks/use-site-metadata";

export default ({ title, description, urlPath = "", coverImage = "" }) => {
        const { author,
                default_preview_image,
                site_url} = useSiteMetadata();

        const canonicalUrl = urlPath ? `${site_url}${urlPath}` : site_url;
        const previewImage = coverImage ? coverImage : default_preview_image;

        return <Helmet>
                <title>{title}</title>
                <link rel="canonical" href={canonicalUrl} />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={canonicalUrl}/>
                <meta property="og:image" content={previewImage}/>
                <meta property="article:author" content={author.url}/>
        </Helmet>
}
