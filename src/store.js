import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeModule']
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = compose(applyMiddleware(thunk))(
  createStore,
)(pReducer);

const persistor = persistStore(store);

export {persistor, store};