"use client";

import { Physics } from "@react-three/cannon";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { PatientModel } from "../patient/PatientModel";
import { MedicalTools } from "../tools/MedicalTools";
import { Room } from "./Room";
import { Lighting } from "./Lighting";

export function Experience({ onBodyPartClick, activeTool }) {
  // const environmentPath = "/environment/DivaStudio.hdr";
  // const [environmentPath, setEnvironmentPath] = useState(null);
  
  // useEffect(() => {
    // Try to load local environment first, fallback to CDN
    // const localEnv = "/environment/DivaStudio.hdr";
    // setEnvironmentPath(localEnv);

    // Check if we're online and if local file exists
    // fetch(localEnv, { method: "HEAD" })
    //   .then(() => setEnvironmentPath(localEnv))
    //   .catch(() => {
    //     // Fallback to simple color if offline and no local file
    //     console.log("Using fallback environment");
    //     setEnvironmentPath("city"); // Use drei's built-in simple environment
    //   });
  // }, []);

  return (
    <>
      <Lighting />

      {/*<Environment preset="apartment" background blur={0.5}/> */}
      {/* Use a simple color environment instead of HDRI 
      <color attach="background" args={['#1e293b']} />

      <Environment preset={environmentPath || "city"} background blur={0.5} />
      */}

      <Physics gravity={[0, -9.81, 0]}>
        <PatientModel
          onBodyPartClick={onBodyPartClick}
          activeTool={activeTool}
        />
        <Room />
        <MedicalTools />
      </Physics>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={10}
        target={[0, 1, 0]}
      />
    </>
  );
}

// export function Experience() {
//   const { camera } = useThree()

//   useFrame((state) => {
//     // به‌روزرسانی‌های هر فریم
//   })

//   return (
//     <>
//       {/* نورپردازی */}
//       <Lighting />

//       {/* محیط */}
//       <Environment
//         preset="apartment"
//         background
//         blur={0.5}
//       />

//       {/* فیزیک */}
//       <Physics gravity={[0, -9.81, 0]}>
//         {/* بیمار */}
//         <PatientModel />

//         {/* اتاق معاینه */}
//         <Room />

//         {/* ابزار پزشکی */}
//         <MedicalTools />
//       </Physics>

//       {/* کنترل‌های دوربین */}
//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         minDistance={1}
//         maxDistance={10}
//         target={[0, 1, 0]}
//       />
//     </>
//   )
// }
