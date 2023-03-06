import data from "../data.json";
import planet from "../assets/planet-earth.svg";
import internal from "../assets/planet-earth-internal.svg";
import geology from "../assets/geology-earth.png";
import { useState } from "react";
import Footer from "../Components/Footer";
import styled from "styled-components";

type ParagraphProps = {
  title: string;
};

const earthColor = data[2].color;

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[2].overview.source} target="_blank">
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

      <a href={data[2].structure.source} target="_blank">
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
      <a href={data[2].geology.source} target="_blank">
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
      <h1>{data[2].name}</h1>
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
          <OverviewParagraph title={data[2].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[2].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[2].geology.content} />
        )}
      </div>

      <div>
        <Footer
          rotation={data[2].rotation}
          revolution={data[2].revolution}
          radius={data[2].radius}
          temperature={data[2].temperature}
        />
      </div>
    </>
  );
}
const ALink = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${earthColor}` : "none"};
  &:hover {
    border-bottom: 2px solid ${earthColor};
    cursor: pointer;
  }
`;
