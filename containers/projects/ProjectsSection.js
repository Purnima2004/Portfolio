import React, { Component } from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";

const ProjectsData = { 
  data: [
    {
      id: "1",
      name: "AutoML Solution",
      createdAt: "2024-01-15T10:30:00Z",
      url: "https://github.com/Purnima2004/AutoML-Solution",
      description: "An automated machine learning platform that simplifies the process of building, training, and deploying ML models without extensive coding knowledge.",
      languages: [
        {"name": "Python", "iconifyClass": "logos-python"},
        {"name": "Git", "iconifyClass": "logos-git"},
        {"name": "Streamlit", "iconifyClass": "simple-icons:streamlit"}
      ]
    },
    {
      id: "2",
      name: "FaceKey",
      createdAt: "2024-02-20T14:15:00Z",
      url: "https://github.com/Purnima2004/FaceKey",
      description: "A facial recognition security system that provides secure access control for buildings and applications using deep learning algorithms.",
      languages: [
        {"name": "OpenCV", "iconifyClass": "simple-icons:opencv"},
        {"name": "Python", "iconifyClass": "logos-python"},
        {"name": "Flask", "iconifyClass": "logos-flask"}
      ]
    },
    {
      id: "3",
      name: "SkillCraft",
      createdAt: "2024-03-10T09:45:00Z",
      url: "https://github.com/Purnima2004/SkillCraft_frontend",
      description: "An AI-powered learning platform that creates personalized skill development paths based on individual learning styles and career goals.",
      languages: [
        {"name": "ReactJS", "iconifyClass": "logos-react"},
        {"name": "Tailwind CSS", "iconifyClass": "logos-tailwindcss-icon"},
        {"name": "HuggingFace", "iconifyClass": "simple-icons:huggingface"}
      ]
    },
    {
      id: "4",
      name: "AI Assistant",
      createdAt: "2024-04-05T16:20:00Z",
      url: "https://github.com/Purnima2004/AI-Assistant",
      description: "A conversational AI assistant that can perform tasks, answer questions, and provide information through Langchain.",
      languages: [
        {"name": "Python", "iconifyClass": "logos-python"},
        {"name": "Groq API", "iconifyClass": "carbon:api"},
        {"name": "OpenCV", "iconifyClass": "simple-icons:opencv"}
      ]
    },
    {
      id: "5",
      name: "Fake Profile Detection",
      createdAt: "2024-05-01T11:00:00Z",
      url: "https://github.com/Purnima2004/FakeProfileDetection",
      description: "An ML-based system that identifies fake profiles on social media platforms by analyzing behavior patterns, content, and network connections.",
      languages: [
        {"name": "TensorFlow", "iconifyClass": "logos-tensorflow"},
        {"name": "Python", "iconifyClass": "logos-python"},
        {"name": "Keras", "iconifyClass": "simple-icons:keras"},
        {"name": "Scikit-learn", "iconifyClass": "simple-icons:scikitlearn"}
      ]
    }
  ]
};

class ProjectsSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main" id="projects" style={{ minHeight: "100vh", padding: "40px 20px" }}>
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={require("../../assets/images/girl_img2.png")}
                  alt="Projects"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}
        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} key={pub.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
