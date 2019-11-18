//持久化插件
import  { createStore ,applyMiddleware ,compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import reducer from './reducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
 
export default () => {
  let store =  createStore( persistedReducer, enhancer);
  let persistor = persistStore(store)
  return { store, persistor }
}
