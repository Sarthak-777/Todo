import { put, call } from "redux-saga/effects";
import {requestTodo} from '../requests/todo'
import {setFetchTodo} from '../../todoSlice'

export function* handleTodo(action){
    try{
        const response = yield call(requestTodo)
        const {data} = response
        console.log(...data)
        yield put(setFetchTodo(data))
        // data.map(function*(todo){
        //     return yield put(setFetchTodo(todo))
        // })
        
    }catch(e){
        console.log(e)
    }
}