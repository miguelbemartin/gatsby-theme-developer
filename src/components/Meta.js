import React from 'react';
import Helmet from 'react-helmet';

export default ({ title, description }) =>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Helmet>