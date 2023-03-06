import data from "../data.json";
import planet from "../assets/planet-uranus.svg";
import internal from "../assets/planet-uranus-internal.svg";
import geology from "../assets/geology-uranus.png";
import { useState } from "react";
import Footer from "../Components/Footer";
import styled from "styled-components";

type ParagraphProps = {
  title: string;
};

const uranusColor = data[6].color;

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[6].overview.source} target="_blank">
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

      <a href={data[6].structure.source} target="_blank">
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
      <a href={data[6].geology.source} target="_blank">
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
      <h1>{data[6].name}</h1>
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

        {selectedParagraph === "overview" && (
          <OverviewParagraph title={data[6].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[6].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[6].geology.content} />
        )}
      </div>

      <div>
        <Footer
          rotation={data[6].rotation}
          revolution={data[6].revolution}
          radius={data[6].radius}
          temperature={data[6].temperature}
        />
      </div>
    </>
  );
}

const ALink = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${uranusColor}` : "none"};
  &:hover {
    border-bottom: 2px solid ${uranusColor};
    cursor: pointer;
  }
`;
