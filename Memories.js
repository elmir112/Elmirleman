import { useState } from 'react';

export default function Memories() {
  const [memories, setMemories] = useState([
    { title: 'İlk Görüş', image: null, date: '', text: '' },
    { title: 'İlk Hədiyyə', image: null, date: '', text: '' },
    { title: 'İlk Şəkil', image: null, date: '', text: '' },
    { title: 'Bizim Mahnımız', image: null, date: '', text: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...memories];
    updated[index][field] = value;
    setMemories(updated);
  };

  return (
    <div className="space-y-4">
      {memories.map((item, index) => (
        <div key={index} className="border rounded p-3 bg-gray-50">
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <input type="file" accept="image/*" onChange={(e) => handleChange(index, 'image', URL.createObjectURL(e.target.files[0]))} />
          {item.image && <img src={item.image} alt="memory" className="mt-2 max-h-40" />}
          <input type="text" placeholder="Tarix (gün/ay/il)" value={item.date} onChange={(e) => handleChange(index, 'date', e.target.value)} className="w-full mt-2 p-1 border rounded" />
          <textarea placeholder="Qısa açıqlama" value={item.text} onChange={(e) => handleChange(index, 'text', e.target.value)} className="w-full mt-2 h-20 p-1 border rounded" />
        </div>
      ))}
    </div>
  );
}
