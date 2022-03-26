import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + "-" + props.toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingDetails = [
    { logoSrc: "javascript.svg" },
    { logoSrc: "react.svg" },
    { logoSrc: "nodejs.svg" },
    { logoSrc: "python.svg" },
    { logoSrc: "expressjs.svg" },
    { logoSrc: "mongodb.svg" },
    { logoSrc: "c.png" },
    { logoSrc: "c++.png" },
    { logoSrc: "html5.svg" },
    { logoSrc: "css3.svg" },
  ];

  // const programmingDetails = [
  //   { skill: "JavaScript", ratingPercentage: 85 },
  //   { skill: "React JS", ratingPercentage: 85 },
  //   { skill: "Python", ratingPercentage: 60 },
  //   { skill: "Express JS", ratingPercentage: 30 },
  //   { skill: "Node JS", ratingPercentage: 30 },
  //   { skill: "Mongo DB", ratingPercentage: 20 },
  //   { skill: "C++", ratingPercentage: 80 },
  //   { skill: "HTML", ratingPercentage: 80 },
  //   { skill: "CSS", ratingPercentage: 75 },
  // ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Feb 2022", toDate: "March 2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Feb 2022", toDate: "March 2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Feb 2022", toDate: "March 2022" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
  ];

  // Education
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Indian Institute of Information Technology, Design And Manufacturing, Kurnool A.P."}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Jawahar Navodaya Vidyalaya, Etah U.P"}
        subHeading={"12th Standard"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"Jawahar Navodaya Vidyalaya, Etah U.P"}
        subHeading={"10th Standard"}
        fromDate={"2015"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"IIITDM Kurnool A.P"}
          subHeading={"Front-End Developer"}
          fromDate={"2020"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web developer and Game Developer.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">- Developed an institue website for practice purpose.</span>
          <br />
          <span className="resume-description-text">
            - Currently developing academics management application for institue.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed UI for Digicomp website for future development of website.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          {/* <span>{skill.skill}</span> */}
          <img className="logo-box" src={require(`../../assets/Resume/${skill.logoSrc}`)} alt=".." />
          {/* <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
          </div> */}
        </div>
      ))}
    </div>,

    // <div className="resume-screen-container programming-skills-container" key="programming-skills">
    //   {programmingDetails.map((skill, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{skill.skill}</span>
    //       <div className="skill-percentage">
    //         <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
    //       </div>
    //     </div>
    //   ))}
    // </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Photography And Editing"
        description="I like to click some amazing photos and edit them in my free time. "
      />
      <ResumeHeading
        heading="Gaming"
        description="I love to play games, it helps me to connect with friends and helps in working with team."
      />
      <ResumeHeading
        heading="Dancing"
        description="Dancing helps me to divert from the current problem and gives me a clear mind for fresh start."
      />
    </div>,
  ];

  const handleCaraousel = (index) => {
    let offsetHeight = 360;
    let newCaraouselOffSet = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };
    setCarouselOffSetStyle(newCaraouselOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCaraousel(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt=".." />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div style={carouselOffSetStyle.style} className="resume-details-carousel">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
