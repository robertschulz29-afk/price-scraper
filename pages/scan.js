
export default function Scan() {
  async function trigger() {
    await fetch('/api/scan', { method: 'POST' });
    alert('Scan triggered');
  }
  return (<><h1>Scan</h1><button onClick={trigger}>Run Scan</button></>);
}
