import { Link } from "react-router-dom";
import SideNav from "../components/SideNav.jsx";
import ParticleBackground from "../components/ParticleBackground.jsx";
import "../styles/full-letter.css";

export default function FullLetter() {
  return (
    <div className="full-letter-shell">
      <ParticleBackground subtle />
      <SideNav />
      <p className="letter-closing">Abh ye dekh kr maaf krdena 😞🖐️</p>
      <article className="full-letter-inner">