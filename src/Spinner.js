import { TailSpin } from "react-loader-spinner";

function Spinner({ height = 80, width = 80, radius = 1 }) {
  return (
    <div className="spinner">
      <TailSpin
        height={height}
        width={width}
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius={radius}
        wrapperStyle={{}}
      />
    </div>
  );
}

export { Spinner };
