const config = {
  title: "Sergio Sediq | Cloud Engineer",
  description: {
    long: "Portfolio of Sergio Sediq, a cloud engineer in Manchester. Work includes AWS EKS, Terraform, an internal developer platform, production support at The Co-operative Bank, and internships at Peltarion and KPMG.",
    short:
      "Cloud engineer working with AWS, Kubernetes, Terraform, and CI/CD.",
  },
  keywords: [
    "Sergio Sediq",
    "cloud engineer",
    "DevOps",
    "AWS",
    "Kubernetes",
    "Terraform",
    "EKS",
    "GitHub Actions",
    "Argo CD",
    "On-Orbit Collision Predictor",
    "MyHealthPal",
  ],
  author: "Sergio Sediq",
  email: "sediqsergio@gmail.com",
  site: "https://sergio-portfolio-ashen.vercel.app",

  // for github stars button
  githubUsername: "SergioSediq",
  githubRepo: "sergio-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/sedyagho",
    github: "https://github.com/SergioSediq",
  },
};
export { config };
