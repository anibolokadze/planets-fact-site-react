import data from "../data.json";
import planet from "../assets/planet-venus.svg";
import internal from "../assets/planet-venus-internal.svg";
import geology from "../assets/geology-venus.png";
import { useState } from "react";
import Footer from "../Components/Footer";
import styled from "styled-components";

type ParagraphProps = {
  title: string;
};

const venusColor = data[1].color;

const OverviewParagraph: React.FC<ParagraphProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <a href={data[1].overview.source} target="_blank">
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

      <a href={data[1].structure.source} target="_blank">
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
      <a href={data[1].geology.source} target="_blank">
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
      <h1>{data[1].name}</h1>
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
          <OverviewParagraph title={data[1].overview.content} />
        )}

        {selectedParagraph === "structure" && (
          <StructureParagraph title={data[1].structure.content} />
        )}

        {selectedParagraph === "surface" && (
          <SurfaceParagraph title={data[1].geology.content} />
        )}
      </div>

      <div>
        <Footer
          rotation={data[1].rotation}
          revolution={data[1].revolution}
          radius={data[1].radius}
          temperature={data[1].temperature}
        />
      </div>
    </>
  );
}

const ALink = styled.a<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${venusColor}` : "none"};
  &:hover {
    border-bottom: 2px solid ${venusColor};
    cursor: pointer;
  }
`;
