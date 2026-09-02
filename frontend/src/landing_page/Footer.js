import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor: "rgb(250,250,250)"}}>
    <div className='container mt-5 border-top'>
        <div className='row mt-5'>
            <div className='col'>
                <img src="media/images/logo.svg" style={{ width:"50%"}}/>
                <p>
                    &copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved.
                </p>
            </div>
            <div className="col">
                <p>Account</p>
                <a style={{textDecoration:"none"}} href="">Open demat account</a>
                <br/>
                <a style={{textDecoration:"none"}} href="">Minor demat account</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">NRI demat account</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">HUF demat account</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">Commodity </a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">Dematerialisation</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">Fund transfer</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">MTF</a>
                 <br/>

            </div>
            <div className="col">
                <p>Support</p>
                 <a style={{textDecoration:"none"}}href="">Contact us</a>
                  <br/>
                <a style={{textDecoration:"none"}} href="">Support portal</a>
                 <br/>
                <a style={{textDecoration:"none"}}  href="">How to file a complaint?</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">Status of your complaints</a>
                 <br/>
                <a style={{textDecoration:"none"}} href="">Bulletin </a>
                 <br/>
                <a style={{textDecoration:"none"}}  href="">Circular</a>
                 <br/>
               
            </div>
            <div className="col">
                <p>Company</p>
                 <a style={{textDecoration:"none"}} href="">About</a>
                  <br/>
                <a style={{textDecoration:"none"}} href="">Philosophy</a>
                 <br/>
                <a style={{textDecoration:"none"}}  href="">Press & media</a>
                 <br/>
                
            </div>
        </div>
        <div className='mt-5 text-mutted' style={{fontSize:"14px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

<p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products</p>

<p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI)</p>
</div>
    </div>
    </footer>
);
}

export default Footer;