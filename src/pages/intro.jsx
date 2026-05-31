import LottieModule from "lottie-react";
import hambugi from "../assets/hambu.json";
import "../css/hambugi.css";

const Lottie = LottieModule.default;

function Intro() {
  return (
    <div className="intro">
      <Lottie
        animationData={hambugi}
        loop={false}
        autoplay={true}
      />
    </div>
  );
}

export default Intro;