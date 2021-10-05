import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

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
                <Container className="my-5">
                <form class="form-horizontal" >
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message" class="col-sm-2 control-label">Message</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="4" name="message"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <Button className="subs-btn mt-3">Submit</Button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                        </div>
                    </div>
                </form>
            </Container>
            </div>
        </div>
    );
};

export default Contact;