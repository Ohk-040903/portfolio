import React, {useEffect} from "react";
import Navbar from "./components/Navbar/navbar";
// eslint-disable-next-line no-unused-vars
import Intro from "./components/intro/intro"; 
import Skills from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Bgvideo from './assets/Bgvideo.mp4'
// import ParticleBackground from "./ParticleBacground";
function App() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
coords.x = e.clientX;
coords.y = e.clientY;
});

function animateCircles() {
let x = coords.x;
let y = coords.y;

cursor.style.top = x;
cursor.style.left = y;

circles.forEach(function (circle, index) {
  circle.style.left = x - 12 + "px";
  circle.style.top = y - 12 + "px";

  circle.style.scale = (circles.length - index) / circles.length;

  circle.x = x;
  circle.y = y;

  const nextCircle = circles[index + 1] || circles[0];
  x += (nextCircle.x - x) * 0.3;
  y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}

animateCircles();
});
  return (
    <div className="App">
       <div className='mainVid'>
        <video src={Bgvideo} autoPlay loop muted />
      </div>
      <div class="cursor">
  <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
      {/* <ParticleBackground/> */}
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
