interface Props {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export default function Footer(props: Props) {
  return (
    <>
      <p>ROTATION TIME {props.rotation}</p>
      <p>REVOLUTION TIME {props.revolution}</p>
      <p>RADIUS {props.radius}</p>
      <p>AVERAGE TEMP. {props.temperature}</p>
    </>
  );
}
