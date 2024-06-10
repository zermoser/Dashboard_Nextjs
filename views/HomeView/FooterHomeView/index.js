import React from "react";
import { FooterTestStructureStyle } from "./styled";
import "bootstrap/dist/css/bootstrap.css";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

export default function FooterHomeView() {
  return (
    <FooterTestStructureStyle>
      <div className="contact-us-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="container-content">
                <div>
                  <div className="title-content-footer">ที่อยู่</div>
                  <div className="content-footer">
                    Bang Khae Subdistrict, Bang Khae District, Bangkok 10160
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="container-content">
                <div>
                  <div className="title-content-footer">ติดต่อเรา</div>
                  <div className="content-footer">
                    <div className="tel-footer">
                      <div className="icon-footer">
                        <CallOutlinedIcon />
                      </div>
                      <div className="telephone-number">
                        <div>+666 4625 9601</div>
                      </div>
                    </div>
                    <div className="email-footer">
                      <div className="icon-footer">
                        <MailOutlineOutlinedIcon />
                      </div>
                      <div className="email-address">
                        Kittipoj.na@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-footer">
        <div className="policy">Privacy Policy | Term of Service</div>

        <div className="company">
          © Copyright 2024, Kittipoj Naewthavorn
        </div>
      </div>
    </FooterTestStructureStyle>
  );
}
