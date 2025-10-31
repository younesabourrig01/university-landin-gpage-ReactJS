import "./hero.css";
import darkArrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return <div className="hero container" id="hero">
    <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam qui sequi, dolores rerum obcaecati laudantium at quidem ea animi, voluptatibus quaerat fugit tenetur neque rem. Saepe voluptatem aut placeat impedit?</p>
        <button className="btn">Explor more<img src={darkArrow}></img></button>
    </div>
  </div>;
};
