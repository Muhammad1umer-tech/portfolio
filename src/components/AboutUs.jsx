import { Cloud, ServerCog, ShieldCheck, Code2 } from "lucide-react";

export default function aboutus() {
  return (
    <section className="aboutCard">
      <header className="aboutHeader">
        <h2 className="aboutTitle">About Me</h2>
        <div className="aboutUnderline">
          <span className="uOrange" />
          <span className="uBlue" />
        </div>
      </header>

      <div className="aboutBody">
        <p>
          I am a technology-focused IT professional who began my career as a Software
          Engineer, working across backend development, cloud platforms, and DevOps
          technologies.
        </p>

        <p>
          In my first role, I worked on backend systems and GenAI-based solutions before
          gradually transitioning toward DevOps and cloud engineering. As organizations
          required someone to build and manage CI/CD pipelines, Docker environments, and
          Terraform-based infrastructure, I stepped into that responsibility and led it.
        </p>

        <p>
          I collaborated closely with network teams to set up complete server environments,
          including assigning IP addresses by department, segmenting network access for
          mobile devices and company-managed systems, creating employee accounts with
          role-based access, performing disk partitioning, and strengthening infrastructure
          security and access control.
        </p>

        <p>
          I also worked extensively on cloud-based solutions, primarily using Terraform and
          Jenkins to automate infrastructure provisioning and DevOps workflows.
        </p>

        <p>
          Later, I joined as a Cloud Engineer, where I was responsible for building a
          client-facing product, <span className="aboutLink">ai.adautomaters.com</span>.
          I independently handled frontend and backend development, GenAI integration,
          automation workflows, data cleaning and testing, DevOps pipeline design, deployment,
          and complete Microsoft Azure cloud setup.
        </p>

        <p>
          I performed ETL processes on client data, developed backend services, and contributed
          to designing the overall product architecture. Following the successful delivery of
          the product, the client’s partners engaged me to design and streamline their Microsoft
          Entra ID, storage accounts, and overall cloud environment.
        </p>

        <p>
          My responsibilities included configuring Microsoft environments, implementing Microsoft
          Entra ID with proper role assignments and policies, establishing identity governance,
          designing secure storage architectures, enforcing network restrictions, and strengthening
          access controls. A major focus of my work has been storage security and building scalable,
          secure cloud infrastructures.
        </p>

        <div className="skillBlock">
          <h3>★ Cloud &amp; Infrastructure</h3>
            <p>
              <strong>Cloud Platforms:</strong> Microsoft Azure (AZ-104 Certified), AWS Fundamentals.
              <br /><br />

              <strong>Networking:</strong> Azure Virtual Network (VNet), Subnets, VPN Gateway, VNet Peering,
              ExpressRoute, VNet peering, Azure Load Balancer, Application Gateway, Azure Firewall, Network Security Groups (NSG),
              Azure DNS, Traffic Manager, Private Endpoints, Hybrid Connectivity &amp; Entra Connect.
              <br /><br />

              <strong>Security:</strong> Microsoft Entra ID (Azure AD) Administration, On premises Active Directory Administration, RBAC, Azure Policies, Policies on Green & BrownField scanerios, Conditional Access Policies,
              Multi-Factor Authentication (MFA), Entra Device registration & Joining, Azure Key Vault, Managed Identities,
              Azure Bastion, Identity Governance, Microsoft Cloud Adoption Framework. 
              <br /><br />

              <strong>Compute &amp; Containers:</strong> Azure Virtual Machines, VM Scale Sets, Azure App Services,
              Azure Functions, Azure Kubernetes Service (AKS), Azure Container Registry (ACR), Azure Container Instances, Azure Container Apps.
              <br /><br />

              <strong>Storage &amp; Databases:</strong> Azure Blob Storage, File Storage, Azure File Sync, Queue Storage, Table Storage,
              Azure SQL Database, Cosmos DB, Azure Backup, Azure Site Recovery.
              <br /><br />

              <strong>DevOps:</strong> Azure DevOps, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, ARM Templates, Bicep.
              <br /><br />

              <strong>Monitoring &amp; Management:</strong> Azure Monitor, Log Analytics, Application Insights,
              Domain Controller Monitoring, On-Premises Server Management.
            </p>

          <h3>★ DevOps &amp; Automation</h3>
          <p>Docker, Terraform, Jenkins, GitHub Actions, Linux Administration, Bash/Shell Scripting.</p>

          <h3>★ Backend &amp; Programming</h3>
          <p>Python, Django, Flask, FastAPI, REST API, PostgreSQL/MySQL</p>

          <h3>★ Networking </h3>
          <p>TCP/IP, DNS, VPN, Firewalls, Azure Networking Architecture, Cloud Security Best Practices, Compliance Standards.</p>

          <h3>★ Monitoring  </h3>
          <p>Azure Monitor,Log Analytics, Application Insights, Domain Controller Monitoring, On-Premises Server Management, Network Watcher, connection troubleshoot, connection monitor, Activity logs.</p>

        </div>

        <p className="aboutEmphasis">
          Over time, I discovered that my core strengths lies in managing, administering and securing hybrid and cloud-based
          infrastructures. Monitoring EntraID and on premises Active Directory. Implementing cloud solutions.
        </p>
      </div>

      <div className="doingHeader">
        <h2 className="doingTitle">What I’m Doing</h2>
      </div>

      <div className="doingGrid">
        <DoingCard
          icon={<ServerCog size={30} />}
          title="DevOps"
          desc="I enjoy improving delivery speed and quality by automating workflows, CI/CD pipelines, and infrastructure provisioning."
        />
        <DoingCard
          icon={<Cloud size={30} />}
          title="Cloud Engineer"
          desc="I design, secure, and maintain cloud infrastructure, focusing on scalable architectures and strong storage security."
        />
        <DoingCard
          icon={<ShieldCheck size={30} />}
          title="Identity & Security"
          desc="I implement Microsoft Entra ID governance, RBAC, policies, network restrictions, and access control hardening."
        />
        <DoingCard
          icon={<Code2 size={30} />}
          title="Monitoring & Administration"
          desc="I administer on-premises servers, Active Directory, and VPN connections with cloud environments to ensure things run smoothly."
        />
      </div>
    </section>
  );
}

function DoingCard({ icon, title, desc }) {
  return (
    <div className="doingCard">
      <div className="doingIcon">{icon}</div>
      <h4 className="doingCardTitle">{title}</h4>
      <p className="doingCardDesc">{desc}</p>
    </div>
  );
}