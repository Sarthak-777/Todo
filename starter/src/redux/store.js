import {configureStore, combineReducers} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import createSagaMiddleware from 'redux-saga'
import {watcherSaga} from './sagas/rootSaga'
// export default configureStore({
//     reducer: {
//         todos: todoReducer
//     }
// })

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    todos: todoReducer
})

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)

export default store