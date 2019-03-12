import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import playersReducer from './players/playersReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,  
]

const reducers = combineReducers({
  players: playersReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
)

sagaMiddleware.run(sagas);

export default store