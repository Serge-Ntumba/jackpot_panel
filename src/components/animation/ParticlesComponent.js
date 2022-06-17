import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
import { loadFountainPreset } from "tsparticles-preset-fountain";

import particle1 from "../../assets/images/coin-1.png";
import particle2 from "../../assets/images/coin-2.png";
import particle3 from "../../assets/images/coin-3.png";
import particle4 from "../../assets/images/coin-4.png";
import particle5 from "../../assets/images/coin-5.png";

import particle6 from "../../assets/images/coin-6.png";
import particle7 from "../../assets/images/coin-7.png";
import particle8 from "../../assets/images/coin-8.png";
import particle9 from "../../assets/images/coin-9.png";
import particle10 from "../../assets/images/coin-10.png";
import particle11 from "../../assets/images/coin-11.png";
import particle12 from "../../assets/images/coin-12.png";
import particle13 from "../../assets/images/coin-13.png";

import particle14 from "../../assets/images/coin-14.png";
import particle15 from "../../assets/images/coin-15.png";
import particle16 from "../../assets/images/coin-16.png";
import particle17 from "../../assets/images/coin-17.png";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      backgroundMode: {
        enable: true,
        color: "none",
      },
      background: {
        color: "none",
        zIndex: -1,
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 0,
        },
        bounce: {
          vertical: {
            value: 0,
          },
        },
        color: {
          value: "#5bc0eb",
        },
        collisions: {
          enable: false,
        },
        life: {
          duration: {
            sync: true,
            value: 10,
          },

          count: 1,
        },
        opacity: {
          value: 0.9,
        },
        size: {
          value: 60,
          random: {
            enable: true,
            minimumValue: 1,
          },
        },
        move: {
          enable: true,
          gravity: {
            enable: true,
          },
          angle: {
            value: 60,
          },
          speed: 10,
          outModes: {
            // bottom: "bounce",
            top: "none",
            default: "destroy",
          },
          // trail: {
          //   enable: true,
          //   fillColor: "#000000",
          //   length: 10,
          // },
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

            {
              src: particle6,
            },
            // {
            //   src: particle7,
            // },
            // {
            //   src: particle8,
            // },
            // {
            //   src: particle9,
            // },

            // {
            //   src: particle10,
            // },

            // {
            //   src: particle11,
            // },
            // {
            //   src: particle12,
            // },

            {
              src: particle13,
            },
            {
              src: particle14,
            },
            {
              src: particle15,
            },

            {
              src: particle16,
            },

            {
              src: particle17,
            },
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
      },
      interactivity: {
        detectsOn: "canvas",
        // detectsOn: "window",
        events: {
          resize: true,
        },
      },
      detectRetina: true,

      emitters: {
        direction: "top",
        life: {
          count: 1,
          duration: 7,
          // delay: 0.5,
        },
        position: {
          x: 50,
          y: 35,
        },
        rate: {
          delay: 0.1,
          quantity: 3,
        },
        size: {
          width: 20,
          height: 0,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
    // loadFountainPreset(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
