function History (props) {
  return (
    <section className="history">
      <h2>History</h2>
      {
        props.history.map( entry =>
          <div onClick={ () => props.showHistory(entry) }>
            {entry.request.method} - {entry.request.url}
          </div>,
        )
      }
    </section>
  );
}

export default History;
