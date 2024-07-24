import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";
import "../App.css"; // Ensure this path is correct

const BulletChart = ({ data } : any) => {
  return (
    <div className="hide-scale" style={{ height: 400 }}>
      <ResponsiveBullet
      styles={{display : "none"}}
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={60}
        titleAlign="start"
        titleOffsetY={-25}
        rangeBorderColor={{ from: "color", modifiers: [] }}
        measureBorderColor={{ from: "color", modifiers: [] }}
        measureSize={0.95}
        markerSize={0}
        rangeColors={['#808080', '#808080']} // Gray for ranges
        markerColors={({ data } : any) => data.measureColors} // Use the measureColors from data
        axisPosition="after"
      />
    </div>
  );
};

export default BulletChart;
