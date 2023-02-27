

import '../styles/form.css';
import { Link } from 'react-router-dom';
import {FaDollarSign} from 'react-icons/fa';
import secure from '../images/secure.png';
import Faq from './faq';
import Tab from './Tabs';
import HelpfulInfo from './helpful-information';
import Information from './Information';
import Footer from './footer';
import Header from './header';
import { useState } from 'react';
export default function Form(){
  const [data,setData]= useState();
  function handleChange(event){
    
    // access to e.target here
    setData(event.target.value);
    // console.log(data);
    // console.log(event.target.value);
}
    return (
      <>
      <Header/>
        <div className="form-wrapper">
          <form action="">
            <h3 className="form-main-heading">
              <strong className="text-uppercase form-heading">
                How Much Do You Need?
              </strong>
              <br />
              <small className="form-sub-heading text-uppercase">
                Enter amount between $100-$35,000
              </small>
            </h3>
            <div>
              <p className="form-heading-desc">
                APR can run between 5.99% up to 35.99% Loan products have a
                61-day minimum repayment term and a 72-month maximum repayment
                term.
              </p>
            </div>
            <div className="input-group">
              <span className="form-dollar">
                <FaDollarSign />
              </span>
              <input onChange={handleChange} className="form-input" type="text" placeholder="$5000" />
            </div>
            <div className="form-text1">
              <p class="text-center">
                <strong>
                  <small>Or pick a common amount:</small>
                </strong>
              </p>
            </div>
            <div className="d-flex justify-content-between dollar-button">
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`}  state={{ from: "$1000" }}>
                    <span className=" form-amount-col">$1000</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`}  state={{ from: "$2000" }}>
                    <span className=" form-amount-col">$2000</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between dollar-button">
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`} state={{ from: "$3000" }}>
                    <span className=" form-amount-col">$3000</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`} state={{ from: "$4000" }}>
                    <span className=" form-amount-col">$4000</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between dollar-button">
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`} state={{ from: "$5000" }}>
                    <span className=" form-amount-col">$5000</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`} state={{ from: "$6000" }}>
                    <span className=" form-amount-col">$6000</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between dollar-button">
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`} state={{ from: "$7000" }}
>
                    <span className=" form-amount-col">$7000</span>
                  </Link>
                </div>
              </div>
              <div className="">
                <div>
                  <Link className="text-decoration-none" to={`/form2`}  state={{ from: "$8000" }}>
                    <span className=" form-amount-col">$8000</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link className="text-decoration-none" to={`/form2`} state={{ from: {data} }}>
              <button
                type="button"
                class="btn btn-block btn-lg btn-default"
                id="manualLoanamt"
              >
                Continue
              </button>
            </Link>
            <div className="form-footer">
              <p className="form-footer-text">
                <small>
                  We use 256 bit SSL technology to encrypt your data.
                </small>
              </p>
              <div>
                <img src={secure} alt="" />
              </div>
            </div>
          </form>
        </div>

        <Faq />
        <Tab />
        <HelpfulInfo />
        <Information />
        <Footer />
      </>
    );
}