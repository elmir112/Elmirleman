import { useState, useEffect } from 'react';

export default function Note() {
  const [note, setNote] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('note');
    const savedTime = localStorage.getItem('noteTime');
    if (saved) setNote(saved);
    if (savedTime) setTime(savedTime);
  }, []);

  const saveNote = () => {
    const now = new Date().toLocaleString('az-AZ');
    localStorage.setItem('note', note);
    localStorage.setItem('noteTime', now);
    setTime(now);
  };

  return (
    <div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Mesajını yaz" className="w-full h-32 border rounded p-2 mb-2" />
      <button onClick={saveNote} className="bg-pink-500 text-white px-4 py-2 rounded">Yadda saxla</button>
      {time && <p className="text-sm text-gray-600 mt-2">Yadda saxlandı: {time}</p>}
    </div>
  );
}
