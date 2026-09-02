import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'> 
        <div className='row p-5 mt-5 text-center border-top'>
            <div className='col-8 p-4 text-center'>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-4'>Brokerage calculator</h3></a>
                <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}} className="text-mutted mt-5" >
                    <li className='p-1 text-mutted'>Call and Trade and RMS auto squareoff:additional charges of ₹50 + GST per order.</li> 
                    <li className='p-1 text-mutted'>Digital contract notes will be sent via-email.</li>
                    <li className='p-1 text-mutted'>Physical copies of contract notes, if required shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className='p-1 text-mutted'>For NRI account(non-PIS), 0.5% or ₹100 per executed order for equity(whichever is lower).</li>
                    <li className='p-1 text-mutted'>For NRI account(PIS), 0.5% or ₹200 per executed order for equity(whichever is lower).</li>
                    <li className='p-1 text-mutted'>If the account is in debit balance,order placed will be charged ₹40 per executed offer instead ₹20 per executed order.</li>
                </ul>
            </div>
            <div className='col-4 p-4'>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
            </div>
        </div>
            </div>
     );
}

export default Brokerage;