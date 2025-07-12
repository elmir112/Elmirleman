import { useState } from 'react';
import Head from 'next/head';
import Tabs from '../components/Tabs';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState('');

  const checkPassword = () => {
    if (input === '10.07.2023') setIsAuthenticated(true);
    else alert('Yalnış şifrə, yenidən yoxla');
  };

  return (
    <>
      <Head>
        <title>Elmir ❤️ Ləman</title>
      </Head>
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
        {!isAuthenticated ? (
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
            <h1 className="text-xl font-semibold mb-4">Şifrə ilə giriş</h1>
            <input
              type="password"
              className="border rounded w-full px-3 py-2 mb-4"
              placeholder="Şifrəni daxil et"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={checkPassword} className="bg-pink-500 text-white px-4 py-2 rounded">
              Daxil ol
            </button>
          </div>
        ) : (
          <Tabs />
        )}
      </div>
    </>
  );
}
