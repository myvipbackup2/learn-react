/**
 * Created by lizixiang on 2017/6/10.
 */

import axios from 'axios'

const BASE_URL = 'http://localhost:3000';

axios.defaults.baseURL = BASE_URL; //设置默认的全局http路径

//封装好的get和post接口

export const getData = (url, param) => {
    return (
        axios.get(`${url}`, {
            params: param
        })
    )
};

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
};