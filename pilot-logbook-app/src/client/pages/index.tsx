import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Pilot Logbook App</h1>
      <p>Please choose an option below:</p>
      <div className={styles.buttonContainer}>
        <button onClick={handleLoginClick} className={styles.button}>
          Login
        </button>
        <Link href="/dashboard">
          <a className={styles.button}>Access Dashboard</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;