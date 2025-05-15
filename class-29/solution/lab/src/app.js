import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const initialState = {
  data: null,
  request: {},
  loading: false,
  history: [],
};

const reducer = (state=initialState, action) => {

  const {type, payload} = action;

  switch(type) {
  case 'START_REQUEST':
    return { ...state, request: payload, loading: true };
  case 'FINISH_REQUEST':
    return {
      ...state,
      loading: false,
      data: payload,
      history: [...state.history, { request: state.request, data: payload } ],
    };
  case 'SHOW_HISTORY':
    return {
      ...state,
      loading: 'history',
      data: payload.data,
      request: payload.request,
    };
  default:
    return state;
  }

};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {

    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    };

    dispatch(action);

  };

  const showHistoryData = (entry) => {

    const action = {
      type: 'SHOW_HISTORY',
      payload: entry,
    };

    dispatch(action);

  };

  useEffect( async () => {

    if( state.loading === true && state.request.method && state.request.url ) {

      const response = await axios({
        method: state.request.method,
        url: state.request.url,
      });

      const action = {
        type: 'FINISH_REQUEST',
        payload: response.data,
      };

      dispatch(action);

    }

  }, [state.request]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method:{state.request.method}</div>
      <div>URL: {state.request.url}</div>
      <Form handleApiCall={callApi} />
      <main>
        <History history={state.history} showHistory={showHistoryData} />
        <Results loading={state.loading} data={state.data} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
