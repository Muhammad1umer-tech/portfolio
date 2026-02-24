import { FaLinkedin, FaInstagram, FaGithub, FaReddit } from "react-icons/fa";
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
    <p className="role">DevOps | SRE | Cloud Engineer</p>

    <div className="socialRow">
      <FaLinkedin size={24} className="socialIcon" />
      <FaInstagram size={24} className="socialIcon" />
      <FaGithub size={24} className="socialIcon" />
      <FaReddit size={24} className="socialIcon" />
    </div>
  </div>

  <div className="leftPart3">{/* not used for now */}</div>
</div>

            <div className="verticalLine"></div>

            <div className="rightBox">
              <div className="infoGroup">
                <div className="infoItem">
                  <span className="label">EMAIL</span>
                  <span className="value">umer.cloud0@gmail.com</span>
                </div>

                <div className="infoItem">
                  <span className="label">LOCATION</span>
                  <span className="value">Toronto, ON</span>
                </div>
              </div>

              <div className="infoGroup">
                <div className="infoItem">
                  <span className="label">CV</span>
                  <span className="value downloadRow">
                    Download
                    <img src="/download.png" alt="Download" className="downloadIcon" />
                  </span>
                </div>

                <div className="infoItem">
                  <span className="label">STATUS</span>
                  <span className="value">Open to work 🍉</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}