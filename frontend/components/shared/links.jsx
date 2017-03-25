import React from 'react';

const Links = (props) => {
  const openPdf = () => {
    return window.open("assets/resume.pdf");
  };

  const openAngelList = () => {
    return window.open('https://www.angel.co/sonik-jhang');
  };

  const openLinkedin = () => {
    return window.open('https://www.linkedin.com/in/sonik-jhang');
  };

  const openGithub = () => {
    return window.open("https://github.com/SJhang");
  };

  const openEmail = () => {
    location.href = "mailto:sonik.jhang@utexas.edu";
  };

  return (
    <div className="links">
      <li className="fa-stack fa-lg" onClick={() => openPdf()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-file-pdf-o fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li className="fa-stack fa-lg" onClick={() => openAngelList()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-angellist fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li className="fa-stack fa-lg" onClick={() => openLinkedin()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-linkedin-square fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li className="fa-stack fa-lg" onClick={() => openGithub()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-github fa-stack-1x" aria-hidden="true"/>
      </li>
      <li className="fa-stack fa-lg" onClick={() => openEmail()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-envelope-o fa-stack-1x" aria-hidden="true"></i>
      </li>
    </div>
  );
};

export default Links;
