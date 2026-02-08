
import { useEffect, useState } from 'react';

export default function Results() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('/api/results').then(r => r.json()).then(j => setRows(j.data));
  }, []);

  return (
    <>
      <h1>Scan Results</h1>
      <ul>{rows.map(r => <li key={r.id}>{r.platform} {r.price}</li>)}</ul>
    </>
  );
}
