import { UserRound, FolderDot, ShieldCheck, SquarePen, Mail } from "lucide-react";
import Link from "next/link";

export default function Section2() {
  return (
    <div className="navCard">
      <NavItem label="ABOUT" icon={<UserRound size={44} />} href="/about" />
      <NavItem label="Projects" icon={<FolderDot size={44} />} href="/projects" />
      <NavItem label="Certificate" icon={<ShieldCheck size={44} />} href="/certificate" />
      <NavItem label="Blogs" icon={<SquarePen size={44} />} href="/blogs" />
      <NavItem label="Email" icon={<Mail size={44} />} href="/email" />
    </div>
  );
}

function NavItem({ label, icon, active, href }) {
  return (
    <div className="navItemContainer">
      <Link href={href} className={`navItem ${active ? "navItemActive" : ""}`}>
        {icon}
        <span className="navLabel">{label}</span>
      </Link>
    </div>
  );
}