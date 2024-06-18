import { XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts";

const XAxis = ({ dataKey = "name", ...rest }) => {
  return <RechartsXAxis dataKey={dataKey} {...rest} />;
};

const YAxis = ({ ...rest }) => {
  return <RechartsYAxis {...rest} />;
};

export { XAxis, YAxis };
