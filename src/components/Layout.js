import React from 'react';
import Meta from './HelmetMeta';
import "../styles/main.scss"

export default ({children, header, footer, metaTitle, metaDescription, metaPreviewImage = "", metaUrlPath = ""}) =>
  <div className={"container"}>
    <Meta metaTitle={metaTitle}
          metaDescription={metaDescription}
          coverImage={metaPreviewImage}
          urlPath={metaUrlPath}/>

    <div className="row">
      <div className="col-lg-12">
        {header}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {children}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {footer}
      </div>
    </div>
  </div>
