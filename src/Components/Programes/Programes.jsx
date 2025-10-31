import "./Programes.css";
import programe1 from "../../assets/program-1.png";
import programe2 from "../../assets/program-2.png";
import programe3 from "../../assets/program-3.png";
import proframIcon1 from "../../assets/program-icon-1.png";
import proframIcon2 from "../../assets/program-icon-2.png";
import proframIcon3 from "../../assets/program-icon-3.png";

export const Programes = () => {
  return (
    <div className="programes" id="program">
      <div className="program">
        <img src={programe1}></img>
        <div className="caption">
          <img src={proframIcon1} />
          <p>Graduationc Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programe2}></img>
        <div className="caption">
          <img src={proframIcon2} />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programe3}></img>
        <div className="caption">
          <img src={proframIcon3} />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};
