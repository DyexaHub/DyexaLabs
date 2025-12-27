import { 
  Cloud, Shield, Brain, Database, Smartphone, Globe, 
  Code2, Cpu, Layout, 
  
  Briefcase, Rocket, Workflow} from "lucide-react";

export type ServiceCategory = "Strategy" | "Engineering" | "Design" | "Data & AI";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  category: ServiceCategory;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  technologies: string[];
  link: string;
  color: string;
  caseStudy?: {
    client: string;
    result: string;
    desc: string;
  };
}

export const services: Service[] = [
  // Strategy
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Reimagine your business for the digital age with comprehensive strategy and roadmap execution.",
    longDescription: "In an era where technology dictates market leadership, standing still is falling behind. Our Digital Transformation service is not just about adopting new tools; it's about fundamentally rethinking how your organization creates, delivers, and captures value. We partner with C-suite executives to decode complex market shifts, identify high-impact digital opportunities, and restructure operations for agility. From modernizing legacy stacks to cultivating a digital-first culture, we guide you through every step of the metamorphosis.",
    icon: Rocket,
    category: "Strategy",
    features: ["Technology Roadmap", "Legacy Modernization", "Process Automation", "Change Management"],
    benefits: [
      { title: "Market Agility", desc: "Pivot faster in response to changing market demands with a flexible digital core." },
      { title: "Operational Efficiency", desc: "Reduce overhead by automating manual workflows and unifying siloed data." },
      { title: "Customer Centricity", desc: "Deliver seamless, personalized experiences that drive loyalty and retention." }
    ],
    process: [
      { title: "Discovery & Audit", desc: "We assess your current digital maturity, infrastructure, and business goals." },
      { title: "Strategy Formulation", desc: "We define a clear North Star and a phased roadmap to get there." },
      { title: "Pilot Execution", desc: "We launch high-impact pilot projects to validate assumptions and demonstrate value." },
      { title: "Scale & Optimize", desc: "We roll out successful initiatives across the enterprise and continuously refine." }
    ],
    technologies: ["Enterprise Architecture", "Cloud Strategy", "Process Mining", "Okta", "Salesforce", "SAP"],
    link: "/services/digital-transformation",
    color: "from-blue-500 to-indigo-600",
    caseStudy: {
      client: "Global Logistics Giant",
      result: "30% Reduction in OpEx",
      desc: "We modernized a 20-year-old legacy mainframe system, migrating critical workloads to a hybrid cloud architecture, resulting in $12M annual savings."
    }
  },
  {
    id: "it-consulting",
    title: "Strategic IT Consulting",
    description: "Align your technology investment with business goals to drive growth and efficiency.",
    longDescription: "Technology should be an accelerator, not a bottleneck. Our Strategic IT Consulting services provide the expert guidance needed to navigate complex technology decisions. Whether you are selecting a new tech stack, optimizing cloud costs, or restructuring your engineering organization, our seasoned consultants bring decades of industry experience to the table. We act as your fractional CTO office, ensuring that every dollar spent on IT directly contributes to your strategic business objectives.",
    icon: Briefcase,
    category: "Strategy",
    features: ["CTO Advisory", "Tech Stack Selection", "Cost Optimization", "Risk Assessment"],
    benefits: [
      { title: "Strategic Alignment", desc: "Ensure your IT roadmap supports your 3-5 year business vision." },
      { title: "Cost Control", desc: "Identify and eliminate waste in your cloud and software spend." },
      { title: "Risk Mitigation", desc: "Proactively identify security and compliance gaps before they become issues." }
    ],
    process: [
      { title: "Assessment", desc: "Deep dive into your current IT landscape and spending." },
      { title: "Gap Analysis", desc: "Identify where your current capabilities fall short of your goals." },
      { title: "Action Plan", desc: "Develop a prioritized list of initiatives with clear ROI projections." },
      { title: "Governance", desc: "Establish frameworks to sustain improvements over time." }
    ],
    technologies: ["Togaf", "AWS Cost Explorer", "Jira Align", "ServiceNow"],
    link: "/services/it-consulting",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "agile-coaching",
    title: "Agile & DevOps Coaching",
    description: "Transform your team's culture and velocity with proven Agile methodologies.",
    longDescription: "Tools alone don't build great software; people do. Our Agile & DevOps Coaching service focuses on the human and cultural aspects of software delivery. We embed senior coaches within your teams to instill best practices in Scrum, Kanban, and CI/CD. We move beyond theory, helping your teams navigate real-world friction to achieve higher velocity, better quality, and improved morale. We help you shift from a 'project mindset' to a 'product mindset', focusing on outcomes rather than output.",
    icon: Workflow,
    category: "Strategy",
    features: ["Scrum Implementation", "CI/CD Pipelines", "Team Training", "Velocity Optimization"],
    benefits: [
      { title: "Faster Time-to-Market", desc: "Ship features in days or weeks, not months." },
      { title: "Higher Quality", desc: "Catch bugs early with automated testing and continuous integration." },
      { title: "Improved Morale", desc: "Empower teams with autonomy and clear purpose." }
    ],
    process: [
      { title: "Team Assessment", desc: "Evaluate current maturity, communication patterns, and blockers." },
      { title: "Training Workshops", desc: "Interactive sessions on Agile principles, Scrum events, and DevOps culture." },
      { title: "Embedded Coaching", desc: "Coaches work side-by-side with teams to model behaviors." },
      { title: "Metric Tracking", desc: "Measure progress using DORA metrics and flow efficiency." }
    ],
    technologies: ["Jira", "Azure DevOps", "GitLab", "Jenkins", "Docker"],
    link: "/services/agile-coaching",
    color: "from-purple-500 to-pink-600"
  },

  // Engineering
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailor-made solutions built to address your specific business challenges and scale with you.",
    longDescription: "Off-the-shelf software rarely fits perfectly. When you need a competitive advantage, you need custom software. We design, build, and deploy enterprise-grade applications that are robust, scalable, and secure. Our engineering teams are fluent in modern full-stack development, utilizing the latest frameworks to deliver high-performance solutions. From complex internal dashboards to customer-facing platforms, we write clean, maintainable code that stands the test of time.",
    icon: Code2,
    category: "Engineering",
    features: ["Enterprise Applications", "SaaS Platforms", "API Development", "Microservices"],
    benefits: [
      { title: "Perfect Fit", desc: "Software that adapts to your workflow, not the other way around." },
      { title: "Scalability", desc: "Architecture designed to handle millions of users from day one." },
      { title: "IP Ownership", desc: "You own the code, giving you full control over your product's future." }
    ],
    process: [
      { title: "Requirements Gathering", desc: "We work with stakeholders to define user stories and acceptance criteria." },
      { title: "Architecture Design", desc: "We select the right stack and pattern (Monolith vs. Microservices)." },
      { title: "Iterative Development", desc: "Two-week sprints with regular demos to ensure alignment." },
      { title: "Deployment & Support", desc: "Automated rollout and 24/7 monitoring post-launch." }
    ],
    technologies: ["React", "Node.js", "Python", "Go", "PostgreSQL", "Redis"],
    link: "/services/custom-software",
    color: "from-emerald-500 to-teal-600",
    caseStudy: {
      client: "FinTech Startup",
      result: "100k+ Users in 6 Months",
      desc: "Built a secure, compliant lending platform from scratch, handling $50M in transactions securely."
    }
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Secure, scalable, and resilient cloud architectures on AWS, Azure, or GCP.",
    longDescription: "The cloud is powerful, but complex. Misconfiguration is the leading cause of breaches. Our Cloud Infrastructure service ensures your environment is architected according to the Well-Architected Framework. We specialize in Infrastructure as Code (IaC), serverless architectures, and container orchestration. Whether you are migrating from on-prem or optimizing an existing cloud footprint, we build infrastructure that is self-healing, auto-scaling, and cost-efficient.",
    icon: Cloud,
    category: "Engineering",
    features: ["Cloud Migration", "Serverless Architecture", "Kubernetes Management", "Multi-Cloud Strategy"],
    benefits: [
      { title: "Elasticity", desc: "Resources that automatically scale up or down based on demand." },
      { title: "Resilience", desc: "High availability and disaster recovery built-in by design." },
      { title: "Automation", desc: "Zero-touch deployments using Terraform or Pulumi." }
    ],
    process: [
      { title: "Infrastructure Audit", desc: "Review current setup against security and performance best practices." },
      { title: "Design & Plan", desc: "Blueprint the target architecture using detailed diagrams." },
      { title: "Migration/Build", desc: "Execute the move using blue/green deployment to minimize downtime." },
      { title: "Optimization", desc: "Continuous tuning of reserved instances and auto-scaling rules." }
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "Prometheus"],
    link: "/services/cloud-infrastructure",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Protect your digital assets with defense-in-depth strategies and compliance frameworks.",
    longDescription: "In a landscape defined by zero-day exploits and ransomware, security cannot be an afterthought. Our Cybersecurity service provides a comprehensive shield for your digital assets. We employ a 'Zero Trust' approach, assuming breach and verifying every request. From penetration testing and vulnerability assessments to implementing SOC 2 and HIPAA controls, we help you navigate the complex threat landscape while enabling your business to move fast without fear.",
    icon: Shield,
    category: "Engineering",
    features: ["Penetration Testing", "Security Audits", "SOC 2 Compliance", "Identity Management"],
    benefits: [
      { title: "Brand Protection", desc: "Prevent data breaches that damage reputation and trust." },
      { title: "Regulatory Compliance", desc: "Meet strict standards like GDPR, HIPAA, and PCI-DSS." },
      { title: "Business Continuity", desc: "Ensure you can recover quickly from any cyber incident." }
    ],
    process: [
      { title: "Vulnerability Scan", desc: "Automated and manual testing to find weak points." },
      { title: "Remediation", desc: "Fixing critical vulnerabilities and patching systems." },
      { title: "Policy Implementation", desc: "Establishing governance, access controls, and training." },
      { title: "Monitoring", desc: "24/7 threat detection using SIEM and SOAR tools." }
    ],
    technologies: ["CrowdStrike", "Splunk", "Auth0", "HashiCorp Vault", "Burp Suite"],
    link: "/services/cybersecurity",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that delight users on iOS and Android.",
    longDescription: "Mobile is often the primary touchpoint for your customers. We build beautiful, high-performance mobile applications that users love. Whether you need the raw performance of native code or the efficiency of cross-platform frameworks like React Native or Flutter, we deliver apps with smooth animations, offline capabilities, and deep device integration. We handle the entire lifecycle, from App Store submission to ongoing maintenance.",
    icon: Smartphone,
    category: "Engineering",
    features: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"],
    benefits: [
      { title: "User Engagement", desc: "Push notifications and smooth UI drive higher retention." },
      { title: "Offline Access", desc: "Apps that work seamlessly even with spotty connectivity." },
      { title: "Device Features", desc: "Leverage camera, GPS, and biometrics for richer experiences." }
    ],
    process: [
      { title: "Prototyping", desc: "Clickable high-fidelity prototypes to validate flows." },
      { title: "Development", desc: "Building the app with a focus on performance and battery life." },
      { title: "QA Testing", desc: "Rigorous testing across a device farm of 50+ phones." },
      { title: "Launch", desc: "Navigating the App Store and Play Store review process." }
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    link: "/services/mobile-development",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "iot-solutions",
    title: "IoT & Edge Computing",
    description: "Connect the physical and digital worlds with smart sensors and real-time data processing.",
    longDescription: "The Internet of Things is transforming industries from manufacturing to healthcare. We build end-to-end IoT solutions that capture data from the physical world and turn it into business value. Our expertise spans hardware selection, embedded firmware development, secure MQTT messaging, and cloud-side data processing. We help you build 'smart' products that enable predictive maintenance, asset tracking, and remote monitoring.",
    icon: Cpu,
    category: "Engineering",
    features: ["Embedded Systems", "MQTT Messaging", "Edge AI", "Hardware Prototyping"],
    benefits: [
      { title: "Real-time Visibility", desc: "Know exactly what is happening in your operations, instantly." },
      { title: "Predictive Maintenance", desc: "Fix equipment before it breaks using vibration and heat data." },
      { title: "New Revenue Streams", desc: "Turn physical products into service-based subscriptions." }
    ],
    process: [
      { title: "Hardware Selection", desc: "Choosing the right sensors and gateways for the environment." },
      { title: "Firmware Dev", desc: "Writing efficient C/C++ code for resource-constrained devices." },
      { title: "Connectivity", desc: "Setting up secure LoraWAN, cellular, or Wi-Fi mesh networks." },
      { title: "Data Platform", desc: "Ingesting and visualizing massive streams of sensor data." }
    ],
    technologies: ["Raspberry Pi", "Arduino", "MQTT", "AWS IoT Core", "C++"],
    link: "/services/iot-solutions",
    color: "from-yellow-500 to-orange-600"
  },

  // Data & AI
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    description: "Leverage the power of predictive analytics and generative AI to automate and innovate.",
    longDescription: "AI is the new electricity. We help you harness it safely and effectively. From training custom machine learning models on your proprietary data to implementing cutting-edge Generative AI solutions using LLMs, we bring intelligence to your applications. We focus on pragmatic AI—solutions that solve real business problems, not just science experiments. Our team handles the full ML pipeline: data labeling, model training, evaluation, and MLOps deployment.",
    icon: Brain,
    category: "Data & AI",
    features: ["Generative AI (LLMs)", "Computer Vision", "Predictive Modeling", "NLP Solutions"],
    benefits: [
      { title: "Automation", desc: "Replace manual, repetitive cognitive tasks with AI agents." },
      { title: "Personalization", desc: "Deliver hyper-relevant content and recommendations to users." },
      { title: "Forecasting", desc: "Predict demand, churn, and risk with high accuracy." }
    ],
    process: [
      { title: "Data Assessment", desc: "Checking if you have the right data quality to train models." },
      { title: "Modeling", desc: "Selecting and training algorithms (Random Forest, Neural Nets, etc.)." },
      { title: "Validation", desc: "Testing against holdout sets to ensure real-world performance." },
      { title: "Deployment", desc: "Containerizing models and exposing them via scalable APIs." }
    ],
    technologies: ["OpenAI API", "PyTorch", "TensorFlow", "Hugging Face", "Pinecone"],
    link: "/services/ai-ml",
    color: "from-violet-600 to-fuchsia-600",
    caseStudy: {
      client: "Healthcare Provider",
      result: "40% Less Admin Time",
      desc: "Implemented an NLP solution to automatically transcribe and summarize doctor-patient consultations."
    }
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    description: "Turn raw data into actionable insights with robust pipelines and visualization.",
    longDescription: "Data is your most valuable asset, but only if you can trust it. We build robust, scalable data platforms that ingest, clean, and organize your data for analysis. We break down data silos, creating a 'Single Source of Truth' for your organization. Our modern data stack approach utilizes cloud data warehouses and ELT processes to deliver fresh data to dashboards and downstream applications, empowering your teams to make evidence-based decisions.",
    icon: Database,
    category: "Data & AI",
    features: ["Data Warehousing", "ETL Pipelines", "Business Intelligence", "Big Data Processing"],
    benefits: [
      { title: "Decisions", desc: "Stop guessing. Make strategic moves based on hard data." },
      { title: "Compliance", desc: "Ensure data governance and privacy (GDPR/CCPA) at scale." },
      { title: "Accessibility", desc: "Democratize data access so non-technical users can find answers." }
    ],
    process: [
      { title: "Ingestion", desc: "Connecting to APIs, databases, and logs to pull raw data." },
      { title: "Warehousing", desc: "Storing data in Snowflake, BigQuery, or Redshift." },
      { title: "Transformation", desc: "Using dbt to model and clean data for analysis." },
      { title: "Visualization", desc: "Building interactive dashboards in Tableau or PowerBI." }
    ],
    technologies: ["Snowflake", "dbt", "Airflow", "Python", "Looker"],
    link: "/services/data-engineering",
    color: "from-blue-600 to-violet-600"
  },

  // Design
  {
    id: "product-design",
    title: "Product Design (UI/UX)",
    description: "User-centric design that blends aesthetics with functionality for superior conversion.",
    longDescription: "Great technology fails if the user experience is poor. Our design philosophy is rooted in empathy and data. We don't just make things look pretty; we solve user problems. Through rigorous user research, wireframing, and iterative prototyping, we craft intuitive interfaces that guide users effortlessly to their goals. We build comprehensive Design Systems that ensure consistency across all your digital touchpoints, speeding up development and strengthening your brand.",
    icon: Layout,
    category: "Design",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    benefits: [
      { title: "Conversion", desc: "Remove friction points that cause users to drop off." },
      { title: "Adoption", desc: "Intuitive interfaces require less training and support." },
      { title: "Brand Equity", desc: "Premium design signals trust and quality to your customers." }
    ],
    process: [
      { title: "Research", desc: "User interviews and competitive analysis to understand the landscape." },
      { title: "UX Design", desc: "Mapping user flows and information architecture." },
      { title: "UI Design", desc: "Applying visual polish, motion, and branding." },
      { title: "Handoff", desc: "Detailed specs and assets for the engineering team." }
    ],
    technologies: ["Figma", "Adobe CC", "Principle", "Storybook"],
    link: "/services/product-design",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "web-experiences",
    title: "Immersive Web Experiences",
    description: "Award-winning frontend development using WebGL, Three.js, and modern frameworks.",
    longDescription: "The web is a canvas. We push the boundaries of what's possible in a browser. Whether it's a 3D product configurator, a virtual event space, or a scrollytelling marketing site, we create immersive experiences that captivate audiences. We balance high-end visuals with rigorous performance optimization, ensuring that your site loads fast and runs smooth on any device. This is where art meets engineering.",
    icon: Globe,
    category: "Design",
    features: ["3D Web", "Interactive Storytelling", "Performance Optimization", "Accessibility"],
    benefits: [
      { title: "Engagement", desc: "Keep users on your site longer with interactive content." },
      { title: "Differentiation", desc: "Stand out from competitors with a 'wow' factor." },
      { title: "Performance", desc: "High frame rates and low latency, even for complex visuals." }
    ],
    process: [
      { title: "Concept", desc: "Storyboarding and mood boards to define the aesthetic." },
      { title: "Tech Art", desc: "Shader development and 3D asset optimization." },
      { title: "Development", desc: "WebGL implementation using Three.js or R3F." },
      { title: "Polishing", desc: "Fine-tuning animations and interactions for the perfect feel." }
    ],
    technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL", "Blender"],
    link: "/services/web-experiences",
    color: "from-fuchsia-500 to-purple-600"
  }
];
