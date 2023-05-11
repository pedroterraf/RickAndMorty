import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <h1 className={styles.clock}>{time}</h1>
    </div>
  );
}

export default Clock;
