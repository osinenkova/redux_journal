import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
  'Smells Like Teen Spirit',
  'Enter Sandman'
]

function playlist (state= initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// // REDUX
// import { createStore } from 'redux';

// function playlist (store= [], action) {
//   if(action.type === 'ADD_TRACK') {
//     return [
//       ...store,
//       action.payload
//     ];
//   }
//   return store;
// }

// const store = createStore(playlist);
// const addTrackBtn = document.querySelectorAll('.add-track')[0];
// const input = document.querySelectorAll('.track-input')[0];

// store.subscribe(()=>{
//   console.log('subscribe', store.getState());
//   const list = document.querySelector('.list');
//   list.innerHTML = '';
//   input.value = '';
//   store.get().forEach(element => {
//     const li = document.createElement('li');
//     li.textContent = element;
//     list.appendChild(li);
//   });
// })

// addTrackBtn.addEventListener('click', () => {
//   const trackName = input.value;
//   // console.log('trackName', trackName)
//   store.dispatch({type: 'ADD_TRACK', payload: trackName})
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
