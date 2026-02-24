import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function MainShell({ children }) {
  return (
    <main className="appBg">
      <div className="appContainer">
        <div className="rowFull">
          <Section1 />
        </div>

        <div className="rowSplit">
          <Section2 />
          <div className="section3Card">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}