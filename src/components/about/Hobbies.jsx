import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";

// helpers
import { getThemeColor } from "../../helpers/common";

// reducer
import { useSelector } from 'react-redux';

// constants
import data from '../../data/hobbies.json';

const renderActiveShape = (props) => {

  const isDarkMode = useSelector((state) => {
    return state.persistedReducer.colorTheme
  })
  const themeColor = getThemeColor(isDarkMode);

  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy-200} dy={8} textAnchor="middle" fill={themeColor.content} dangerouslySetInnerHTML={{ __html: payload.name }}>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={themeColor.tertiary}
        stroke="none"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={themeColor.primary}
        stroke="none"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={themeColor.primary}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={themeColor.bg1} stroke="none" />
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={themeColor.shadow}
      >{`PV ${value}`}</text> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={themeColor.secondary}
      > */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey-10}
        dy={18}
        textAnchor={textAnchor}
        fill={themeColor.content}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

function Hobbies(props) {

  const isDarkMode = useSelector((state) => {
    return state.persistedReducer.colorTheme
  })
  const themeColor = getThemeColor(isDarkMode);

  useEffect(() => {
    
    console.log("---->", window.screen.width)
  
    return () => {
      
    }
  }, [])
  

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="">
      <PieChart width={600} height={400} className="mx-auto text-content">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={300}
          cy={200}
          innerRadius={100}
          outerRadius={100+30}
          fill={themeColor.primary}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  );
}

Hobbies.propTypes = {}

export default Hobbies
