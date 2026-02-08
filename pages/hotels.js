
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [name, setName] = useState('');

  async function load() {
    const { data } = await supabase.from('hotels').select('*');
    setHotels(data || []);
  }

  async function save() {
    await supabase.from('hotels').insert([{ name }]);
    setName('');
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <>
      <h1>Hotels</h1>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={save}>Add</button>
      <ul>{hotels.map(h => <li key={h.id}>{h.name}</li>)}</ul>
    </>
  );
}
