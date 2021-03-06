import moment from 'moment';
import {notify} from 'react-notify-toast';
import {v4 as uuidv4} from 'uuid';
import {HARGA, KOMODITAS, KOTA, PROVINSI, UKURAN, URUTKAN} from '~/constants/variable';

const {GetOptionArea, GetOptionSize, GetListAPI, PostListAPI, PutListAPI, DeleteListAPI} = require('~/services/serviceApi');
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

export const setSchemaForFilter = (schema, value) => {
    const filterSchema = {};
    filterSchema[PROVINSI] = {
        ...schema[PROVINSI],
        'required': false,
        'defaultValue': value[PROVINSI] ? value[PROVINSI].value : '',
    };
    filterSchema[KOTA] = {
        ...schema[KOTA],
        'required': false,
        'defaultValue': value[KOTA] ? value[KOTA].value : '',
    };
    filterSchema[UKURAN] = {
        ...schema[UKURAN],
        'required': false,
        'defaultValue': value[UKURAN] ? value[UKURAN].value : '',
    };
    filterSchema[URUTKAN] = {
        'type': 'select',
        'required': false,
        'options': [
            {value: 'komoditas-asc', label: 'Komoditas (A-Z)'},
            {value: 'komoditas-desc', label: 'Komoditas (Z-A)'},
            {value: 'area_provinsi-asc', label: 'Provinsi (A-Z)'},
            {value: 'area_provinsi-desc', label: 'Provinsi (Z-A)'},
            {value: 'area_kota-asc', label: 'Kota (A-Z)'},
            {value: 'area_kota-desc', label: 'Kota (Z-A)'},
            {value: 'price-asc', label: 'Harga Termurah'},
            {value: 'price-desc', label: 'Harga Termahal'},
            {value: 'size-asc', label: 'Ukuran Terkecil'},
            {value: 'size-desc', label: 'Ukuran Terbesar'},
        ],
        'placeholder': 'Tanggal dibuat (default)',
        'defaultValue': value[URUTKAN] ? value[URUTKAN].value : '',
    };
    filterSchema['Submit Filter / Sort'] = {
        'type': 'submit',
    };

    return filterSchema;
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

export const updateForm = async (params, id) => {
    const result = {
        status: false,
    };
    try {
        const data = {
            komoditas: params[KOMODITAS],
            area_provinsi: params[PROVINSI].value,
            area_kota: params[KOTA].value,
            size: params[UKURAN].value,
            price: params[HARGA],
            tgl_parsed: moment().format(),
            timestamp: moment().unix(),
        };

        await apiService(PutListAPI, {
            search: {uuid: id},
            set: data,
        });
        notify.show('Success update content', 'success');
        result.status = true;
    } catch (error) {
        result.status = false;
        notify.show('On Error on update content', 'error');
    }

    return result;
};

export const deleteForm = async (id) => {
    const result = {
        status: false,
    };
    try {
        await apiService(DeleteListAPI, {
            search: {uuid: id},
        });
        notify.show('Success delete content', 'success');
        result.status = true;
    } catch (error) {
        result.status = false;
        notify.show('On Error on delete content', 'error');
    }

    return result;
};

export const setDefaultValueSchema = (schema, content) => {
    schema[KOMODITAS].defaultValue = (content !== '' ? content.komoditas : content);
    schema[PROVINSI].defaultValue = (content !== '' ? content.area_provinsi : content);
    schema[KOTA].defaultValue = (content !== '' ? content.area_kota : content);
    schema[UKURAN].defaultValue = (content !== '' ? content.size : content);
    schema[HARGA].defaultValue = (content !== '' ? content.price : content);
    return schema;
};
