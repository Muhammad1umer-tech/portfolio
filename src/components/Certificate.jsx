import ProjectCard from "./ProjectCard";

export default function Certificate() {
  return (
    <div className="section3Card">
      <ProjectCard
        badgeTop="Certification"
        key="Certification"
        title="Microsoft AZ-104"
        badgeBottom="Microsoft Azure"
        imageSrc="/certifications/az-104.png"
        href="https://learn.microsoft.com/api/credentials/share/en-us/MuhammadUmer-1115/11E8EA3B0491B3B3?sharingId=71A1A310F2E0A25D"
      />
    </div>
  );
}