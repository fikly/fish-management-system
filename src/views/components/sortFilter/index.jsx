import React, {Fragment, useEffect, useState} from 'react';
import {BiFilter, BiSortAlt2} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import {KOTA, PROVINSI, UKURAN, URUTKAN} from '~/constants/variable';

import './style/sortFilter.scss';

const SortFilter = ({onClick}) => {
    const content = useSelector((state) => state.content);
    const {queryList} = content;

    const [activeFilter, setActiveFilter] = useState(false);

    useEffect(()=> {
        const provinceFilter = (queryList[PROVINSI] ? queryList[PROVINSI] : '');
        const cityFilter = (queryList[KOTA] ? queryList[KOTA].value : '');
        const sizeFilter = (queryList[UKURAN] ? queryList[UKURAN].value : '');
        const sort = (queryList[URUTKAN] ? queryList[URUTKAN].value : '');
        if (provinceFilter !== '' || cityFilter !== '' || sizeFilter !== '' || sort !== '') {
            setActiveFilter(true);
        } else {
            setActiveFilter(false);
        }
    }, [queryList]);
    return (
        <Fragment>
            <div className={`sort-filter-button with-shadow d-flex align-items-center justify-content-center ${activeFilter ? 'active' : ''}`} onClick={() => onClick()}>
                <BiFilter title="Filter" /> / <BiSortAlt2 title="Sort" />
            </div>
        </Fragment>
    );
};

export default SortFilter;
