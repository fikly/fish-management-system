import moment from 'moment';
import {notify} from 'react-notify-toast';
import {v4 as uuidv4} from 'uuid';
import {HARGA, KOMODITAS, KOTA, PROVINSI, UKURAN} from '~/constants/variable';

const {GetOptionArea, GetOptionSize, GetListAPI, PostListAPI} = require('~/services/serviceApi');
const {apiService} = require('~/services/serviceGeneral');
const {optionObject} = require('~/utils/optionObject');

export const dataForSchema = async (schema) => {
    const getArea = await apiService(GetOptionArea);
    const getSize = await apiService(GetOptionSize);

    const optionSize = [];
    if (getSize && getSize.length > 0) {
        for (let i = 0; i < getSize.length; i++) {
            optionSize.push(optionObject(getSize[i].size));
        };
    }

    const optionProvince = [];
    const optionCity = [];
    if (getArea && getArea.length > 0) {
        for (let i = 0; i < getArea.length; i++) {
            const findSimilarProvince = optionProvince.find((row) => row.label === getArea[i].province);
            if (!findSimilarProvince) {
                optionProvince.push(optionObject(getArea[i].province));
            }
            const findSimilarCity = optionCity.find((row) => row.label === getArea[i].city);
            if (!findSimilarCity) {
                optionCity.push(optionObject(getArea[i].city));
            }
        };
    }

    schema[UKURAN].options = optionSize;
    schema[PROVINSI].options = optionProvince;
    schema[KOTA].options = optionCity;

    return schema;
};

export const getList = async () => {
    let result = [];
    const list = await apiService(GetListAPI);
    if (list && list.length > 0) {
        result = list;
    }

    return result;
};

export const submitForm = async (params) => {
    const result = {
        status: false,
    };
    try {
        const data = {
            uuid: uuidv4(),
            komoditas: params[KOMODITAS],
            area_provinsi: params[PROVINSI].value,
            area_kota: params[KOTA].value,
            size: params[UKURAN].value,
            price: params[HARGA],
            tgl_parsed: moment().format(),
            timestamp: moment().unix(),
        };

        await apiService(PostListAPI, [data]);
        notify.show('Success create content', 'success');
        result.status = true;
    } catch (error) {
        result.status = false;
        notify.show('On Error on create content', 'error');
    }

    return result;
};
