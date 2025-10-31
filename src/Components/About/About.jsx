import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

export const About = ({ setPlayVid }) => {
  return (
    <div className="about" id="about">
      <div className="aboutleft">
        <img src={aboutImg} className="aboutImg" />
        <img
          onClick={() => setPlayVid(true)}
          src={playIcon}
          className="playIcon"
        />
      </div>
      <div className="aboutright">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          incidunt deleniti odit consequuntur eaque ut aliquam amet cumque
          molestiae, exercitationem, similique optio! Voluptates, ut! Ut
          blanditiis impedit molestias laboriosam molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          incidunt deleniti odit consequuntur eaque ut aliquam amet cumque
          molestiae, exercitationem, similique optio! Voluptates, ut! Ut
          blanditiis impedit molestias laboriosam molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          incidunt deleniti odit consequuntur eaque ut aliquam amet cumque
          molestiae, exercitationem, similique optio! Voluptates, ut! Ut
          blanditiis impedit molestias laboriosam molestiae!
        </p>
      </div>
    </div>
  );
};
