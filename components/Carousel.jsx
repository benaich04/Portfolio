'use client';

import { useState, useEffect } from 'react';

export default function Carousel({ items, renderItem }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      marginBottom: '40px'
    }}>
      {renderItem(items[index])}

      <div style={{ position: 'absolute', top: '50%', left: '10px' }}>
        <button onClick={prev}>⬅</button>
      </div>
      <div style={{ position: 'absolute', top: '50%', right: '10px' }}>
        <button onClick={next}>➡</button>
      </div>
    </div>
  );
}
