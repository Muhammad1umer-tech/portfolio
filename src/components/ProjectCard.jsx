import Image from "next/image";

export default function ProjectCard({
  badgeTop = "Project",
  title = "Telkomsel Tech Titans League - Cyber Security",
  badgeBottom = "Azure, AWS, GCP",
  imageSrc,
  href = "#",
}) {
  return (
    <a href={href} className="card" target="_blank" rel="noopener noreferrer">
      <div className="mediaWrap">
        <span className="badgeTop">{badgeTop}</span>

        <div className="media">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="img"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>
        <span className="badgeBottom">{badgeBottom}</span>
      </div>
    </a>
  );
}