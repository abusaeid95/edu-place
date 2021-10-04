import React from 'react';

const Contact = () => {
    return (
        <div className=" container d-flex my-5">
            <div className="col">
                <div>
                    <p>phone No.</p>
                    <h5>(88) 193 326 867</h5>
                    <hr />
                </div>
            </div>
            <div className="col">
                <h2>Get in Touch <span>With Us</span></h2>
                <div>
                    <div>
                    <input type="text" name="" id="" placeholder="Name"/>
                    </div>
                  
                    <div className="my-2">
                    <input type="email" name="" id="" placeholder="Email"/>
                    </div>
                    
                    <div><input type="text" name="" id="" placeholder="Subject"/></div>
                    
                    <div><textarea className="mt-2" name="" id="" cols="30" rows="10" placeholder="Message"></textarea></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;