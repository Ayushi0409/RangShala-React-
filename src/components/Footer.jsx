import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Rang Shala. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ccc',
    fontSize: '14px',
  },
};

export default Footer;