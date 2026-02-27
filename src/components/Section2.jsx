"use client";

import { UserRound, FolderDot, ShieldCheck, SquarePen, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Section2() {
  const pathname = usePathname();

  return (
    <div className="navCard">
      <NavItem
        label="ABOUT"
        icon={<UserRound className="navIcon" size={40} />}
        href="/"
        active={pathname === "/"}
      />

      <NavItem
        label="Projects"
        icon={<FolderDot className="navIcon" size={40} />}
        href="/projects"
        active={pathname === "/projects"}
      />

      <NavItem
        label="Certificate"
        icon={<ShieldCheck className="navIcon" size={40} />}
        href="/certificate"
        active={pathname === "/certificate"}
      />

      <NavItem
        label="Blogs"
        icon={<SquarePen className="navIcon" size={40} />}
        href="/blogs"
        active={pathname === "/blogs"}
      />

      <NavItem
        label="Email"
        icon={<Mail className="navIcon" size={30} />}
        href="/email"
        active={pathname === "/email"}
      />
    </div>
  );
}

function NavItem({ label, icon, active, href }) {
  return (
    <div className="navItemContainer">
      <Link
        href={href}
        className={`navItem ${active ? "navItemActive" : ""}`}
      >
        {icon}
        <span className="navLabel">{label}</span>
      </Link>
    </div>
  );
}