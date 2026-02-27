import ProjectCard from "./ProjectCard"
export default function projects() {

  const projects = [
    {
      id: 1,
      title: "Custom Postgress RAG with AWS infrastructure",
      badgeBottom: "AWS, networking, subnetting, API Gateway, NAT, IAM, S3, RDS, EC2",
      imageSrc: "/projects/aws2.png",
      href: "https://github.com/Muhammad1umer-tech/AWS-CustomPostgresRAG",
    },
    {
      id: 2,
      title: "CI/CD with Jenkins and AWS",
      badgeBottom: "AWS, Terraform, Jenkins",
      imageSrc: "/projects/jenkins.png",
      href: "https://github.com/Muhammad1umer-tech/terraform-aws-jenkins-project",
    },
    {
      id: 3,
      title: "Multi-Agent AI Framework",
      badgeBottom: "LangGraph, Python, FastAPI, NextJS, Docker",
      imageSrc: "/projects/langgraph.png",
      href: "https://github.com/Muhammad1umer-tech/GlobeTravel.AI/tree/main",
    },
    {
      id: 6,
      title: "Data ETL and visualization",
      badgeBottom: "Python, PowerBI",
      imageSrc: "/projects/powerBI.jpeg",
      href: "https://github.com/Muhammad1umer-tech/Pizzeria-Data-Analytics",
    },
    {
      id: 7,
      title: "Data ETL pipeline in Microsoft Azure",
      badgeBottom: "Azure, DataLake, Synapse, DataFactory",
      imageSrc: "/projects/tokyo.jpeg",
      href: "https://github.com/Muhammad1umer-tech/Tokyo-Olympic-Microsoft-Azure",
    },
    {
      id: 8,
      title: "Data handling and Preprocessing",
      badgeBottom: "Python, Pandas, NumPy",
      imageSrc: "/projects/chestxgpt.jpg",
      href: "https://github.com/Muhammad1umer-tech/ChestXGPT-Reports-Preprocessing",
    },
  ];

  return (
    <div className="section3Card">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          badgeBottom={project.badgeBottom}
          imageSrc={project.imageSrc}
          href={project.href}
        />
      ))}
    </div>
  );
}
