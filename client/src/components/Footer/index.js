import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
const Footer = () => {
    return (
        <footer>
            <h4>Barbados</h4>
            <a href="tel:246-821-9942">Tel:246-821-9942</a>&nbsp; OR&nbsp;
            <a href="tel:246-844-0223">Tel:246-844-0223</a> <br />
            <address>
                Sugar Cane Mall <br />
                Roebuck St. <br />
                Bridgetown, St. Michael
            </address>
            <a href="#">
                <InstagramIcon />
            </a>
            <a href="#">
                <FacebookIcon />
            </a>
            <a href="#">
                <TwitterIcon />
            </a>
            <p>ALL RIGHTS RESERVED 2023 © EMPEROR'S DISH.</p>
        </footer>
    );
};

export default Footer;
