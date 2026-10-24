import SideNav from "../components/SideNav.jsx";
import ParticleBackground from "../components/ParticleBackground.jsx";
import "../styles/full-letter.css";

export default function FullLetter() {
return (
<div className="full-letter-shell">
<ParticleBackground subtle />
<SideNav />

  <div className="letter-closing">
    <p>Abh ye dekh kr maaf krdena 😞🖐️</p>
    <p>
      Laadli bahut mehnat lagi hai bnane mai, tu bnkr dene wali thi
      pr maine bnadiya. Abh tu padhai kr aur soja 🖐️
    </p>
  </div>
</div>

);
}