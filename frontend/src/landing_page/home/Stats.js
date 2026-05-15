import React from 'react'

function Stats() {
    return ( 
       <div className='container mt-5'>
        <div className='row p-5'>
            <div className='col-6 p-3'>
                <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                <h3 className='fs-4'>Customer-first always</h3>
                <p>Thats why 1+ crore customers trust on stockzen with rupess of 3.5+ lakh crore worth of equity investment</p>
                 <h3 className='fs-4'>No spam of grimmcks</h3>
                <p>No grimmicks,spam 'gamification or annoying' push notification.</p>
                 <h3 className='fs-4'>stockzen of universe</h3>
                <p>Not just an app but whole ecosystem. Our investment in 30+ fintech startups offer you tailored.</p>
                 <h3 className='fs-4'>do better with money</h3>
                <p>Thats why 1+ crore customers trust on stockzen with rupess of 3.5+ lakh crore worth of equity investment</p>

            </div>
            <div className='col-6 p-3'>
                <img src='media/images/ecosystem.png' alt='ecosystem image' style={{width:"85%"}}></img>
                <div>
                    <a href=''  className='mx-4' style={{textDecoration:"none"}}>explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                     <a href='' style={{textDecoration:"none"}}>explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats;