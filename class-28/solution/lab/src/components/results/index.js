import ReactJson from 'react-json-view';

function Results (props) {
  return (
    <section>
      {
        props.loading
          ?
          <div>LOADING...</div>
          :
          <ReactJson src={props.data} />
      }
    </section>
  );
}

export default Results;
