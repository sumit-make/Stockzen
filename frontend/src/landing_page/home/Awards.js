import React from 'react'
function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millian stockzen client contribute to over 15% of all retail order volumes in India delily by trading and investing in</p>
                    <div className='row'>
                        <div className='col-6'>
                             <ul>
                        <li>future and option</li>
                        <li>commodity derivatives</li>
                        <li>currency derivatives</li>
                    </ul>
                        </div>
                        <div className='col-6'>
                             <ul>
                        <li>future and option</li>
                        <li>commodity derivatives</li>
                        <li>currency derivatives</li>
                    </ul>
                        </div>
                    </div>
                   <img src='media/images/pressLogos.png' alt='presslogo' style={{width:"95%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;