import "./Contact.css";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "575e3bd3-3353-4ef0-b698-e90a605d9304");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contactCol">
        <h3>Send us a message 📬 :</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          harum, adipisci modi perferendis dicta, iure facere impedit minima
          tempora cum nostrum quibusdam tempore consectetur dolores sed incidunt
          explicabo assumenda autem.
        </p>
        <ul>
          <li>
            <img src={mailIcon} />
            younesabourrig@gmail.com
          </li>
          <li>
            <img src={phoneIcon} />
            +212 7 120 744 02
          </li>
          <li>
            <img src={locationIcon} />
            Agadir, Sous Massa
          </li>
        </ul>
      </div>
      <div className="contactCol">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            required
          ></input>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          ></input>
          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Message here..."
            required
          ></textarea>
          <button className="btn darkBtn" type="submit">
            Submit Now
            <img src={whiteArrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
