import React, { useState, useEffect } from "react";
import "./HeatMapConfiguration.css";
import GridFiveCrossFive from "./HeatMap/Grids/grid5Cross5";
import GridThreeCrossThree from "./HeatMap/Grids/grid3cross3";
import GridFourCrossFour from "./HeatMap/Grids/grid4cross4";
import GridFiveCrossFour from "./HeatMap/Grids/grid5cross4";
import GridFourCrossFive from "./HeatMap/Grids/grid4cross5";
import { Link } from "react-router-dom";

const HeatMapConfiguration = () => {
  const [Grid, setGrid] = useState({});
  const [isGridFiveCrossFive, setGridFiveCrossFive] = useState(false);
  const [isGridThreeCrossThree, setGridThreeCrossThree] = useState(false);
  const [isGridFiveCrossFour, setGridFiveCrossFour] = useState(false);
  const [isGridFourCrossFive, setGridFourCrossFive] = useState(false);
  const [isGridFourCrossFour, setGridFourCrossFour] = useState(false);
  const [activeGrid, setActiveGrid] = useState("");
  const onInputChangeHandler = (e) => {
    setGrid({ ...Grid, [e.target.name]: e.target.value });
    setActiveGrid(e.target.value);
  };

  const { gridType } = Grid;

  useEffect(() => {
    setActiveGrid(gridType);
    switch (activeGrid) {
      case "selectgrid":
        setGridFiveCrossFive(false);
        setGridThreeCrossThree(false);
        setGridFiveCrossFour(false);
        setGridFourCrossFive(false);
        setGridFourCrossFour(false);
        break;
      case "fivecrossfive":
        setGridFiveCrossFive(true);
        setGridThreeCrossThree(false);
        setGridFiveCrossFour(false);
        setGridFourCrossFive(false);
        setGridFourCrossFour(false);
        break;
      case "threecrossthree":
        setGridFiveCrossFive(false);
        setGridThreeCrossThree(true);
        setGridFiveCrossFour(false);
        setGridFourCrossFive(false);
        setGridFourCrossFour(false);
        break;
      case "fivecrossfour":
        setGridFiveCrossFive(false);
        setGridThreeCrossThree(false);
        setGridFiveCrossFour(true);
        setGridFourCrossFive(false);
        setGridFourCrossFour(false);
        break;
      case "fourcrossfive":
        setGridFiveCrossFive(false);
        setGridThreeCrossThree(false);
        setGridFiveCrossFour(false);
        setGridFourCrossFive(true);
        setGridFourCrossFour(false);
        break;
      case "fourcrossfour":
        setGridFiveCrossFive(false);
        setGridThreeCrossThree(false);
        setGridFiveCrossFour(false);
        setGridFourCrossFive(false);
        setGridFourCrossFour(true);
        break;
    }
  }, [Grid]);

  return (
    <div>
      <div className='p-3 text-right'>
        <Link to='/configuration'>
          <button className='other-button'>Back</button>
        </Link>
      </div>
      <div className='row heatmap mt-3'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
          <label>Please Select Heat Map Dimensions</label>
          <select
            className='form-control'
            value={gridType}
            name='gridType'
            onChange={(e) => onInputChangeHandler(e)}
          >
            <option value='selectgrid'>Select...</option>
            <option value='fivecrossfive'>5 X 5</option>
            <option value='threecrossthree'>3 X 3</option>
            <option value='fivecrossfour'>5 X 4</option>
            <option value='fourcrossfive'>4 X 5</option>
            <option value='fourcrossfour'>4 X 4</option>
          </select>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <span>
          {isGridFiveCrossFive && (
            <div>
              <GridFiveCrossFive />
            </div>
          )}
          {isGridThreeCrossThree && (
            <div>
              <GridThreeCrossThree />
            </div>
          )}
          {isGridFourCrossFour && (
            <div>
              <GridFourCrossFour />
            </div>
          )}
          {isGridFiveCrossFour && (
            <div>
              <GridFiveCrossFour />
            </div>
          )}
          {isGridFourCrossFive && (
            <div>
              <GridFourCrossFive />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default HeatMapConfiguration;

// import React, { useState, useEffect } from "react";
// import "./HeatMapConfiguration.css";
// import GridFiveCrossFive from "./HeatMap/Grids/grid5Cross5";
// import GridThreeCrossThree from "./HeatMap/Grids/grid3cross3";
// import GridFourCrossFour from "./HeatMap/Grids/grid4cross4";
// import GridFiveCrossFour from "./HeatMap/Grids/grid5cross4";
// import GridFourCrossFive from "./HeatMap/Grids/grid4cross5";
// import { Link } from "react-router-dom";

// const HeatMapConfiguration = () => {
//   const [Grid, setGrid] = useState([]);

//   const onInputChangeHandler = (e) => {
//     const count = e.target.value;
//     setGrid({ ...Grid, [e.target.name]: e.target.value });
//     setActiveGrid(e.target.value);
//   };

//   const createGridParams = (value) => {
//     const splitArr = value.split("X");
//     const x = splitArr[0];
//     const y = splitArr[1];
//     createColorFieldsParams(x, y);
//     createAxisParams(x, y);
//     createCategoriesParams(x, y);
//   };
//   // { id: "c0", x: 0, y: 2, value: "137" },

//   const createColorFieldsParams = (x, y) => {
//     const colorFields = [];
//     for (i = 0; i < x; i++) {
//       for (j = 0; j < y; j++) {
//         const id = "c" + x + y;
//         colorFields.push({ id, x, y, value: "" });
//       }
//       return colorFields;
//     }
//   };

//   const createAxisParams = (x, y) => {
//     const titles = {
//       ytitles: [{ id: "n0", label: "Eneter Y-Axis Value" }],
//       xtitles: [{ id: "n0", label: "Eneter X-Axis Value" }],
//     };
//   };

//   const createCategoriesParams = (x, y) => {
//     const xcategories = [];
//     for (i = 0; i < x; i++) {
//       const id = "x" + x;
//       xcategories.push({ id });
//     }

//     const ycategories = [];
//     for (j = y - 1; j >= 0; j--) {
//       const id = "y" + x;
//       xcategories.push({ id });
//     }
//     return { xcategories, ycategories };
//   };

//   const { gridType } = Grid;

//   useEffect(() => {
//     setActiveGrid(gridType);
//     switch (activeGrid) {
//       case "selectgrid":
//         setGridFiveCrossFive(false);
//         setGridThreeCrossThree(false);
//         setGridFiveCrossFour(false);
//         setGridFourCrossFive(false);
//         setGridFourCrossFour(false);
//         break;
//       case "fivecrossfive":
//         setGridFiveCrossFive(true);
//         setGridThreeCrossThree(false);
//         setGridFiveCrossFour(false);
//         setGridFourCrossFive(false);
//         setGridFourCrossFour(false);
//         break;
//       case "threecrossthree":
//         setGridFiveCrossFive(false);
//         setGridThreeCrossThree(true);
//         setGridFiveCrossFour(false);
//         setGridFourCrossFive(false);
//         setGridFourCrossFour(false);
//         break;
//       case "fivecrossfour":
//         setGridFiveCrossFive(false);
//         setGridThreeCrossThree(false);
//         setGridFiveCrossFour(true);
//         setGridFourCrossFive(false);
//         setGridFourCrossFour(false);
//         break;
//       case "fourcrossfive":
//         setGridFiveCrossFive(false);
//         setGridThreeCrossThree(false);
//         setGridFiveCrossFour(false);
//         setGridFourCrossFive(true);
//         setGridFourCrossFour(false);
//         break;
//       case "fourcrossfour":
//         setGridFiveCrossFive(false);
//         setGridThreeCrossThree(false);
//         setGridFiveCrossFour(false);
//         setGridFourCrossFive(false);
//         setGridFourCrossFour(true);
//         break;
//     }
//   }, [Grid]);

//   return (
//     <div>
//       <div className='p-3'>
//         <Link to='/configuration'>
//           <button className='other-button'>Back</button>
//         </Link>
//       </div>
//       <div className='row heatmap mt-3'>
//         <div className='col-md-1'></div>
//         <div className='col-md-4'>
//           <label>Please Select Heat Map Dimensions</label>
//           <select
//             className='form-control'
//             style={{ height: "40px" }}
//             value={gridType}
//             name='gridType'
//             onChange={(e) => onInputChangeHandler(e)}
//           >
//             <option value='selectgrid'>Select...</option>
//             <option value='fivecrossfive'>5 X 5</option>
//             <option value='threecrossthree'>3 X 3</option>
//             <option value='fivecrossfour'>5 X 4</option>
//             <option value='fourcrossfive'>4 X 5</option>
//             <option value='fourcrossfour'>4 X 4</option>
//           </select>
//         </div>
//       </div>
//       <div style={{ padding: "10px" }}>
//         <span>
//           {isGridFiveCrossFive && (
//             <div>
//               <GridFiveCrossFive />
//             </div>
//           )}
//           {isGridThreeCrossThree && (
//             <div>
//               <GridThreeCrossThree />
//             </div>
//           )}
//           {isGridFourCrossFour && (
//             <div>
//               <GridFourCrossFour />
//             </div>
//           )}
//           {isGridFiveCrossFour && (
//             <div>
//               <GridFiveCrossFour />
//             </div>
//           )}
//           {isGridFourCrossFive && (
//             <div>
//               <GridFourCrossFive />
//             </div>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default HeatMapConfiguration;
