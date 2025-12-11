import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          {/* Logo Section */}
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Section */}
          <div className="col">
            <p>Company</p>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>About</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Products</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Pricing</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Referral programme</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Careers</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Zerodha.tech</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Press & media</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Zerodha cares (CSR)</a>
          </div>

          {/* Support Section */}
          <div className="col">
            <p>Support</p>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Contact</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Support portal</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Z-Connect blog</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>List of charges</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Downloads & resources</a>
          </div>

          {/* Account Section */}
          <div className="col">
            <p>Account</p>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Open an account</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>Fund transfer</a>
            <a href="" className="text-muted mt-1 d-block" style={{ textDecoration: "none" }}>60 day challenge</a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. KYC is one-time exercise.
            If anyone claims to be from Zerodha offering stock tips, create a ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
