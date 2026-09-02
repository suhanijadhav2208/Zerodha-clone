import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"  alt="Small Case"  style={{width:"150px",height:"80px",objectFit:"contain"}}/>
          <p className="text-small text-mutted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="media/images/streakLogo.png"  alt="Streak" style={{width:"150px",height:"80px",objectFit:"contain"}}/>
          <p className="text-small text-mutted">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"  alt="Sensibull"  style={{width:"150px",height:"80px",objectFit:"contain"}}/>
          <p className="text-small text-mutted"> Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt=" Zerodha Fund house"  style={{width:"150px",height:"80px",objectFit:"contain"}}/>
          <p className="text-small text-mutted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="media/images/goldenpiLogo.png" alt="Golden Pi"  style={{width:"150px",height:"80px",objectFit:"contain"}}/>
          <p className="text-small text-mutted">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Ditto"  style={{width:"150px",height:"80px",objectFit:"contain"}} />
          <p className="text-small text-mutted">Insurance</p>
        </div>
      </div>
     <button className='p-2 btn btn-primary fs-5 mb-5 text-center' style={{width:"20%", margin:"0 auto",display:"block"}}>SignUp Now</button>

            
    </div>
  );
}

export default Universe;
