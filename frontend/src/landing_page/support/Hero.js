import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='container px-5' id='supportHero'>
            <div className='p-3' id="supportWraper">
                <h3 className='text-left text-mutted'>Support Portal</h3>
                <a href=""style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-8 p-3'>
                    <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='form-control' placeholder='Eg. how do I activate F&0, why is my order getting rejected'/><br/>
                    <a href="" style={{color:"white",marginRight:"20px"}}>Track Accouunt Opening</a>
                    <a href="" style={{color:"white",marginRight:"20px"}}>Track Segment Activation</a>
                    <a href="" style={{color:"white",marginRight:"20px"}}>Intraday margins</a>
                    <a href="" style={{color:"white",marginRight:"20px"}}>Kite user Manual</a>
                </div>
                <div className='col-4 p-3 mt-3 mb-3 ml-3 mr-3'>
                    <h1 className='fs-3 text-left'>Featured</h1>
                    <ol>
                        <li><a href=""style={{color:"white",marginRight:"20px"}}>current Takeovers and delisting - January 2024</a></li>
                        <li><a href=""style={{color:"white",marginRight:"20px"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    </div>
                </div>
                </div>
             </section>
     );
}

export default Hero;