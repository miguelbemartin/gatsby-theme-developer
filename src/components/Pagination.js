import React from 'react';
import { Link } from 'gatsby';


export default ({prevPagePath, nextPagePath, hasNextPage, hasPrevPage, strings}) =>
    <div className={"pagination row"}>
        <div className={"prev col-6"}>
            <Link rel="prev" to={prevPagePath} className={!hasPrevPage?"disabled":""}>{strings.prev_page}</Link>
        </div>
        <div className={"next col-6"}>
            <Link rel="next" to={nextPagePath} className={!hasNextPage?"disabled":""}>{strings.next_page}</Link>
        </div>
    </div>