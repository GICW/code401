import ReactJson from 'react-json-view';

function Results (props) {
  return (
    <section className="results">
      {
        props.loading === true
          ?
          <div>LOADING...</div>
          :
          <ReactJson src={props.data} />
      }
    </section>
  );
}

export default Results;
