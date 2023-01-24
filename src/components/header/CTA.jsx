import React from "react";
import CV from "../../assets/CVEN.pdf";

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} target='blank' className="btn">Download CV</a>
            <a href='#contact' className="btn btn-primary"> Contact me</a>
        </div>
    );
};

export default CTA;
