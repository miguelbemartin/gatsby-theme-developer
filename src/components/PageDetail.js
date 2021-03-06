import React from 'react';

export default ({ title, content }) =>
    
    <article className={"page detail"}>
        <header>
            <h1>{title}</h1>
        </header>
        
        <section className="row">
            <div className="col-lg-8 offset-lg-2">
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </section>
        
    </article>
