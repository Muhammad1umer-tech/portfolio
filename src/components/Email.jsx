import {Phone, Mail} from "lucide-react";
import SocialIcons from "./SocialIcons";
export default function EmailSection() {
  return (
    <section className="contactCard">
      <div className="contactHeader">
        <h2>Let’s Work Together</h2>
        <div className="contactUnderline">
          <span className="uOrange" />
          <span className="uBlue" />
        </div>
      </div>

      <p className="contactIntro">
        I am open to any opportunities in Cloud Engineering, DevOps,
        Infrastructure, or Backend Development.  
        Feel free to reach out — I’d love to connect.
      </p>

      <div className="contactInfo">
        <a href="mailto:umer.cloud0@gmail.com" className="contactItem">
          <Mail size={22} />
          <span>umer.cloud0@gmail.com</span>
        </a>

        <a href="tel:+14378552924" className="contactItem">
          <Phone size={22} />
          <span>+1 (437) 855 2924</span>
        </a>
      </div>

     <div className="socialRow socialRow-center">
       <SocialIcons />
     </div>
    </section>
  );
}