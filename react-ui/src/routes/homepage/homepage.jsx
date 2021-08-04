// import Card from "../components/UI/card.js";
import "./homepage.css";

const Homepage = () => {
  const handleClick = (e) => {
    console.log("i heard a click");
  };

  return (
    <>
      <h1> Welcome to the Quote Calculator!</h1>
      <div className="gif-container">
        <img src="QuoteCalculatorPh1.gif" alt="calculator" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          aliquet posuere turpis, in euismod sem sodales id. Ut pharetra purus
          eget neque ultricies, eget varius sapien porta. Aliquam semper aliquet
          felis, ut dignissim ligula volutpat sit amet. Integer pulvinar, urna
          pharetra accumsan scelerisque, mauris justo suscipit massa, a iaculis
          eros tortor sed arcu. Aenean scelerisque leo nisi, id bibendum ex
          bibendum vitae. Pellentesque venenatis convallis metus eget malesuada.
          Cras sodales, urna et ullamcorper rhoncus, elit diam varius elit, a
          blandit libero augue nec orci. Ut ligula enim, pulvinar vel luctus
          quis, ornare non dolor. Sed eget purus nisi. Phasellus porttitor
          dignissim gravida. Phasellus fermentum nunc eu lacus tristique, quis
          cursus diam sollicitudin. Duis eu elit mi.
        </p>
      </div>

      <div className="pic2-container">
        <img src="QuoteCalculatorPh2.jpg" alt="calculator" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          aliquet posuere turpis, in euismod sem sodales id. Ut pharetra purus
          eget neque ultricies, eget varius sapien porta. Aliquam semper aliquet
          felis, ut dignissim ligula volutpat sit amet. Integer pulvinar, urna
          pharetra accumsan scelerisque, mauris justo suscipit massa, a iaculis
          eros tortor sed arcu. Aenean scelerisque leo nisi, id bibendum ex
          bibendum vitae. Pellentesque venenatis convallis metus eget malesuada.
          Cras sodales, urna et ullamcorper rhoncus, elit diam varius elit, a
          blandit libero augue nec orci. Ut ligula enim, pulvinar vel luctus
          quis, ornare non dolor. Sed eget purus nisi. Phasellus porttitor
          dignissim gravida. Phasellus fermentum nunc eu lacus tristique, quis
          cursus diam sollicitudin. Duis eu elit mi.
        </p>
      </div>
      <button onClick={handleClick} href="/">
        Try Quote Calculator
      </button>
      {/* <UsernameForm /> */}
    </>
  );
};

export default Homepage;
