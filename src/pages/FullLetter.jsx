import SideNav from "../components/SideNav.jsx";
import ParticleBackground from "../components/ParticleBackground.jsx";
import "../styles/full-letter.css";

export default function FullLetter() {
return (
<div className="full-letter-shell">
<ParticleBackground subtle />
<SideNav />

  <p className="letter-closing">
    Abh ye dekh kr maaf krdena 😞🖐️
  </p>

  <p className="letter-closing">
    Laadli bahut mehnat lagi hai bnane mai, tu bnkr dene wali thi pr maine bnadiya. Abh tu padhai kr aur soja 🖐️
  </p>
</div>

);
}