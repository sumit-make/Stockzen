import React from 'react'
function Education() {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-6'>
                 <img src='media/images/education.svg' alt='education image' style={{width:"85%"}}></img>
            
            </div>
            <div className='col-6 mt-5'>
                <h1 className='fs-2'>Free and open market education</h1>
                <p>Not just an app but whole ecosystem. Our investment in 30+ fintech startups offer you tailored. </p>
                        <a href=''  className='mx-4' style={{textDecoration:"none"}}>Versatiy<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <p>Versatiy the largest online stock market education book in the workd covering everything from basic to advanced trading.</p>
               <a href=''  className='mx-4' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <p>Thats why 1+ crore customers trust on stockzen with rupess of 3.5+ lakh crore worth of equity investment.</p>
            </div>
        </div>
     </div>
     );
}

export default Education;