import { takeLatest } from "@redux-saga/core/effects";
import {handleTodo} from './handlers/todo'
import {fetchTodo} from '../todoSlice'
export function* watcherSaga(){
    yield takeLatest(fetchTodo.type, handleTodo)
}