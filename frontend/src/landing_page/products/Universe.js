import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="fw-bold mb-2">The Zerodha Universe</h1>
        <p className="text-muted fs-5 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row items */}
        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Algo & strategy based trading</p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/sensibullLogo.png"
            alt="Sensibull"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Options trading platform</p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Simple, low-cost mutual funds</p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Bonds & fixed income investments</p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2">Insurance made simple</p>
        </div>

        {/* Signup button */}
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary fs-5 mt-3"
            style={{
              width: "220px",
              padding: "10px",
              borderRadius: "30px",
              fontWeight: "500",
            }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
