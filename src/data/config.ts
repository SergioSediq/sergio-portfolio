const config = {
  title: "Sergio Sediq | Cloud Engineer",
  description: {
    long: "Explore the portfolio of Sergio, a cloud engineer building and operating infrastructure on AWS and Azure. IaC, CI/CD, and reliable systems. Discover my work including On-Orbit Collision Predictor, MyHealthPal, GovLens, Chatify, CatchUp, and more.",
    short:
      "Portfolio of Sergio Sediq, cloud engineer—infrastructure, IaC, CI/CD, AWS, Azure.",
  },
  keywords: [
    "Sergio",
    "portfolio",
    "cloud engineer",
    "cloud infrastructure",
    "web development",
    "3D animations",
    "interactive websites",
    "On-Orbit Collision Predictor",
    "MyHealthPal",
    "GovLens",
    "Chatify",
    "CatchUp",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Sergio Sediq",
  email: "sediqsergio@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "SergioSediq",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/sedyagho",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/SergioSediq",
  },
};
export { config };
