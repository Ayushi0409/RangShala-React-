import React from 'react';
import cc1Image from '../Images/cc1.png';
import cc2Image from '../Images/cc2.png';
import cc3Image from '../Images/cc3.jpeg';
import cc9Image from '../Images/cc9.png';
import cc10Image from '../Images/cc10.jpeg';
import cc6Image from '../Images/cc6.jpeg';
import cc7Image from '../Images/cc7.jpeg';
import cc8Image from '../Images/cc8.png';

const CuratorConsult = () => {
  const consultItems = [
    { image: cc1Image, title: 'Get all your questions answered' },
    { image: cc2Image, title: 'Make an informed decision' },
    { image: cc3Image, title: 'Helping you with visualization' },
    { image: cc9Image, title: 'Help with choice and combination' },
  ];

  const collectionSteps = [
    {
      image: cc10Image,
      title: 'Set A Budget',
      description:
        'The expenses that come with building an art collection is one of the largest concerns people face when deliberating whether to begin collecting or not. To ensure that this factor does not create problems along the way, start with setting your budget. One of the best aspects of art is the variety – no matter how high or low your budget is, you will find many artworks that are suitable!',
    },
    {
      image: cc6Image,
      title: 'Begin Researching',
      description:
        'Once you’ve set your budget, it’s time to start the research process! Having knowledge of what’s available and tracking the trajectory of artists will give you a strong understanding of art and help you discover what kind of collector you want to be. Start researching with art publications that attract you and go from there!',
    },
    {
      image: cc7Image,
      title: 'Gradually Start to Begin Your Collection',
      description:
        'This is the stage that most people worry about most when thinking about collecting. However, once you have set your budget and done your research, you are guaranteed to have an idea of where you would like to begin. Start with a single piece of art that has caught your eye and has an element of meaning and engagement with you personally. Once you’ve started with a single piece, you will be motivated to continue and remember to continue reaching out for advice and guidance. Most importantly, choose artworks that make you happy when you look at them, since they will be decorating your personal space, personal meaning, and attraction is of utmost importance.',
    },
    {
      image: cc8Image,
      title: 'Build and Use Your Network',
      description:
        'As your art collection grows, don’t hesitate to contact curators and advisors that are within your network to ask for guidance, opinions, and any additional information that you might want to know. Asking for help with building your collection is not something that only applies to your initial stages but continues throughout and even after your collection is complete. Never shy away from building relationships and receiving that second opinion!',
    },
  ];

  return (
    <div>
      {/* Consult Section */}
      <div className="consult-container">
        <div className="consult-content">
          <div className="decorative-line"></div>
          <h1>Here’s why you need a curator</h1>
          <p>
            Everyone has their personal style when it comes to decorating their homes. When it comes to art, the pieces you choose to design your home can instantly change the entire aesthetic of a space. To many, purchasing art is a daunting thought...
          </p>
          <div className="consult-grid">
            {consultItems.map((item, index) => (
              <div key={index} className="consult-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="consult-box">
          <div className="decorative-line"></div>
          <h2>Book a Consult!</h2>
          <p>Whatever your concern may be, our curators will help you navigate the world of Artworks...</p>
          <form>
            <input type="text" placeholder="Enter Email/Phone No." />
            <button type="submit" className="consult-button">
              Request Consultation
            </button>
            <p className="note">
              Submitting email/phone does not guarantee consultation. Our representative will get in touch with you regarding the next steps.
            </p>
          </form>
        </div>
      </div>

      {/* How to Begin Collection Section */}
      <section className="how-to-collection">
        <div className="collection-container">
          <h1>How do I begin my collection?</h1>
          {collectionSteps.map((step, index) => (
            <div key={index} className="collection-step">
              <img src={step.image} alt={step.title} />
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
          <p className="collection-note">
            These four steps are crucial in beginning and building your art collection(s). If you require special advisory for collecting art for a particular space from the HOC collection – our curators can serve you with a video conferencing call to understand your needs and space requirements.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CuratorConsult;