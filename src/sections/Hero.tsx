import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words?.map((item) => (
                      <span
                        className="flex items-center md:gap-3 gap-1 pb-2"
                        key={item.text}
                      >
                        <img
                          src={item.imgPath}
                          alt={item.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 bg-white-50 rounded-full"
                        />
                        <span>{item.text} </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Projects</h1>
              <h1>that Deliver Results</h1>
              <p className="text-white-50 md:text-xl relative z-10">
                Hi I am Sudharsan, a developer with a passion for code
              </p>
              <Button
                text="See my Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
              />
            </div>
          </div>
        </header>
        {/* RIGHT: 3D CONTENT */}
      </div>
      {/* {words.map(item => )} */}
    </section>
  );
};

export default Hero;
