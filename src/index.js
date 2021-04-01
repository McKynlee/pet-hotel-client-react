import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

// const reducerName = (state = 0, action) =>
// {return state;}` for each reducer (variable) needed ->
// listed before next line'

function* rootSaga() {
  yield takeEvery('CREATE_OWNER', addNewOwner);
  // yield takeEvery("FETCH_OWNERS", fetchOwners);
  yield takeEvery('ADD_PET', addNewPet);
  yield takeEvery('FETCH_PETS', fetchPets);
}

function* addNewOwner(action) {
  console.log('addNewOwner action.payload:', action.payload);

  const newOwnerName = action.payload;

  try {
    yield axios.post('/owners', newOwnerName);

    // yield put({
    //   type: "FETCH_OWNERS"
    // })
  } catch (error) {
    console.log('ERROR posting new owner:', error);
  }
}

function* addNewPet(action) {
  console.log('addNewPet action.payload:', action.payload);

  const newPet = action.payload;

  try {
    yield axios.post('/pets', newPet);

    yield put({
      type: 'FETCH_PETS',
    });
  } catch (error) {
    console.log('ERROR posting new pet:', error);
  }
}

function* fetchPets(action) {
  console.log('fetchPets saga');

  try {
    yield axios.get('/pets');
  } catch (error) {
    console.log('ERROR getting all pets:', error);
  }
}

const store = createStore(
  combineReducers({
    addNewOwner,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
