import data from "../data.json";
import planet from "../assets/planet-mercury.svg";
import internal from "../assets/planet-mercury-internal.svg";
import geology from "../assets/geology-mercury.png";
import { useState } from "react";
import Footer from "../Components/Footer";
import styled from "styled-components";

type ParagraphProps = {
  title: string;
};

const mercuryColor = data[0].color;

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <a href={data[0].overview.source} target="_blank">
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
      <a href={data[0].structure.source} target="_blank">
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
      <a href={data[0].geology.source} target="_blank">
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
      <div>
        <ALink
          onClick={handleOverviewClick}
          isActive={selectedParagraph === "overview"}
        >
          Overview
        </ALink>
        <ALink
          onClick={handleStructureClick}
          isActive={selectedParagraph === "structure"}
        >
          Structure
        </ALink>
        <ALink
          onClick={handleSurfaceClick}
          isActive={selectedParagraph === "surface"}
        >
          Surface
        </ALink>

        <h1>{data[0].name}</h1>

        {selectedParagraph === "overview" && (
          <OverviewParagraph title={data[0].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[0].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[0].geology.content} />
        )}

        <Footer
          rotation={data[0].rotation}
          revolution={data[0].revolution}
          radius={data[0].radius}
          temperature={data[0].temperature}
        />
      </div>
    </>
  );
}

const ALink = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${mercuryColor}` : "none"};
  &:hover {
    border-bottom: 2px solid ${mercuryColor};
    cursor: pointer;
  }
`;
