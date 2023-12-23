import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useCallback, useState } from "react";
import { Vector2, Color, DoubleSide, MathUtils } from "three";
import { motion as motion3d } from "framer-motion-3d";
import { motion } from "framer-motion";
import { mainTitleVariants, letterVariants } from "./variants";
import "./app.css";

import {
  vertexShader,
  ballVertexShader,
  planeVertexShader,
  div3DVertexShader,
} from "./shaders/vertexShader";
import {
  fragmentShader,
  ballFragmentShader,
  planeFragmentShader,
  div3DFragmentShader,
} from "./shaders/fragmentShader";

function Cube() {
  const mesh = useRef();
  const tappedIn = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
      u_strength: { value: 2.0 },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

    mesh.current.material.uniforms.u_strength.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_strength.value,
      tappedIn.current ? 10.0 : 2.0,
      1.0
    );
  });

  return (
    <motion3d.mesh
      whileHover={{ scale: 2.0 }}
      scale={1.5}
      ref={mesh}
      position={[-4, 0, 0]}
      rotation={[-Math.PI / 3, 0, 0]}
      onPointerOver={() => (tappedIn.current = true)}
      onPointerOut={() => (tappedIn.current = false)}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        side={DoubleSide}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </motion3d.mesh>
  );
}

function Icosahedron() {
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_intensity: {
        value: 0.3,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.2
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={0.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={ballVertexShader}
        fragmentShader={ballFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Plane() {
  const mesh = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#A1A3F7"),
      },
      u_colorA: { value: new Color("#9FBAF9") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((state) => {
    const { clock } = state;

    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_mouse.value = new Vector2(
      mousePosition.current.x,
      mousePosition.current.y
    );
  });

  return (
    <mesh ref={mesh} position={[4, 0, 0]} scale={1.8}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={planeFragmentShader}
        vertexShader={planeVertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Div3D({ play, waving }) {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_strengthFreq: { value: 0.0 },
      u_strengthAmp: { value: 0.0 },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_strengthFreq.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_strengthFreq.value,
      waving ? 0.4 : 0.0,
      0.1
    );
    mesh.current.material.uniforms.u_strengthAmp.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_strengthAmp.value,
      waving ? 1.5 : 0.0,
      0.1
    );
  });

  const clickDownAnim = () => {
    console.log("Dont click me...");
  };

  useEffect(() => {
    mesh.current.addEventListener("poui", clickDownAnim, false);

    return () => {
      mesh.current.removeEventListener("mousedown", clickDownAnim, false);
    };
  }, [clickDownAnim]);

  const viewport = useThree((state) => state.viewport);

  const variants = {
    init: { transform: "scale(1)" },
    zoomOut: { transform: "scale(0.7)" },
    zoomIn: { transform: "scale(1)" },
  };

  return (
    <motion3d.mesh
      variants={variants}
      ref={mesh}
      scale={[viewport.width, viewport.height, 1]}
      initial={{ x: 0, y: 0, z: 0 }}
      animate={play ? { x: 0, y: 0, z: -2 } : { x: 0, y: 0, z: 0 }}
      transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        side={DoubleSide}
        uniforms={uniforms}
        vertexShader={div3DVertexShader}
        fragmentShader={div3DFragmentShader}
      />
    </motion3d.mesh>
  );
}

function Scene({ play, waving }) {
  return (
    <Canvas OrthographicCamera>
      <Div3D play={play} waving={waving} />
    </Canvas>
  );
}

export default function App3D() {
  const [play, setPlay] = useState(false);
  const [waving, setWaving] = useState(false);
  const [isWaved, setIsWaved] = useState(false);

  const handleAnimationPlay = (playValue, canWaveValue) => {
    setPlay(playValue);
    if (!isWaved && canWaveValue == 1) {
      setWaving(true);
      setTimeout(() => setWaving(false), 900);
      setIsWaved(true);
    } else if (isWaved && canWaveValue == 2) {
      setWaving(true);
      setTimeout(() => setWaving(false), 900);
      setIsWaved(false);
    }
  };

  return (
    <div className="h-full relative flex justify-center items-center">
      <div
        onClick={() => handleAnimationPlay(false, 2)}
        className={`flex flex-col justify-center items-center cursor-pointer text-[5rem] text-gray-500 absolute top-0 left-0 py-5 px-10 font-semibold ${
          play ? "" : "pointer-events-none"
        }`}
      >
        {"K98".split("").map((letter, i) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate={play ? "enter" : "exit"}
              className="leading-[4rem]"
            >
              {letter}
            </motion.div>
          );
        })}
      </div>
      <motion.div
        onClick={() => handleAnimationPlay(true, 1)}
        className="absolute top-0 text-[3rem] h-[10%] right-0 overflow-hidden cursor-pointer font-semibold mix-blend-difference  text-[white] tracking-tighter px-6"
      >
        Work
      </motion.div>
      <motion.div
        key={1232}
        variants={mainTitleVariants}
        initial="initial"
        animate={play ? "enter" : "exit"}
        className="text-white text-[9rem] font-light tracking-tighter"
      >
        Kagune Design
      </motion.div>
      <div className="h-full w-full absolute top-0 -z-10 left-0 bg-white">
        <Scene play={play} waving={waving} />
      </div>
    </div>
  );
}
