import React from "react";
import BarChart from "./BarChart";
import BulletChart from "./BulletChart";
import PieChart from "./PieChart";
import { mergeStyles } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";


const useStyles = () => {
  return {
    containerClass : mergeStyles({
      display: 'flex',
      flexDirection: 'column',
    }),
    rowClass : mergeStyles({
      display: 'flex',
      // justifyContent: 'space-between',
      gap : "20px",
      flexWrap: 'wrap', // Ensures items wrap on smaller screens
    }),
    pieClass : mergeStyles({
      // flex: '1 1 1', // One-third width on large screens
      border : "#808080 solid 2px",
      padding : "10px",
      height : "350px",
      marginBottom : "10px",
      minWidth: '450px',
      '@media (max-width: 600px)': {
        width: '100%',
        marginRight: '0',
      },
    }),
    itemClass : mergeStyles({
      flex: '1 1 1', // One-third width on large screens
      border : "#808080 solid 2px",
      padding : "10px",
      height : "550px",
      minWidth: '450px',
      '@media (max-width: 600px)': {
        width: '100%',
        marginRight: '0',
      },
    }),
    lastItemClass : mergeStyles({
      marginRight: '0',
    })    
  }
}

// const useStyles = mergeStyles({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   row: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap', // Ensures items wrap on smaller screens
//   },
//   item: {
//     flex: '1 1 33%', // One-third width on large screens
//     minWidth: '300px', // Ensure minimum width
//     marginRight: '20px',
//     '@media (max-width: 768px)': {
//       width: '100%',
//       marginRight: '0',
//     },
//   },
//   lastItem: {
//     marginRight: '0',
//   },
// });


const dataPie = [
  {
    id: "Satisfied",
    label: "Satisfied",
    value: 1137,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "Other than satisfied",
    label: "Other than satisfied",
    value: 277,
    color: "hsl(0, 70%, 50%)",
  },
  {
    id: "Pending assessment",
    label: "Pending assessment",
    value: 111,
    color: "hsl(0, 0%, 70%)",
  },
];

const dataBar = [
  {
    "country": "AD",
    "hot dog": 114,
    "hot dogColor": "hsl(354, 70%, 50%)",
    "burger": 96,
    "burgerColor": "hsl(168, 70%, 50%)",
    "sandwich": 49,
    "sandwichColor": "hsl(313, 70%, 50%)",
    "kebab": 199,
    "kebabColor": "hsl(66, 70%, 50%)",
    "fries": 93,
    "friesColor": "hsl(103, 70%, 50%)",
    "donut": 42,
    "donutColor": "hsl(156, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 158,
    "hot dogColor": "hsl(235, 70%, 50%)",
    "burger": 187,
    "burgerColor": "hsl(304, 70%, 50%)",
    "sandwich": 184,
    "sandwichColor": "hsl(125, 70%, 50%)",
    "kebab": 12,
    "kebabColor": "hsl(204, 70%, 50%)",
    "fries": 146,
    "friesColor": "hsl(23, 70%, 50%)",
    "donut": 185,
    "donutColor": "hsl(349, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 187,
    "hot dogColor": "hsl(83, 70%, 50%)",
    "burger": 13,
    "burgerColor": "hsl(352, 70%, 50%)",
    "sandwich": 167,
    "sandwichColor": "hsl(159, 70%, 50%)",
    "kebab": 115,
    "kebabColor": "hsl(22, 70%, 50%)",
    "fries": 105,
    "friesColor": "hsl(254, 70%, 50%)",
    "donut": 161,
    "donutColor": "hsl(66, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 15,
    "hot dogColor": "hsl(138, 70%, 50%)",
    "burger": 10,
    "burgerColor": "hsl(180, 70%, 50%)",
    "sandwich": 102,
    "sandwichColor": "hsl(169, 70%, 50%)",
    "kebab": 14,
    "kebabColor": "hsl(179, 70%, 50%)",
    "fries": 109,
    "friesColor": "hsl(119, 70%, 50%)",
    "donut": 57,
    "donutColor": "hsl(136, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 185,
    "hot dogColor": "hsl(16, 70%, 50%)",
    "burger": 72,
    "burgerColor": "hsl(138, 70%, 50%)",
    "sandwich": 112,
    "sandwichColor": "hsl(55, 70%, 50%)",
    "kebab": 61,
    "kebabColor": "hsl(87, 70%, 50%)",
    "fries": 10,
    "friesColor": "hsl(99, 70%, 50%)",
    "donut": 164,
    "donutColor": "hsl(281, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 119,
    "hot dogColor": "hsl(255, 70%, 50%)",
    "burger": 154,
    "burgerColor": "hsl(123, 70%, 50%)",
    "sandwich": 109,
    "sandwichColor": "hsl(284, 70%, 50%)",
    "kebab": 128,
    "kebabColor": "hsl(277, 70%, 50%)",
    "fries": 150,
    "friesColor": "hsl(149, 70%, 50%)",
    "donut": 93,
    "donutColor": "hsl(49, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 23,
    "hot dogColor": "hsl(139, 70%, 50%)",
    "burger": 19,
    "burgerColor": "hsl(110, 70%, 50%)",
    "sandwich": 191,
    "sandwichColor": "hsl(1, 70%, 50%)",
    "kebab": 131,
    "kebabColor": "hsl(77, 70%, 50%)",
    "fries": 24,
    "friesColor": "hsl(55, 70%, 50%)",
    "donut": 57,
    "donutColor": "hsl(156, 70%, 50%)"
  }
]
const dataCompliance = [
  {
    id: "CIS",
    label: "CIS",
    total: 20,
    actual: 13,
    measureColors: ['#FF0000'], // Red for CIS
  },
  {
    id: "FedRAMP (M)",
    label: "FedRAMP (M)",
    total: 324,
    actual: 170,
    measureColors: ['#00FF00'], // Green for FedRAMP (M)
  },
  {
    id: "ISO 27001",
    label: "ISO 27001",
    total: 22,
    actual: 15,
    measureColors: ['#0000FF'], // Blue for ISO 27001
  },
  {
    id: "PCI DSS 3.2",
    label: "PCI DSS 3.2",
    total: 33,
    actual: 22,
    measureColors: ['#FFA500'], // Orange for PCI DSS 3.2
  },
  {
    id: "CMMC L3",
    label: "CMMC L3",
    total: 130,
    actual: 104,
    measureColors: ['#800080'], // Purple for CMMC L3
  },
];

const processData = (data : any) => {
  return data.map((item : any) => {
    const percentage = (item.actual / item.total) * 100;
    return {
      ...item,
      ranges: [0, percentage, 100],
      measures: [percentage],
      markers: [percentage],
      value: item.actual,
      total: item.total,
    };
  });
};

const processedData = processData(dataCompliance);


const Chart = () => {
  const styles = useStyles();

  return (
    <div className={styles.containerClass}>
      <div className={styles.rowClass}>
        <div className={`${styles.itemClass}`}>
          <h3>Assessments summary</h3>
          <PieChart data={dataPie} />
        </div>
        <div className={`${styles.itemClass}`}>
          <h3>Deviations</h3>
          <BarChart data={dataBar} />
        </div>
        <div className={`${styles.itemClass} ${styles.lastItemClass}`}>
          <h3>Compliance</h3>
          <BulletChart data={processedData} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
