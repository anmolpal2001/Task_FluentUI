import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";
import "../App.css"; // Ensure this path is correct
import { mergeStyles } from "@fluentui/react";


const useStyles = () => {
  return {
    hideScale : mergeStyles({
      '& line' : {
        display : "none"
      },
      '& text[dominant-baseline="text-before-edge"]': {
        display: "none"
      },
    })
  }
}

const BulletChart = ({ data } : any) => {
  const customLayer = ({ data    }) => (
    <g>
      {data.map((bullet, index) => (
        <text
          key={bullet.id}
          x={bullet.x}
          y={bullet.y + bullet.height / 2}
          dx={-50}
          dy={-10}
          textAnchor="end"
          fontSize="14"
          fill="#333"
        >
          {bullet.data.textInfo}
        </text>
      ))}
    </g>
  );
  console.log(data);
  
  const styles = useStyles();
  return (
    <div className={styles.hideScale} style={{ height: 400 }}>
      <ResponsiveBullet
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
        layers={['grid', 'ranges', 'measures', 'markers', 'axes', customLayer]}
      />
      {/* <div>
        {data.map((item) => {
          <h1>{item.label}</h1>
        })}
      </div> */}
    </div>
  );
};

export default BulletChart;
