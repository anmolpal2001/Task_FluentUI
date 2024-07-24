import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  container : {
    display : "flex",
    alignItems : "center",
    paddingTop : "20px",
    width : "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chartContainer: {
    height: "300px",
    position: "relative",
    width : "450px",
  },
  legendContainer: {
    marginLeft: "20px",
    position: "relative",
    right: 0,
    width: "50%",
  },
  colorBox: {
    width: "10px",
    height: "40px",
    marginRight: "8px",
  },
})

const PieChart = ({ data } : any) => {
  const styles = useStyles();
  return (
   <div className={styles.container}>
     {/* <div style={{ height: 300, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}> */}
     <div className={styles.chartContainer}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        colors={{ datum: "data.color" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -80%)",
        textAlign: "center"
      }}>
        <h5>1414 OF</h5>
        <h3>1387</h3>
        <p>CONTROLS <br/>ASSESSED</p>
      </div>
    </div>
    <div className={styles.legendContainer}>
        {data.map((item : any) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, flexDirection: "row" }}>
            <div className={styles.colorBox} style={{ backgroundColor: item.color }}></div>
            <div>
              <p>{item.label}</p>
              <strong style={{fontSize : "25px"}}>{item.value}</strong>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default PieChart;
