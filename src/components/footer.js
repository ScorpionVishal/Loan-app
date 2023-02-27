import '../styles/footer.css';

export default function Footer(){
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 footer-desc1">
                <p className="text-justify ">
                  <small>
                    The operator of this website is not a lender, financial
                    institution, loan broker or an agent of a lender, financial
                    institution or loan broker. This website collects personal
                    information provided by you and uses that information to
                    connect you to third party lenders and non-lenders in our
                    network. Your information may be shared with non-lenders or
                    other intermediary service providers, to help connect you
                    with a lender. This website provides its services to you
                    free of charge but may receive payment from lenders and
                    non-lenders for referring a lead to them. You may not
                    qualify with any lender or financial institution for any
                    loan amount, or you may qualify with a lender or financial
                    institution for an amount that is much lower than what you
                    are seeking. If you do not qualify for the loan product you
                    are seeking, we may present you with different financial
                    solutions that may be of interest to you. If you are
                    connected with a lender, make sure to check the terms of
                    your loan agreement and make a determination of whether or
                    not you can afford the payments before signing. Lenders may
                    perform credit checks through any credit reporting bureau
                    and may also verify the information that you provide on our
                    website. We strongly encourage you to reject any offer that
                    is not within your financial means. Short-term, small-dollar
                    loans are not a long-term solution to financial hardship.
                    You may also consider seeking professional advice regarding
                    your financial circumstances and alternatives to loan
                    products. Lenders that participate in the services provided
                    by this website do not offer loans in every state. If you
                    are from a state that the lenders do not service, you will
                    not be connected to a lender. Our service does not
                    constitute an offer or solicitation for any loan products
                    that are prohibited by state law.
                  </small>
                </p>
                <hr />
              </div>
              <div class="col-xs-12 text-center footer-desc1">
                <div class="form-group contact-wrapper">
                  <p>
                    <small>
                      <strong>Contact Us:</strong> <br />{" "}
                      <span>
                        GraceLoanAdvance is run by RBD Enterprises, LLC.
                      </span>{" "}
                      <br />
                      Address: 4470 W Sunset Blvd #91234 Los Angeles, CA 90027{" "}
                      <br />
                      Telephone Number: (424) 317-8925 <br />
                      Email Address: info@graceloanadvance.com
                    </small>
                  </p>
                </div>
                <p className="text-center mb-0">
                  Copyright © 2015 - 2023 graceloanadvance.com - all rights
                  reserved
                </p>
              </div>

              <div className="col-xs-12 nav-list-head">
                <ul className="nav ">
                  <a className="nav-tab-list footer-nav text-decoration-none">Terms & Conditions</a>
                  <a className="nav-tab-list footer-nav text-decoration-none">Lending Policy</a>
                  <a className="nav-tab-list footer-nav text-decoration-none">
                    Do Not Sell My Personal Information
                  </a>
                  <a className="nav-tab-list footer-nav text-decoration-none">Loan Rates & Fees</a>
                  <a className="nav-tab-list footer-nav text-decoration-none">Credit Authorization</a>
                  <a className="nav-tab-list footer-nav text-decoration-none">Privacy Policy</a>
                  <a className="nav-tab-list footer-nav text-decoration-none">Unsubscribe</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}