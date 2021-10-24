import currency from 'currency.js';

export const formatRupiah = (price) => {
    return currency(price, {separator: ',', symbol: 'IDR ', precision: 0}).format();
};
