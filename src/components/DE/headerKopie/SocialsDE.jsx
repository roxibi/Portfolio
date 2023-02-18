import React from "react";



const SocialsDE = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/roxana-bita' target='_blank' rel="noopener noreferrer" >
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href='https://github.com/roxibi' target='_blank' rel="noopener noreferrer" >
            <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
            </a>
            {/* <a href="" target="_blank"></a> */}
            <a href='mailto:roxana.bita@gmail.com' target='_blank' rel="noopener noreferrer" >
            <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
            </a>
        </div>
    );
};

export default SocialsDE;
