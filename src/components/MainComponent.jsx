import Section1 from "./Section1";
import Section2 from "./Section2";

export default function MainComponent({ children }) {
  return (
    <main className="appBg">
      <div className="appOverlay" />

      <div className="appContainer">
        <div className="rowFull">
          <Section1 />
          <div className="sectionContainer">
            <Section2 />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}