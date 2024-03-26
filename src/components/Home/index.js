import React from "react";
import "../../Assets/css/montain.css";
import "../../style.css";
import stars1 from "../../Assets/images/stars1.webp";
import moon2 from "../../Assets/images/moon2.webp";
import mountains3 from "../../Assets/images/mountains3.webp";
import mountains4 from "../../Assets/images/mountains4.webp";
import river5 from "../../Assets/images/river5.webp";
import boat6 from "../../Assets/images/boat6.webp";
import mountains7 from "../../Assets/images/mountains7.webp";
import Home from "./Home"

function Index() {
  window.onscroll = function () {
    let value = window.scrollY;
    window.stars.style.left = value + "px";
    window.moon.style.top = value * 4 + "px";
    window.mountains3.style.top = value * 2 + "px";
    window.mountains4.style.top = value * 1.5 + "px";
    window.river.style.top = value + "px";
    window.boat.style.top = value + "px";
    window.boat.style.left = value * 3 + "px";
    window.dd.style.fontSize = value + "px";
    if (window.scrollY >= 50) {
      window.dd.style.fontSize = 45 + "px";
      window.dd.style.position = "fixed";
      if (window.scrollY >= 375) {
        window.dd.style.display = "none";
      } else {
        window.dd.style.display = "block";
      }
      if (window.scrollY >= 127) {
        document.getElementById("main").style.background =
          "linear-gradient(#376281, #10001f)";
      } else {
        document.getElementById("main").style.background =
          "linear-gradient(#200016, #10001f)";
      }
    }
  };

  return (
    <div id="body">
      <section id="main">
        <img src={stars1} id="stars" alt="etoile" />
        <h3 id="dd">
          Hi There !{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h3>

        <img src={moon2} id="moon" alt="lune" />
        <img src={mountains3} id="mountains3" alt="montagne1" />
        <img src={mountains4} id="mountains4" alt="montagne2" />
        <img src={river5} id="river" alt="riviere" />
        <img src={boat6} id="boat" alt="bateau" />
        <img src={mountains7} id="mountains7" alt="montagne7" />
      </section>
      <div className="content"><Home /></div>
    </div>
  );
}

export default Index;
