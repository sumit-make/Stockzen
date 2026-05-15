import React from 'react'


function Pricing() {
    return ( 
     <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-4'>Unbeatable pricing</h1>
                <p>We poineered the concept of discount broking and price transparency in india.</p>
            </div>
            <div className='col-2'>
            </div>
            <div className='col-6 '>
                <div className='row'>
                 <div className='col p-2 border'>
                <h1><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                <p>Free equity delivery and direct mutual</p>
                </div>
                <div className='col p-2 border'>
                    <h1><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                    <p>Free equity delivery and direct mutual</p>
                </div>
                </div>
               
              
            </div>
        </div>
     </div>
     );
}

export default Pricing;