import React, {useState} from 'react';

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

    setRequest(requestParams);

    setLoading(true);

    // mock request/output
    await setTimeout( () => {
      const data = {
        count: 2,
        results: [
          {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
      };
      setData(data);
    }, 1000);

    setLoading(true);
  };

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
