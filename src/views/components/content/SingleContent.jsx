import moment from 'moment';
import React from 'react';
import {IoFishOutline} from 'react-icons/io5';
import {formatRupiah} from '~/utils/formatRupiah';

import './style/singleContent.scss';

const SingleContent = ({data}) => {
    return (
        <div className="single-content custom-card mb-20p d-flex align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
                <IoFishOutline />
            </div>
            <div className="ml-16p detail-content d-flex justify-content-between flex-grow-1">
                <div className="detail">
                    <h4 className="font-16 font-600 mb-8p">{data.komoditas} <span className="font-10 color-grey font-300">({data.size}cm)</span></h4>
                    <h6 className="font-12 font-300 color-grey text-capitalize">{`${data.area_provinsi.toLowerCase()} - ${data.area_kota.toLowerCase()}`}</h6>
                    <h5 className="font-14 font-700 color-primary mt-4p">{formatRupiah(data.price)}</h5>
                </div>
                <h5 className="font-12 font-300 color-grey">{moment(data.tgl_parsed).format('MMM Do YYYY')}</h5>
            </div>
        </div>
    );
};

export default SingleContent;
