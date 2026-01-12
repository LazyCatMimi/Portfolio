// import "../../Styles/Components/Header.css";
// import { useState, useEffect } from "react"; // Remove useRef import

// export default function Header({ stopScalingRef, Content }) {
//   // Receive the ref as a prop
//   const [scrollY, setScrollY] = useState(0);
//   const [scaleFactor, setScaleFactor] = useState(1);
//   const [rotationAngle, setRotationAngle] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrollY(scrollTop);

//       // Get the position of the element with the stopScalingRef ref
//       const stopScalingPoint = stopScalingRef.current
//         ? stopScalingRef.current.offsetTop
//         : 0;

//       // Calculate the scaling factor based on the scroll position
//       if (scrollTop <= stopScalingPoint * 0.7) {
//         const newScaleFactor = 1 + scrollTop * 0.001;
//         setScaleFactor(newScaleFactor);
//         const newRotationAngle = scrollTop * 0.05;
//         setRotationAngle(newRotationAngle);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [stopScalingRef]);

//   return (
//     <header className="header">
//       <div
//         className="background-container"
//         style={{
//           transform: `scale(${scaleFactor})`,
//         }}
//       ></div>
//       <div className="content">
//         <Content />
//       </div>
//     </header>
//   );
// }
