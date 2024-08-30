interface Props {
  className: string;
  svg: string;
}

export default function Tecnology({ className, svg }: Props) {
  return (
    <div className={`icon ${className}`}>
      <img className="svg" src={svg} alt="icon-img" />
    </div>
  );
}
