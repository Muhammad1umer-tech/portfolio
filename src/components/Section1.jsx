import SocialIcons from "./SocialIcons";
import { Download } from "lucide-react";
export default function Section1() {
  return (
    <div className="section1Card">
      <div className="parentRow">     
        <div className="leftBox">
          <div className="leftPart1">
            <img className="profileImg" src="/profile.png" alt="Profile" />
          </div>
          <div className="leftPart2">
            <h2 className="name">M Umer</h2>
            <p className="role">Azure Cloud & Infrastructure Engineer</p>

            <div className="socialRow">
              <SocialIcons />
            </div>
          </div>

          <div className="leftPart3">{/* not used for now */}</div>
        </div>

        <div className="verticalLine"></div>

        <div className="rightBox">
          <div className="infoGroup">
            <div className="infoItem">
              <span className="label">EMAIL</span>
              <a target="_blank" href="mailto:umer.cloud0@gmail.com" className="value value-pointer">
                  <span>umer.cloud0@gmail.com</span>
              </a>
            </div>

            <div className="infoItem">
              <span className="label">LOCATION</span>
              <span className="value">Toronto, Canada</span>
            </div>
          </div>

          <div className="infoGroup">
            <div className="infoItem">
              <span className="label">CV</span>
              <a target="_blank" href="https://drive.google.com/file/d/1LYxLzGaHM_9oeFUdSt4rRB3VqQAdsvaM/view?usp=drive_link" className="value downloadRow value-pointer">
                  <span>Download</span>
                  <Download className="downloadIcon" size={14}/>
              </a>
            </div>

            <div className="infoItem">
              <span className="label">STATUS</span>
              <span className="value">Open to work</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}