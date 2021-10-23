import axios from 'axios';

export const apiService = async ({endpoint, data}) => {
    let result= [];
    const {baseURL, method, url} = endpoint;

    await axios({
        baseURL,
        method,
        url,
        data,
    }).then(function(response) {
        result = response.data;
    }).catch(function(error) {
        result = error.response;
    });

    return result;
};
