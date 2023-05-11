import React from 'react';
import styles from './SocialButtons.module.css';

const SocialButtons = () => {
  return (
    <div className={styles.socialButtons}>
      <a href="https://www.facebook.com/RickandMorty"  className={styles.facebook}>
        <img src='/imageSocial/facebook.svg' className={styles.facebookimg} alt={""}/>
      </a>
      <a href="https://twitter.com/RickandMorty"  className={styles.twitter}>
        <img src='/imageSocial/twitter.svg' className={styles.twitterimg} alt={""}/>
      </a>
      <a href="https://www.instagram.com/rickandmortyrickstaverse/"  className={styles.instagram}>
        <img src='/imageSocial/instagram.svg' className={styles.instagramimg} alt={""}/>
      </a>
    </div>
  );
}

export default SocialButtons;
