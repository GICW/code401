import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [data, setData] = useState(null);
  const [request, setRequest] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    // You could directly call the API from here with the requestParams ...

    // This way, we update the request object in state, and the effect hook below senses that and auto-runs the request
    setRequest(requestParams);
  };

  useEffect( async () => {

    if( request.method && request.url ) {

      setLoading(true);

      const response = await axios({
        method: request.method,
        url: request.url,
      });

      setLoading(false);
      setData(response.data);

    }

  }, [request]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method:{request.method}</div>
      <div>URL: {request.url}</div>
      <Form handleApiCall={callApi} />
      <Results loading={loading} data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
