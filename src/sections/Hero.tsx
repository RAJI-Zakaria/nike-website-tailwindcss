import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { useEffect, useState } from "react";
import { ShoeCard, Button } from "../components";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const switchShoeDelay = 6000;
    const timerInterval = 1000;

    let timeLeft = 6;

    const interval = setInterval(() => {
      timeLeft -= 1;
      setTimer(timeLeft);

      if (timeLeft === 1) {
        setBigShoeImg((prev) => {
          if (prev === bigShoe1) return bigShoe2;
          if (prev === bigShoe2) return bigShoe3;
          return bigShoe1;
        });
        timeLeft = switchShoeDelay / timerInterval;
      }
    }, timerInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white-400 xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>{" "}
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort nd innovation for your
          active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />{" "}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />
          <span className="w-[20px] h-[20px] bg-coral-red flex items-center justify-center text-neutral-50 rounded-full p-4 animate-pulse delay-1000">
            {" "}
            {timer}
          </span>
        </div>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                shoe={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
