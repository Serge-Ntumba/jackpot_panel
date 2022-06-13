import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

import particle1 from "../../assets/images/coin-1.png";
import particle2 from "../../assets/images/coin-2.png";
import particle3 from "../../assets/images/coin-3.png";
import particle4 from "../../assets/images/coin-4.png";

import particle5 from "../../assets/images/coin-5.png";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "transparent",
      },
      interactivity: {
        detectsOn: "window",
      },
      emitters: {
        position: {
          x: 50,
          y: 50,
        },

        life: {
          duration: 0.9,
          delay: 2,
          count: 2, // how many times the animation should repeat
        },
        rate: {
          quantity: 5,
          delay: 0.1,
        },
      },

      particles: {
        links: {
          enable: false,
          distance: 200,
        },
        move: {
          enable: true,
          decay: {
            min: 0.05,
            max: 0.15,
          },
          gravity: {
            acceleration: 120.81,
            enable: true,
            maxSpeed: 200,
          },
          outModes: {
            top: "none",
            default: "destroy",
          },
          speed: { min: 60, max: 200 },
          direction: "top",
        },
        opacity: {
          value: { min: 0.5, max: 1 },
        },
        size: {
          value: { min: 10, max: 50 },
        },
        shape: {
          type: ["image"],
          image: [
            {
              src: particle1,
            },
            {
              src: particle2,
            },
            {
              src: particle3,
            },
            {
              src: particle4,
            },

            {
              src: particle5,
            },
            // {
            //   src: particle6,
            // },
            // {
            //   src: particle7,
            // },
            // {
            //   src: particle8,
            // },
          ],
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 0.5,
            max: 0.17,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7,
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 100,
          },
          size: {
            width: 0,
            height: 0,
          },
          life: {
            duration: 0.9,
            delay: 2,
            count: 0,
          },
          rate: {
            quantity: 1,
            delay: 0.1,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          move: true,
          animation: {
            enable: true,
            speed: 60,
          },
        },
        number: {
          //   value: 1000,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
