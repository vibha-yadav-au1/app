import React from 'react';
import Header from './header';
import './messagingBoard.css';


class Message extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div class="container pt-3"></div>

                    <div className="row">
                        <div className="col-3">
                            <div className="msg-main">
                                <p className="heading1">Messaging
                                <span className="msg-icon"><i className="fas fa-comment-plus"></i></span>
                                    <span className="msg-icon"><i className="fas fa-user-plus"></i></span>
                                </p>


                                <div className="msg-main2">
                                    <form>
                                        <div className="msg-search">
                                            <span className="icon2"><i class="fa fa-search"></i></span>
                                            <input className="form-control1" type="text" placeholder="Search Message " name="search" />

                                        </div></form>
                                    {/*<div className="chat-sec">

                                            <img className="" src={require("./images/dummy.png")} />
                                            <p>Hello. How are you today?</p>
                                            <span className="time-right">11:00</span>
                                            
        </div>*/}
                                    <div className="container-2">
                                        <img className="" src={require("./images/dummy.png")} />
                                        <p>Hello. How are you today?</p>
                                        <span className="time-right">11:00</span>
                                    </div>

                                    <div className="container-2 darker">
                                        <img className="" src={require("./images/dummy.png")} />
                                        <p className="text">Hey! I'm fine.</p>
                                        <span className="time-left">11:01</span>
                                    </div>

                                    <div className="container-2">
                                        <img className="" src={require("./images/dummy.png")} />
                                        <p>Sweet! Let's meet</p>
                                        <span className="time-right">11:02</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-5" id="chat-right">
                            <div class="container pt-3"></div>
                            <div className="msg-right" >
                                <div className="msg-heading"><p>New Message   <span className="msg-user"><i class="fas fa-user-plus"></i></span></p>

                                </div>
                                <div className="msg-right-inner">
                                    <div className="ind-input">
                                        <form>
                                            <input className="msg-input" type="text" placeholder="Type a Name or multiple names" />
                                        </form>
                                    </div>
                                    <div className="send-input">
                                        <form>
                                            <span className="camera"><img className="" src={require("./images/Camera.png")} style={{ width: "56px", height: "56px" }} /></span>
                                            <input className="enter-input" type="text" placeholder="Type a Name or multiple names"

                                            />
                                            <span className="camera"><img className="" src={require("./images/Gif.png")} style={{ width: "60px", height: "60px" }} /></span>
                                            <span className="camera"><img className="" src={require("./images/Picture.png")} style={{ width: "60px", height: "60px" }} /></span>
                                            <span className="camera"><img className="" src={require("./images/Attachment.png")} style={{ width: "60px", height: "60px" }} /></span>
                                            <span className="camera"><img className="" src={require("./images/Send.svg")} style={{ width: "60px", height: "60px" }} /></span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="box1"></div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Message;