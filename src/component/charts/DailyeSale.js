import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import "../../style/dashboard.scss";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const data = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 490,
    pv: 4300,
    amt: 2100,
  },
];
const DailyeSale = () => {
  return (
    <div className="userchart">
      <div className="percentage_chart">
        <Typography variant="h6" gutterBottom component="div">
          Sells Graph
        </Typography>
        <span className="text_icon" style={{ background: "#ca2129" }}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            color="#ffff"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <ArrowDownwardIcon />
            <span>1.5%</span>
          </Typography>
        </span>
      </div>
      <Typography variant="h4" gutterBottom component="div">
        $8,451
      </Typography>
      <ResponsiveContainer width="100%" aspect={5 / 1}>
        <LineChart height={100} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#ca2129" strokeWidth={2} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyeSale;
