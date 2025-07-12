import { useState } from 'react';
import Note from './Note';
import Memories from './Memories';

export default function Tabs() {
  const [active, setActive] = useState('mesaj');

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded-xl shadow mt-4">
      <div className="text-center text-pink-700 text-lg font-bold mb-4">
        ❤️ Səni çox sevirəm. Sənlə bərabər olmaq üçün hər şey edəcəm. ❤️
      </div>
      <div className="flex justify-around mb-4">
        {['mesaj', 'xatirələr', 'gələcək'].map(tab => (
          <button key={tab} onClick={() => setActive(tab)} className={`px-4 py-2 rounded ${active === tab ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}>
            {tab}
          </button>
        ))}
      </div>
      {active === 'mesaj' && <Note />}
      {active === 'xatirələr' && <Memories />}
      {active === 'gələcək' && <div className="text-center text-gray-700">Gələcək planlarını buraya yaza bilərsən 💭</div>}
    </div>
  );
}
