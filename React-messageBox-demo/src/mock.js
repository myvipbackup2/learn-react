/**
 * Created by lizixiang on 2017/6/10.
 */

 /**
 * 使用Mock.js拦截ajax请求，返回假数据
 * 使用方法如下，会拦截 url/api 的ajax请求
 * @export const api = Mock.mock(url,{mockData})
 */

import Mock from 'mockjs'

export const commentList = Mock.mock('http://localhost:3000/commentList', [
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    },
    {
        'author': '@cname',
        'text': '@cparagraph',
        'date': '@now',
        'color': '@color'
    }
]);
