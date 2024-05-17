import React from "react";

const Service = () => {
  return (
    <div className='service__container'>
      <div className='service__card__container'>
        <div className='service__img'>
          <img
            src='https://images.pexels.com/photos/6484708/pexels-photo-6484708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>

        <div className='service__content'>
          <h2>Business Loan</h2>

          <p>
            Fuel the growth and innovation of your business with our tailored
            business loan solutions. Whether you're a startup looking for
            capital or an established business in need of expansion funds, we
            offer competitive rates and personalized service to help you succeed
          </p>
        </div>
      </div>

      <div className='service__card__container'>
        <div className='service__img'>
          <img
            src='https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>

        <div className='service__content'>
          <h2>Personal Loan</h2>

          <p>
            Our personal loan options are designed to provide you with the
            financial flexibility you need to achieve your goals. Whether you're
            planning a dream vacation, consolidating debt, or covering
            unexpected expenses, we offer competitive rates and flexible
            repayment terms to suit your needs.
          </p>
        </div>
      </div>

      <div className='service__card__container'>
        <div className='service__img'>
          <img
            src='https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>

        <div className='service__content'>
          <h2>Loan Application Process</h2>

          <p>
            At [Your Company Name], we've streamlined the loan application
            process to make it fast, easy, and hassle-free. Our online
            application portal allows you to submit your information securely
            from the comfort of your home, and our team of experts is here to
            guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
