import data from "../data.json";
import planet from "../assets/planet-jupiter.svg";
import internal from "../assets/planet-jupiter-internal.svg";
import geology from "../assets/geology-jupiter.png";
import { useState } from "react";
import Footer from "../Components/Footer";
type ParagraphProps = {
  title: string;
};

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[4].overview.source} target="_blank">
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

      <a href={data[4].structure.source} target="_blank">
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
      <a href={data[4].geology.source} target="_blank">
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
      <h1>{data[4].name}</h1>
      <div>
        <button onClick={handleOverviewClick}>Overview</button>
        <button onClick={handleStructureClick}>Structure</button>
        <button onClick={handleSurfaceClick}>Surface</button>

        {selectedParagraph === "overview" && (
          <OverviewParagraph title={data[4].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[4].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[4].geology.content} />
        )}
      </div>

      <div>
        <Footer
          rotation={data[4].rotation}
          revolution={data[4].revolution}
          radius={data[4].radius}
          temperature={data[4].temperature}
        />
      </div>
    </>
  );
}
