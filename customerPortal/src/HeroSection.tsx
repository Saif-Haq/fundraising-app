import "./App.css";
import "./index.css";

export const HeroSection = () => (
    <div className="hero-container">
        <div className="flex">
            <div className="hero-alien-image">
                <img src="../public/leader-alien.png" alt="Leader Alien Pic" />
            </div>

            <div className="hero-alien-image">
                <p>LOGO</p>
            </div>

        </div>
        <button className="rounded-button">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 122.88"><title>down-arrow</title><path d="M24.94,55A14.66,14.66,0,0,0,4.38,75.91l43.45,42.76a14.66,14.66,0,0,0,20.56,0L111,76.73A14.66,14.66,0,0,0,90.46,55.82l-18,17.69-.29-59.17c-.1-19.28-29.42-19-29.33.24l.29,58.34L24.94,55Z" /></svg>
        </button>

    </div>
);
