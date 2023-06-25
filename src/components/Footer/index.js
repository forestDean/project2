import React, { Component } from "react";
import "./footer.css";
// import Row from "../../components/Row";

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';


import { FaFacebook } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'

class Footer extends Component {
  render() {
      return (
      //   <footer className="footer">
      //     <Row>
      //       <small className="mt-3 text-center">©2023 SuperCool</small>
      //     </Row>
      //   </footer>
      // 

      <div className="footer">
		<div className="socialMedia"> 
		<a target="_blank" href="https://www.facebook.com/">
			<FaFacebook />
			</a> 

			<a target="_blank" href="https://www.instagram.com/">
			<FaInstagram />
			</a>

			<a target="_blank" href="mailto: abc@example.com">
			<MdEmail />
			</a>
		</div>

		<p> &copy; 2023 BeeBooks</p>
	</div>
	
      );
    }
  }

export default Footer;
