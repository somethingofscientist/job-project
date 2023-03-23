import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-main">
          <div className="footer-connect-with-us">
            <Link className="link"  to="/">HOME</Link>
            <Link className="link" to="/about">ABOUT</Link>
            <Link className="link" to="/contact">CONTACT</Link>
          </div>

          <div className="footer-about-us">
            <span style={{ fontSize: "25px" }}>B</span>log (a truncation of "weblog") is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries. Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.
          </div>

          <div className="footer-connect-with-us">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
          </div>
        </div>

        <div className="footer-copyright">© 2023 All Rights Reserved To The MERN</div>
        <div className="footer-copyright">Terms & Condition | Privacy Policy | Terms Of Use | Accessibility</div>
      </div>
    </>
  )
}
