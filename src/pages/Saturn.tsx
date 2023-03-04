import data from "../data.json";
import planet from "../assets/planet-saturn.svg";
import internal from "../assets/planet-saturn-internal.svg";
import geology from "../assets/geology-saturn.png";
import { useState } from "react";
import Footer from "../Components/Footer";
type ParagraphProps = {
  title: string;
};

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[5].overview.source} target="_blank">
        Link
      </a>
      <img src={planet} />
    </div>
  );
};

const StructureParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[5].structure.source} target="_blank">
        Link
      </a>
      <img src={internal} />
    </div>
  );
};

const SurfaceParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <img src={planet} />
      <img src={geology} />
      <a href={data[5].geology.source} target="_blank">
        Link
      </a>
    </div>
  );
};

export default function Mercury() {
  const [selectedParagraph, setSelectedParagraph] = useState<
    "overview" | "structure" | "surface"
  >("overview");

  const handleOverviewClick = () => {
    setSelectedParagraph("overview");
  };

  const handleStructureClick = () => {
    setSelectedParagraph("structure");
  };

  const handleSurfaceClick = () => {
    setSelectedParagraph("surface");
  };
  return (
    <>
      <h1>{data[5].name}</h1>
      <div>
        <button onClick={handleOverviewClick}>Overview</button>
        <button onClick={handleStructureClick}>Structure</button>
        <button onClick={handleSurfaceClick}>Surface</button>

        {selectedParagraph === "overview" && (
          <OverviewParagraph title={data[5].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[5].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[5].geology.content} />
        )}
      </div>

      <div>
        <Footer
          rotation={data[5].rotation}
          revolution={data[5].revolution}
          radius={data[5].radius}
          temperature={data[5].temperature}
        />
      </div>
    </>
  );
}
