import React from 'react';
import back1Image from '../Images/Back1.jpg';

const WelcomeSection = () => {
  return (
    <div style={styles.aboutSection}>
      <div style={styles.back1ImageContainer}>
        <img src={back1Image} alt="Back1 Image" style={styles.back1Image} />
      </div>
      <div style={styles.aboutContent}>
        <div style={styles.decorativeLine}></div>
        <h1>Welcome, to the<br /> Rang Shala<br /></h1>
        <h3>A Space For Creativity to Break Free. Where Every Artist Approach Finds a Home</h3>
        <p>
          The Rang Shala is a project born out of a passion for creative excellence. Its creators—Niyati Agravat and Ayush Babariya—are synonymous with art, culture, and innovation.
          Three distinct, dynamic, and fiercely individualistic styles come together to form this unique collective. Ultimately, a love for the arts is the roof above this reflective, lively house.
        </p>
        <p>
          Every form of visual expression has an important place in The Ra. This is a home of multiple art forms, housing everything from pieces inspired by nature that take you back to the basics, to photographs that capture and immortalize fleeting moments.
        </p>
        <p>
          At the heart of this endeavor is a commitment to the Indian artistic community. To that end, The Rang Shala keeps its doors open for artists from all over the country, giving homegrown talent an opportunity to showcase their work on a global platform.
        </p>
        <p>Once again, welcome to The Rang Shala. We are delighted to have you here.</p>
      </div>
    </div>
  );
};

const styles = {
  aboutSection: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '20px',
    margin: '40px 50px',
  },
  back1ImageContainer: {
    flex: 1,
    textAlign: 'left',
  },
  back1Image: {
    width: '700px',
    height: '550px',
    opacity: 0.8,
    borderRadius: '8px',
  },
  aboutContent: {
    flex: 1,
    maxWidth: '600px',
    lineHeight: 1.8,
    color: '#333',
    fontFamily: "'Georgia', serif",
  },
  decorativeLine: {
    width: '100px',
    height: '4px',
    backgroundColor: '#153448',
    margin: '0 auto 10px',
    borderRadius: '2px',
  },
};

export default WelcomeSection;