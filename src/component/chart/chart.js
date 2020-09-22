import React,{ useState, useEffect} from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import  './chart.scss';

const useStyles = makeStyles((theme) => ({
  paper : {
    minHeight: '45%',
  }
}));

const Chart = ({chartData}) => {
  const [chartdata, setChartdata] = useState([]);
  const mfCell = Math.abs(parseFloat(chartData.mfPercent)).toFixed(2);
  const etfCell = Math.abs(parseFloat(chartData.etfPercent)).toFixed(2);
  const classes = useStyles();

  useEffect(() => {
    if (chartData) {
      let reqChartData = [
        {
          name: "Mutual Funds",
          value: parseFloat(mfCell),
          color: "#03a9f4",
        },
        {
          name: "ETFs",
          value: parseFloat(etfCell),
          color: "#ae9c46",
        },
      ];
      setChartdata(reqChartData);
    }
  }, [ chartData, etfCell, mfCell ]);
  return (
    <div className='chart'>
      <Paper elevate={6} className={classes.paper}>
        <div
          style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 14px",
        }}
        >
        <div className='header'>Portfolio</div>
        <select className='select'>
          <option>Asset Wise</option>
        </select>
        </div>
      <PieChart width={250} height={200}>
        <Pie
          data={chartdata}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
        >
          {chartdata.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          align="right"
          layout="vertical"
          verticalAlign="middle"
          height={24}
        />
        <Tooltip />
      </PieChart>
    </Paper>

    </div>
  )
}

export default Chart;
