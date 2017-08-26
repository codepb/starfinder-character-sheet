import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import persistState, {mergePersistedState} from 'redux-localstorage'

const reducer = compose(
  mergePersistedState()
)(rootReducer);

export default function configureStore() {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(multi, thunk), persistState(adapter(window.localStorage)))
  );
}