import {HARGA, KOMODITAS, KOTA, PROVINSI, UKURAN} from '~/constants/variable';

export default {
    [KOMODITAS]: {
        'type': 'text',
        'required': true,
        'placeholder': 'Nama Komoditas',
    },
    [PROVINSI]: {
        'type': 'select',
        'required': true,
        'options': [],
        'placeholder': 'Pilih Provinsi',
    },
    [KOTA]: {
        'type': 'select',
        'required': true,
        'options': [],
        'placeholder': 'Pilih Kota',
    },
    [UKURAN]: {
        'type': 'select',
        'required': true,
        'options': [],
        'placeholder': 'Pilih Ukuran (cm)',
    },
    [HARGA]: {
        'type': 'currency',
        'required': true,
        'placeholder': 'IDR.',
    },
    'Simpan Content': {
        'type': 'submit',
    },
};
