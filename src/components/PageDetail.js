import React from 'react';

export default ({title, content}) =>

  <article className={"page detail"}>

    <section className="row">
      <div className="col-12">
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    </section>

  </article>
