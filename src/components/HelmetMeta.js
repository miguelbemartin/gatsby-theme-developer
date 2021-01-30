import React from 'react';
import useSiteMetadata from "../hooks/use-site-metadata";
import {Helmet} from "react-helmet";

export default ({meta_title, meta_description, url_path = "", cover_image = ""}) => {
    const {
        author,
        default_preview_image,
        title,
        description,
        site_url
    } = useSiteMetadata();

    const canonical_url = url_path ? `${site_url}${url_path}` : site_url;
    const preview_image = cover_image ? cover_image : default_preview_image;

    return <Helmet>
        <title>{meta_title}</title>

        <link rel="canonical" href={canonical_url}/>

        <meta name="description" content={meta_description ? meta_description : description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <meta property="og:type" content="article"/>
        <meta property="og:title" content={meta_title}/>
        <meta property="og:description" content={meta_description}/>
        <meta property="og:url" content={canonical_url}/>
        <meta property="og:image" content={preview_image}/>
        <meta property="og:site_name" content={title}/>
        <meta property="article:author" content={author.url}/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content={author.twitter_username}/>
        <meta name="twitter:title" content={meta_title}/>
        <meta name="twitter:description" content={meta_description}/>
        <meta name="twitter:image" content={preview_image}/>
    </Helmet>
}
