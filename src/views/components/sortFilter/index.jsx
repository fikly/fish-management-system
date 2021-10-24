import React, {Fragment} from 'react';
import {BiFilter, BiSortAlt2} from 'react-icons/bi';

import './style/sortFilter.scss';

const SortFilter = ({onClick}) => {
    return (
        <Fragment>
            <div className="sort-filter-button with-shadow d-flex align-items-center justify-content-center" onClick={() => onClick()}>
                <BiFilter title="Filter" /> / <BiSortAlt2 title="Sort" />
            </div>
        </Fragment>
    );
};

export default SortFilter;
