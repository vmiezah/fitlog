import { useEffect, useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getIntruments();
  }, []);

  async function getIntruments() {
    const { data } = await supabase.from("Instruments").select();
    setInstruments;
  }

  return (
    <>
      <h1>Make Fitness Easy</h1>
      <div className="card">
      <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> </> )
}

export default App;
