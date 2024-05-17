import React from "react";
import { About__img } from "../../assets/Image";
import { AboutTeam } from "../Utills/AboutData";

const About = () => {
  return (
    <div>
      <p className='heading'>About us</p>
      <div className='detail__container'>
        <div className='detail__description'>
          <p className='about__content'>
            At Finance Book, our mission is to empower individuals and
            businesses by providing accessible and reliable lending solutions.
            We believe in fostering financial inclusion and helping our clients
            achieve their goals.
          </p>
        </div>
        <div className='detail__image'>
          <img src={About__img} alt='' />
        </div>
      </div>
      <div>
        <h2 className='heading'>Our Team</h2>

        <p className='team__container'>
          Meet the dedicated professionals behind [Your Company Name]. With a
          diverse range of expertise in finance, technology, and customer
          service, our team is committed to delivering exceptional service and
          support to our clients. [Founder's Name]: As the founder of [Your
          Company Name], [Founder's Name] brings [X] years of experience in
          finance and a passion for innovation. [Key Team Member 1]: With
          expertise in [Area of Expertise], [Key Team Member 1] leads our
          [Department/Team Name] with a focus on [Key Responsibility]. [Key Team
          Member 2]: As our [Position], [Key Team Member 2] ensures that our
          clients receive personalized attention and tailored
          financial solutions.
        </p>
      </div>
      <div className='team__members__container'>
        <div className='team__image'>
          <img
            src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </div>
        <div className='team_details_found'>
          <p>
            Meet the dedicated professionals behind [Your Company Name]. With a
            diverse range of expertise in finance, technology, and customer
            service, our team is committed to delivering exceptional service and
            support to our clients. [Founder's Name]: As the founder of [Your
            Company Name], [Founder's Name] brings [X] years of experience in
            finance and a passion for innovation. [Key Team Member 1]: With
            expertise in [Area of Expertise], [Key Team Member 1] leads our
            [Department/Team Name] with a focus on [Key Responsibility]. [Key
            Team Member 2]: As our [Position], [Key Team Member 2] ensures that
            our clients receive personalized attention and tailored
            financial solutions.
          </p>
        </div>
      </div>
      {/* icon dowm la heading some para link la learn more icon dowm la heading
      some para link la learn more side la image
      <br />
      <br />
      <hr /> <br />
      <br />
      <h1> -- Test Monials -- </h1>
      <p> Happy Clients </p>
      <h1> -- Agents -- </h1> */}
      {/* <p> Our Agents </p> */}
    </div>
  );
};

export default About;
