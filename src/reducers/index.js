import {combineReducers} from 'redux';
import { themeModule } from '../Hooks/useTheme.reducer';

const appReducer = combineReducers({
  themeModule,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
