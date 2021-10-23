import {API_URL} from '~/constants/variable';

// List API
export const GetListAPI = {baseURL: API_URL, method: 'get', url: 'list'};
export const PostListAPI = {baseURL: API_URL, method: 'post', url: 'list'};
export const PutListAPI = {baseURL: API_URL, method: 'put', url: 'list'};
export const DeleteListAPI = {baseURL: API_URL, method: 'delete', url: 'list'};

// Option API
export const GetOptionArea = {baseURL: API_URL, method: 'get', url: 'option_area'};
export const GetOptionSize = {baseURL: API_URL, method: 'get', url: 'option_size'};
