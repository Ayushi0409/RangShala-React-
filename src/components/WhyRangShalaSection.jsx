import React from 'react';
import genuineImage from '../Images/Genuine.jpeg';
import distinctiveImage from '../Images/Distinctive.jpeg';
import vibrantImage from '../Images/Vibrant.png';

const WhyRangShalaSection = () => {
  return (
    <div style={styles.whyRangshalaSection}>
      <div style={styles.decorativeLine}></div>
      <h1 style={styles.whyTitle}>Why RangShala?</h1>
      <div style={styles.whyRow}>
        <div style={styles.whyItem}>
          <img src={genuineImage} alt="Genuine Artwork" style={styles.whyImage} />
          <h3>Genuine</h3>
          <p>Take home a unique piece of art, sourced directly from the artists and personally reviewed and verified by the founders.</p>
        </div>
        <div style={styles.whyItem}>
          <img src={distinctiveImage} alt="Distinctive Artwork" style={styles.whyImage} />
          <h3>Distinctive</h3>
          <p>The RangShala is driven by artists who truly believe in the power of all things visual. Become an owner of exclusive artwork made by passionate, talented creators with a unique understanding of creative expression.</p>
        </div>
        <div style={styles.whyItem}>
          <img src={vibrantImage} alt="Vibrant Artwork" style={styles.whyImage} />
          <h3>Vibrant</h3>
          <p>Pick and choose from a range of diverse and dynamic artistic styles - all under one roof. Brighten up your office or add a touch of colour to your home with prints and paintings from upcoming as well as established artists across India.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  whyRangshalaSection: {
    textAlign: 'left',
    padding: '40px 50px',
    backgroundColor: '#fff',
    margin: '40px 0',
  },
  decorativeLine: {
    width: '100px',
    height: '4px',
    backgroundColor: '#153448',
    borderRadius: '2px',
    marginBottom: '10px',
  },
  whyTitle: {
    textAlign: 'left',
    fontSize: '24px',
    color: '#153448',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  whyRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    alignItems: 'flex-start',
  },
  whyItem: {
    textAlign: 'center',
    maxWidth: '300px',
  },
  whyImage: {
    width: '200px',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '10px',
    border: 'none',
    borderRadius: 0,
  },
};

export default WhyRangShalaSection;