import React, { useEffect, useState } from 'react';
import './EntranceAnimation.css';

function EntranceAnimation({ onComplete }) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 1000); // Logo appears
    const timer2 = setTimeout(() => setAnimationStage(2), 3000); // Color fill starts
    const timer3 = setTimeout(() => setAnimationStage(3), 5000); // Fade out
    const timer4 = setTimeout(() => onComplete(), 5000); // Complete immediately after fade out

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`entrance-animation ${animationStage >= 1 ? 'logo-visible' : ''} ${animationStage >= 2 ? 'color-fill' : ''} ${animationStage >= 3 ? 'fade-out' : ''}`}>
      <div className="logo-container">
        <div className="spiritual-symbols">
          <span className="om-symbol">ॐ</span>
        </div>
        <h1 className="brand-name">VEDARCH</h1>
        <div className="spiritual-symbols">
          <span className="swastika-symbol">卐</span>
        </div>
        <p className="tagline">Spiritual Enlightenment Awaits</p>
      </div>
      <div className="color-overlay"></div>
    </div>
  );
}

export default EntranceAnimation;
