import React from 'react';
import Helmet from 'react-helmet';

export default ({ title, description }) =>
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="Article title"/>
        <meta property="og:url" content="Artcle url"/>
        <meta property="og:image" content="Image Url"/>
        <meta property="article:author" content="Author Url"/>
    </Helmet>