import React from "react";
import CV from "../../../assets/CVEN.pdf";
import CVDE from "../../../assets/CVDE.pdf";

const CTADE = () => {
    return (
        <div className='cta'>
            <a href={CVDE} target='blank' className='btn'>
                Download CV <strong>DE</strong>
            </a>
            <a href={CV} target='blank' className='btn'>
                Download CV <strong>EN</strong>
            </a>

            <a href='#contact' className='btn btn-primary'>
                {" "}
                Kontakt
            </a>
        </div>
    );
};

export default CTADE;
