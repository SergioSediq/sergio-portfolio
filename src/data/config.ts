const config = {
  title: "Sergio Sediq | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Sergio, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including On-Orbit Collision Predictor, MyHealthPal, GovLens, Chatify, CatchUp, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Sergio, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Sergio",
    "portfolio",
    "full-stack developer",
    "creative technologist",
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
