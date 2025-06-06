
export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  details?: string;
  graduationYear?: string;
  cgpa?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  iconName?: 'Github' | 'Youtube' | 'Globe' | 'Link';
}

export interface ProjectEntry {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  links?: ProjectLink[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  technicalCompetencies: SkillCategory[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  projects: ProjectEntry[];
  fullResumeText: string;
}

const saitejaKottapallyResume: ResumeData = {
  name: "SAITEJA KOTTAPALLY",
  title: "Site Reliability Engineer / DevOps Engineer",
  summary: "Experienced Site Reliability Engineer with expertise in cloud infrastructure, DevOps automation, and production-grade observability. Proficient in AWS, Azure, Kubernetes, Docker, and GitOps tools like Helm and FluxCD. Skilled in building and maintaining CI/CD pipelines using Jenkins, GitLab, and Azure DevOps. Strong in scripting (Python, Bash) for automating deployments and infrastructure tasks. Hands-on with monitoring and APM tools such as New Relic, Dynatrace, Prometheus, Grafana, and ELK Stack. Solid understanding of networking, DNS, TLS, and Cloudflare security features. Proven experience in incident management, RCA, and on-call support. Adept at supporting distributed microservices and ensuring high availability in mission-critical systems.",
  contact: {
    phone: "9581876090",
    email: "kottapallysaitej@gmail.com",
    linkedin: "linkedin.com/in/1919teja",
    github: "github.com/1919teja",
    website: "https://thesaiteja.in",
  },
  technicalCompetencies: [
    { name: "DevOps", skills: ["Amazon AWS", "Azure", "Docker", "Jenkins", "Kubernetes", "Terraform", "ArgoCD", "DevOps Practices", "Bash Scripting"] },
    { name: "Containers", skills: ["Docker", "Kubernetes"] },
    { name: "Infrastructure as Code", skills: ["Terraform", "Ansible", "CloudFormation"] },
    { name: "CI/CD Tools", skills: ["Jenkins", "GitLab CI", "Azure DevOps", "Jenkins Pipelines", "CodeDeploy"] },
    { name: "Monitoring & Logging", skills: ["New Relic", "Dynatrace", "Prometheus", "Grafana", "ELK Stack", "Azure Monitor", "Splunk", "DataDog"] },
    { name: "Version Control", skills: ["Git", "GitHub", "GitLab"] },
    { name: "Cloud Platforms", skills: ["AWS (EKS, EC2, S3)", "Azure (AKS)", "Google Cloud Platform", "Heroku"] },
    { name: "Adobe Commerce", skills: ["Magento", "Magento 2"] },
    { name: "Programming & Scripting", skills: ["Python", "Bash", "Shell Scripting", "Django", "JavaScript"] },
    { name: "Web & UI Technologies", skills: ["HTML5", "CSS"] },
    { name: "Databases", skills: ["MySQL", "MariaDB", "Redis", "MongoDB", "DynamoDB", "Deadlock Resolution"] },
    { name: "Networking & DNS", skills: ["Route53", "TCP/IP", "DNS", "Subnetting", "Load Balancers", "TLS/SSL"] },
    { name: "Security", skills: ["Cloudflare WAF", "VPN", "TLS/SSL", "API Security", "Security Incident Management"] },
    { name: "CDN", skills: ["Cloudflare"] },
    { name: "Collaboration & Ticketing", skills: ["JIRA", "Confluence", "Slack"] },
    { name: "Microservices & GitOps", skills: ["Helm", "FluxCD"] },
    { name: "Operating Systems", skills: ["Linux (Ubuntu, CentOS)", "Windows"] },
    { name: "QA/Automation", skills: ["Postman", "Workato", "JavaScript Automation"] },
    { name: "APM & Observability", skills: ["New Relic", "Dynatrace", "Azure App Insights", "ELK", "Prometheus", "Grafana"] },
  ],
  experience: [
    {
      company: "GlobalLogic",
      role: "Site Reliability Engineer",
      duration: "August 2024 – Present",
      responsibilities: [
        "Working on the Platform, a telecom gateway enabling secure and scalable onboarding of CSPs and applications.",
        "Responsible for end-to-end incident management, on-call support, root cause analysis (RCA), and implementing automated solutions to improve system reliability.",
        "Performed API onboarding and testing using Postman for multiple network and telecom-related services, ensuring compliance with global telecom standards.",
        "Involved in frequent release activities, version upgrades, rollback procedures, and configuration of Helm charts and FluxCD for GitOps-based deployments.",
        "Maintained and deployed cloud infrastructure across Kubernetes and Azure, utilizing Helm, Velero for backups and disaster recovery, and FluxCD for automated GitOps workflows.",
      ],
    },
    {
      company: "Tech Mahindra",
      role: "Site Reliability Engineer",
      duration: "May 2024 – August 2024",
      responsibilities: [
        "Delivered high-quality Infrastructure as Code (IaC) solutions using Terraform and Ansible across a multi-cloud environment, focusing on AWS.",
        "Built and managed CI/CD pipelines using Jenkins to automate provisioning and deployments processes, reducing deployment times.",
        "Troubleshoot and resolved complex issues in development, test, and production environments, improving system stability and performance.",
      ],
    },
    {
      company: "Lotuswave Software Solutions",
      role: "DevOps/SRE Engineer",
      duration: "April 2021 – May 2024",
      responsibilities: [
        "Managed workloads in AWS, ensuring high availability, disaster recovery, and platform resiliency.",
        "Developed and maintained CI/CD pipelines, integrating tools to streamline deployments.",
        "Implemented Observability, APM, Monitoring and Alerting principles with New Relic, enhancing system reliability.",
        "Developed automation scripts in Python to streamline tasks, reduce manual intervention, and enhance system efficiency.",
        "Extensive experience working with Cloudflare configurations, enhancing security with WAF and DDoS protection, and optimizing DNS and network performance, reducing latency by 30%.",
      ],
    },
  ],
  education: [
    {
      institution: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology, Electronics and communication",
      cgpa: "7.5 CGPA",
      graduationYear: "2017-2021",
    },
    {
      institution: "Kendriya Vidyalaya Sangathan, Waranagal",
      degree: "Senior secondary Education, MPC computer science (+2)",
      details: "CBSE",
      cgpa: "7.0 CGPA",
      graduationYear: "2015-2017",
    },
  ],
  projects: [
    {
      title: "Web-Development GitHub Administration",
      description: "Developed web application for GitHub Administration using JavaScript and shell scripting. Application helps on to search users and assign policies/roles/permissions and allocating projects as needed.",
      technologies: ["JavaScript", "Shell Scripting", "Web Development"],
      links: [{ label: "GitHub", url: "https://github.com/1919teja/git-admins-app", iconName: "Github" }],
    },
    {
      title: "DeVops Automation QA-Portal",
      description: "Developed QA portal, an organisation website developed on Python, shell, Jenkins , Ansible etc. Application helps to trigger automated functional/regression testing on targeted website in point of QA.",
      technologies: ["Python", "Shell", "Jenkins", "Ansible", "DevOps"],
      links: [{ label: "GitHub", url: "https://github.com/lotuswave/qaportal", iconName: "Github" }],
    },
    {
      title: "Devops Payment Integration",
      description: "Developed Payment integration micro-service on docker,JavaScript,AWS,Jenkins,Ansible etc stacks this application is payment gateway can be used to integrate for any application online UPI transactions.",
      technologies: ["Docker", "JavaScript", "AWS", "Jenkins", "Ansible", "Microservices"],
      links: [{ label: "GitHub", url: "https://github.com/1919teja/nodejs-api-dockerization-paytm", iconName: "Github" }],
    },
    {
      title: "AI based assistant system for blind",
      subtitle: "MHRD Smart India Hackathon finalist",
      description: "Assisting system for blind people with artificial intelligence powered cameras and voice assisted bot which is build on python will act as self learning human replica to the person.",
      technologies: ["Python", "AI", "Voice Assistant"],
      links: [{ label: "Watch Demo", url: "https://www.youtube.com/watch?v=Rcc5g07ppsI", iconName: "Youtube" }],
    },
    {
      title: "Quantum Computing - 8 bit qubit simulated chip",
      subtitle: "JNTU College (Offsite)",
      description: "Designed a prototype of quantum processor chip simulating multiple quantum algorithms using IBM quantum computer.",
      technologies: ["Quantum Computing", "IBM Quantum", "Algorithm Simulation"],
    },
  ],
  fullResumeText: `SAITEJA KOTTAPALLY
ƒ 9581876090 # kottapallysaitej@gmail.com ï linkedin.com/in/1919teja § github.com/1919teja € https://thesaiteja.in
SUMMARY — Experienced Site Reliability Engineer with expertise in cloud infrastructure, DevOps automation, and
production-grade observability. Proficient in AWS, Azure, Kubernetes, Docker, and GitOps tools like Helm and FluxCD. Skilled
in building and maintaining CI/CD pipelines using Jenkins, GitLab, and Azure DevOps. Strong in scripting (Python, Bash) for
automating deployments and infrastructure tasks. Hands-on with monitoring and APM tools such as New Relic, Dynatrace,
Prometheus, Grafana, and ELK Stack. Solid understanding of networking, DNS, TLS, and Cloudflare security features. Proven
experience in incident management, RCA, and on-call support. Adept at supporting distributed microservices and ensuring high
availability in mission-critical systems.
TECHNICAL COMPETENCIES
DevOps Amazon AWS, Azure, Docker, Jenkins, Kubernetes, Terraform, ArgoCD,
DevOps Practices, Bash Scripting
Containers Docker, Kubernetes
Infrastructure as Code Terraform, Ansible, CloudFormation
CI/CD Tools Jenkins, GitLab CI, Azure DevOps, Jenkins Pipelines, CodeDeploy
Monitoring & Logging New Relic, Dynatrace, Prometheus, Grafana, ELK Stack (Elasticsearch,
Logstash, Kibana), Azure Monitor, Splunk, DataDog
Version Control Git, GitHub, GitLab
Cloud Platforms AWS (EKS, EC2, S3), Azure (AKS), Google Cloud Platform, Heroku
Adobe Commerce Magento, Magento 2
Programming & Scripting
Python, Bash, Shell Scripting, Django, JavaScript
Web & UI Technologies HTML5, CSS
Databases MySQL, MariaDB, Redis, MongoDB, DynamoDB, Deadlock Resolution
Networking & DNS Route53, TCP/IP, DNS, Subnetting, Load Balancers, TLS/SSL
Security Cloudflare WAF, VPN, TLS/SSL, API Security, Security Incident Management
CDN Cloudflare
Collaboration & Ticketing
JIRA, Confluence, Slack
Microservices & GitOps Helm, FluxCD
Operating Systems Linux (Ubuntu, CentOS), Windows
QA/Automation Postman, Workato, JavaScript Automation
APM & Observability New Relic, Dynatrace, Azure App Insights, ELK, Prometheus, Grafana
EXPERIENCE
GlobalLogic August 2024 – Present
Site Reliability Engineer
– Working on the Platform, a telecom gateway enabling secure and scalable onboarding of CSPs (Communication Service
Providers) and applications.
– Responsible for end-to-end incident management, on-call support, root cause analysis (RCA), and implementing
automated solutions to improve system reliability.
– Performed API onboarding and testing using Postman for multiple network and telecom-related services, ensuring
compliance with global telecom standards.
– Involved in frequent release activities, version upgrades, rollback procedures, and configuration of Helm charts and
FluxCD for GitOps-based deployments.
– Maintained and deployed cloud infrastructure across Kubernetes and Azure, utilizing Helm, Velero for backups and
disaster recovery, and FluxCD for automated GitOps workflows.
– Configured observability stacks using Prometheus, Grafana, ELK, and custom alerts for performance metrics and
infrastructure health.
– Worked closely with application developers to align service SLOs and error budgets, supporting performance
optimization and high availability.
– Implemented and optimized CI/CD pipelines in Azure DevOps, streamlining container image builds, Helm packaging,
and environment promotion workflows.
– Proactively identified and remediated security vulnerabilities, coordinated with security teams for vulnerability
assessments and compliance enforcement.
– Managed application onboarding, proxy routing, and DNS security using Cloudflare for WAF and API Gateway
protection.
– Collaborated with cross-functional telecom teams and external vendors for onboarding new CSPs and applications into
the platform.
– Contributed to continuous improvement by scripting automation tasks using Linux, shell scripting, and maintaining IaC
templates in GitLab.
Tech Mahindra May 2024 – August 2024
Site Reliability Engineer
– Delivered high-quality Infrastructure as Code (IaC) solutions using Terraform and Ansible across a multi-cloud
environment, focusing on AWS.
– Built and managed CI/CD pipelines using Jenkins to automate provisioning and deployments processes, reducing
deployment times
– Troubleshoot and resolved complex issues in development, test, and production environments, improving system
stability and performance.
– Communicated status updates and risks to stakeholders, ensuring transparency and effective risk management and
ensure SLAs and KPIs are consistently met and maintained.
– Ensure 24/7/365 service and infrastructure operations support with continuous optimizations.
Lotuswave Software Solutions April 2021 – May 2024
DevOps/SRE Engineer
– Managed workloads in AWS, ensuring high availability, disaster recovery, and platform resiliency.
– Developed and maintained CI/CD pipelines, integrating tools to streamline deployments.
– Implemented Observability, APM, Monitoring and Alerting principles with New Relic, enhancing system reliability
Deployed and customized New Relic agents for comprehensive application monitoring.
– Developed automation scripts in Python to streamline tasks, reduce manual intervention, and enhance system efficiency.
– Extensive experience working with Cloudflare configurations, enhancing security with WAF and DDoS protection, and
optimizing DNS and network performance, reducing latency by 30%.
– Led efficient Build and Release Management with CI/CD deployments using Jenkins and Docker.
– Administered Linux systems, implementing security best practices and conducting vulnerability assessments.
– Possessed hands-on experience in MySQL and Redis database administration, ensuring secure and optimized database
operations.
– Defined CI/CD roadmaps, implemented security measures with Cloudflare, and conducted RCAs to enhance system
reliability.
– Proficient in troubleshooting network issues including TCP/IP, routing, DNS, and NFS.
– Identified performance bottlenecks and implemented code fixes using Dynatrace, New Relic.
– Configured alerts, dashboards in performance monitoring tools to proactively address issues, minimizing downtime.
– Designed high availability architectures, ensuring 99.99% uptime and seamless failover conducted performance testing
and capacity planning, driving improvements in system scalability and reliability.
– Expertise in managing and scaling proxy infrastructure using Nginx, including load balancing, SSL termination, and
caching strategies.
EDUCATION
Jawaharlal Nehru Technological University
Bachelor of Technology, Electronics and communication, 7.5 CGPA
Graduated: 2017-2021
Kendriya Vidyalaya Sangathan, Waranagal
Senior secondary Education, MPC computer science (+2), CBSE, 7.0 CGPA
Year: 2015-2017`,
};

export default saitejaKottapallyResume;
