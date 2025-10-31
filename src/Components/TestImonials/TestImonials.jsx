import "./TestImonials.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import { useRef } from "react";

export const TestImonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = ` translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = ` translateX(${tx}%)`;
  };

  return (
    <div className="testImonials" id="testimonials">
      <img src={next} className="next" onClick={() => slideForward()} />
      <img src={back} className="back" onClick={() => slideBackward()} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} />
                <div>
                  <h3>Sandi Prays</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, natus similique a debitis voluptatem eos incidunt omnis
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user2} />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, natus similique a debitis voluptatem eos incidunt omnis
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user3} />
                <div>
                  <h3>Tarra Lindor</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, natus similique a debitis voluptatem eos incidunt omnis
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user4} />
                <div>
                  <h3>Dixon frasse</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, natus similique a debitis voluptatem eos incidunt omnis
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
