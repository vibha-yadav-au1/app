import React from 'react';
import { Link } from 'react-router-dom';
import "./notification.css";


class Notification extends React.Component {
    render() {
        return (

            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalPush">Launch modal</button>


                <div className="modal fade" id="modalPush" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-notify modal-info" role="document">

                        <div class="modal-content text-center">
                            <h4 className="Not-heading">New Notifications</h4>


                            <div className="card" id="notification-card">
                                <div className="card-body">
                                    <p className="card-text"><div className="">
                                        <p className="heading">Be always up to date</p>
                                    </div></p>
                                </div>
                            </div>

                            <div className="card" id="notification-card">
                                <div className="card-body">
                                    <p className="card-text">
                                        <div className="">
                                            <p className="heading">Be always up to date</p>
                                        </div></p>
                                </div>
                            </div>
                            <div className="card" id="notification-card">
                                <div className="card-body">
                                    <p className="card-text">
                                        <div className="">
                                            <p className="heading">Be always up to date</p>
                                        </div></p>
                                </div>
                            </div>



                            <div class="modal-footer flex-center">
                                <Link to="https://mdbootstrap.com/products/jquery-ui-kit/" className="btn btn-info">Yes</Link>
                                <Link to="" type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">No</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;