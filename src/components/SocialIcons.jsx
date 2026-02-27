import { FaLinkedin, FaInstagram, FaGithub, FaReddit } from "react-icons/fa";
export default function SocialIcons() {
return (
    <>
        <a
            href="https://www.linkedin.com/in/mumer11/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin size={24} className="socialIcon" />
        </a>

        <a
            href="https://github.com/Muhammad1umer-tech"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub size={24} className="socialIcon" />
        </a>

        <a
            href="https://www.instagram.com/mumer_30"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram size={24} className="socialIcon" />
        </a>

        <a
            href="https://www.reddit.com/u/UmerOG/s/7zLRIEUhcW"
            aria-label="Reddit"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaReddit size={24} className="socialIcon" />
        </a>
    </>
);
}