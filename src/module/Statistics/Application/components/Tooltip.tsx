interface IProps {
  isVisible: boolean;
  translateX: number;
  translateY: number;
  value: string;
  multi?: boolean;
  valueTwo?: string;
}
export default function Tooltip(props: IProps) {
  const { multi, valueTwo, isVisible, translateY, translateX, value } = props;
  console.log(multi);
  if (multi) {
    return (
      <div
        style={{
          visibility: isVisible ? "visible" : "hidden",
          transform: `translate(${translateX}px, ${translateY}px) `,
        }}
        className="tooltip"
      >
        <p className="text-sm ">Personas</p>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-primary mr-2 " />
          <p className="value">{value || 0}</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded  bg-[#25CED1] mr-2 " />
          <p className="value">{valueTwo || 0}</p>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        visibility: isVisible ? "visible" : "hidden",
        transform: `translate(${translateX}px, ${translateY}px) `,
      }}
      className="tooltip"
    >
      <p className="value">{value || 0}</p>
      <p className="label">Personas</p>
    </div>
  );
}
