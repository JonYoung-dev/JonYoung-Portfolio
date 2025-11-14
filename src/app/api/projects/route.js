// GET /api/projects
export async function GET() {
  const projects = [
{
  title: "Automated Workflow Optimizer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, arcu ac dignissim fermentum, risus odio aliquet felis, et dapibus nisi lorem sit amet dolor.",
  img: "https://cataas.com/cat/says/Automated%20Workflow%20Optimizer",
  link: "https://cataas.com/cat",
  keywords: ["automation", "workflows", "optimization", "task-runner", "orchestration"],
},
{
  title: "Real-Time Analytics Dashboard",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  img: "https://cataas.com/cat/says/Real-Time%20Analytics%20Dashboard",
  link: "https://cataas.com/cat",
  keywords: ["analytics", "dashboard", "metrics", "real-time", "data-visualization"],
},
{
  title: "Predictive Maintenance Engine",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  img: "https://cataas.com/cat/says/Predictive%20Maintenance%20Engine",
  link: "https://cataas.com/cat",
  keywords: ["machine-learning", "prediction", "maintenance", "ai-models", "failure-detection"],
},
{
  title: "Secure File Distribution Service",
  description:
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
  img: "https://cataas.com/cat/says/Secure%20File%20Distribution%20Service",
  link: "https://cataas.com/cat",
  keywords: ["security", "file-sharing", "encryption", "distribution", "cloud-storage"],
},
{
  title: "Intelligent Form Processor",
  description:
    "At vero eos et accusamus et iusto odio dignissimos ducimus.",
  img: "https://cataas.com/cat/says/Intelligent%20Form%20Processor",
  link: "https://cataas.com/cat",
  keywords: ["forms", "parsing", "automation", "nlp", "input-validation"],
},
{
  title: "Adaptive UI Theme Generator",
  description:
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
  img: "https://cataas.com/cat/says/Adaptive%20UI%20Theme%20Generator",
  link: "https://cataas.com/cat",
  keywords: ["ui", "themes", "design", "adaptive-layouts", "style-system"],
}
  ];

  return Response.json({ projects });
}
