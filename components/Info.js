import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="https://lh4.googleusercontent.com/XH8pxhxMnIKw7Iw37dcl-kWAdlroD1SJlmyokTrxOin4TSRqCjlZBxad1s_IjiZeetY=w2400" alt="Profile picture"/>
            <div className="intro flex">
                <h2 className="name">LEONARD MBIBI</h2>
                <h3 className="profession margin2">Frontend developer</h3>
                <h4 className="website margin2">gregobyte.com</h4>
            </div>
            
            <div className="contact flex ">
                <div className="contact-email flex btn"><i className="fa-solid fa-envelope fa-1x"></i> Email</div>
                <div className="contact-linkedIn flex btn"><i className="fa-brands fa-linkedin-in fa-1x"></i> LinkedIn</div>
            </div>
        </div>
        )
}