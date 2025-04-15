import React from 'react';
import expertAdviceImage from '../Images/Expert Advise.png';
import ideaImage from '../Images/Idea.png';
import choiceImage from '../Images/choice.png';
import implementationImage from '../Images/Implementation.png';
import artworkImage from '../Images/artwork-image.jpg';

const Bespoke = () => {
  const whyItems = [
    {
      image: expertAdviceImage,
      title: 'Expert Advice',
      description: 'We work to understand your requirements and how best to cater to them.',
    },
    {
      image: ideaImage,
      title: 'Idea',
      description: 'We present a variety of tailor-made concepts for you to choose from.',
    },
    {
      image: choiceImage,
      title: 'Choice',
      description: 'Pick the artwork that matches the feel of your space.',
    },
    {
      image: implementationImage,
      title: 'Implementation',
      description: 'We ensure that you receive authentic, professionally created artwork.',
    },
  ];

  return (
    <div className="bespoke-container">
      <div className="why-rangshala-section">
        <h1 className="section-title">Why RangShala?</h1>
        <div className="why-row">
          {whyItems.map((item, index) => (
            <div key={index} className="why-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="art-advisory-section">
        <div className="form-container">
          <h1 className="section-title">Art Advisory Services</h1>
          <p>Connect with our curators and team of experts to help you acquire the right artwork based on your needs or client's requirements.</p>
          <p>If you are an interior designer or architect looking to purchase works for offices, homes, cafes, or large projects, please fill out the form below and we will get back to you.</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Company Name" required />
            <input type="text" placeholder="Designation" required />
            <input type="email" placeholder="Email Address" required />
            <select>
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input type="text" placeholder="Mobile No" required />
            <textarea placeholder="Enquiry" rows="4" required></textarea>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
        <div className="image-container">
          <img src={artworkImage} alt="Art Advisory" />
        </div>
      </div>
    </div>
  );
};

export default Bespoke;
