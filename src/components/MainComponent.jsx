import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function MainComponent() {
  return (
    <main className="appBg">
      <div className="appOverlay" />

      <div className="appContainer">
        <div className="rowFull">
          <Section1 />
          <div className="sectionContainer">
            <Section2 />
            <Section3 />
          </div>
        </div>
      </div>
    </main>
  );
}