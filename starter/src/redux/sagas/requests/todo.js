import axios from 'axios'

export function requestTodo(){
    return axios.request({
        method: 'get',
        url: 'http://localhost:7000/todos'
    })
}