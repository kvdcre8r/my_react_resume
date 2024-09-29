import Header from "../Header/Header.jsx";
import ResumeContent from "../Resume/Resume.jsx";
import "./mainframe.css";

export function Mainframe() {
  return (
    <main className="mainframe">
      <Header />
      <ResumeContent />
    </main>
  );
}
