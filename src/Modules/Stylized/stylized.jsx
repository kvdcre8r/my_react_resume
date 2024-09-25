import Header from "../../components/Header/Header.jsx";
import ResumeContent from "../../components/Resume/Resume.jsx";
import "./stylized.css";

export function Stylized() {
  return (
    <main className="stylized">
      <Header />
      <ResumeContent />
    </main>
  );
}
