import React, { Component } from "react";
import "../../HeatMapConfiguration.css";
import alert from "sweetalert";
import { Link } from "react-router-dom";
import "./grid5Cross5.css";

export const HeatMapColor = (props) => {
  return (
    <div className='configHeatMap'>
      <input type='color' onChange={props.changed} className='form-control' />
    </div>
  );
};

export const Ycategories = (props) => {
  return (
    <div className='configHeatMap form-group'>
      <input
        type='text'
        onChange={props.changed}
        className='form-control'
        placeholder='Y-Categories'
      />
    </div>
  );
};

export const Xcategories = (props) => {
  return (
    <div className='configHeatMap form-group ml-3'>
      <input
        type='text'
        onChange={props.changed}
        className='form-control'
        placeholder='X-Categories'
      />
    </div>
  );
};

export const YAxisTitle = (props) => {
  return (
    <div className='configHeatMap form-group'>
      <input
        type='text'
        onChange={props.changed}
        className='form-control vertical'
        placeholder='Y-Axis-Title'
      />
    </div>
  );
};

export const XAxisTitle = (props) => {
  return (
    <div className='configHeatMap form-group'>
      <input
        type='text'
        onChange={props.changed}
        className='form-control horizontal'
        placeholder='X-Axis-Title'
      />
    </div>
  );
};

export const HeatMapTitle = (props) => {
  return (
    <div className='configHeatMap form-group'>
      <input
        type='text'
        onChange={props.changed}
        className='form-control'
        placeholder='Enter Heat Map Title'
      />
    </div>
  );
};

export const HeatMapCategories = (props) => {
  return (
    <div className='configHeatMap form-group'>
      <label>{props.label}</label>
      <select onChange={props.changed} className='form-control'>
        <option>Select...</option>
        <option>Risk Category</option>
        <option>Other Category</option>
      </select>
    </div>
  );
};

export class HeatMapConfiguration extends Component {
  state = {
    colorFields: [
      { id: "c0", x: 0, y: 4 },
      { id: "c1", x: 1, y: 4 },
      { id: "c2", x: 2, y: 4 },
      { id: "c3", x: 3, y: 4 },
      { id: "c4", x: 4, y: 4 },

      { id: "c5", x: 0, y: 3 },
      { id: "c6", x: 1, y: 3 },
      { id: "c7", x: 2, y: 3 },
      { id: "c8", x: 3, y: 3 },
      { id: "c9", x: 4, y: 3 },

      { id: "c10", x: 0, y: 2 },
      { id: "c11", x: 1, y: 2 },
      { id: "c12", x: 2, y: 2 },
      { id: "c13", x: 3, y: 2 },
      { id: "c14", x: 4, y: 2 },

      { id: "c15", x: 0, y: 1 },
      { id: "c16", x: 1, y: 1 },
      { id: "c17", x: 2, y: 1 },
      { id: "c18", x: 3, y: 1 },
      { id: "c19", x: 4, y: 1 },

      { id: "c20", x: 0, y: 0 },
      { id: "c21", x: 1, y: 0 },
      { id: "c22", x: 2, y: 0 },
      { id: "c23", x: 3, y: 0 },
      {
        id: "c24",
        x: 4,
        y: 0,
      },
    ],

    ycategories: [
      { id: "y4" },
      { id: "y3" },
      { id: "y2" },
      { id: "y1" },
      { id: "y0" },
    ],

    xcategories: [
      { id: "x0" },
      { id: "x1" },
      { id: "x2" },
      { id: "x3" },
      { id: "x4" },
    ],

    ytitles: [{ id: "n0" }],

    xtitles: [{ id: "n0" }],

    heatmaptitles: [{ id: "t0" }],

    heatmapcategories: [{ id: "ht0", label: "Select Heat Map Category" }],
  };

  onInputChangeHandler = (event, id) => {
    const colorFieldIndex = this.state.colorFields.findIndex((c) => {
      return c.id === id;
    });
    const colorField = { ...this.state.colorFields[colorFieldIndex] };
    colorField.color = event.target.value;
    const colorFields = [...this.state.colorFields];
    colorFields[colorFieldIndex] = colorField;
    this.setState({ colorFields: colorFields });
  };

  onYCategoriesChangeHandler = (event, id) => {
    const ycategoryIndex = this.state.ycategories.findIndex((y) => {
      return y.id === id;
    });
    const ycategory = { ...this.state.ycategories[ycategoryIndex] };
    ycategory.ycategories = event.target.value;
    const ycategories = [...this.state.ycategories];
    ycategories[ycategoryIndex] = ycategory;
    this.setState({ ycategories: ycategories });
  };

  onxCategoriesChangeHandler = (event, id) => {
    const xcategoryIndex = this.state.xcategories.findIndex((x) => {
      return x.id === id;
    });
    const xcategory = { ...this.state.xcategories[xcategoryIndex] };
    xcategory.xcategories = event.target.value;
    const xcategories = [...this.state.xcategories];
    xcategories[xcategoryIndex] = xcategory;
    this.setState({ xcategories: xcategories });
  };

  onYtitleChangeHandler = (event, id) => {
    const ytitleIndex = this.state.ytitles.findIndex((x) => {
      return x.id === id;
    });
    const ytitle = { ...this.state.ytitles[ytitleIndex] };
    ytitle.ytitles = event.target.value;
    const ytitles = [...this.state.ytitles];
    ytitles[ytitleIndex] = ytitle;
    this.setState({ ytitles: ytitles });
  };

  onXtitleChangeHandler = (event, id) => {
    const xtitleIndex = this.state.xtitles.findIndex((x) => {
      return x.id === id;
    });
    const xtitle = { ...this.state.xtitles[xtitleIndex] };
    xtitle.xtitles = event.target.value;
    const xtitles = [...this.state.xtitles];
    xtitles[xtitleIndex] = xtitle;
    this.setState({ xtitles: xtitles });
  };

  onHeatMapTitleInputChangeHandler = (event, id) => {
    const heatmaptitleIndex = this.state.heatmaptitles.findIndex((x) => {
      return x.id === id;
    });
    const heatmaptitle = { ...this.state.heatmaptitles[heatmaptitleIndex] };
    heatmaptitle.heatmaptitle = event.target.value;
    const heatmaptitles = [...this.state.heatmaptitles];
    heatmaptitles[heatmaptitleIndex] = heatmaptitle;
    this.setState({ heatmaptitles: heatmaptitles });
  };

  onheatmapCategoriesChangeHandler = (event, id) => {
    const heatmapcategoryIndex = this.state.heatmapcategories.findIndex((x) => {
      return x.id === id;
    });
    const heatmapcategory = {
      ...this.state.heatmapcategories[heatmapcategoryIndex],
    };
    heatmapcategory.heatmapcategories = event.target.value;
    const heatmapcategories = [...this.state.heatmapcategories];
    heatmapcategories[heatmapcategoryIndex] = heatmapcategory;
    this.setState({ heatmapcategories: heatmapcategories });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert("Saved Sucessfully");
  };

  render() {
    return (
      <div>
        <div className='row ml-5 pl-3'>
          <div className='col-md-4'>
            <div className='form-group configHeatMap'>
              <label>Financial Institution</label>
              <select className='form-control'>
                <option>Select...</option>
                <option>A</option>
                <option>B</option>
                <option>c</option>
              </select>
            </div>
          </div>
          <div className='col-md-1' />
          <div className='col-md-4'>
            <div className='form-group configHeatMap'>
              {this.state.heatmapcategories.map((heatmapcategory, index) => {
                return (
                  <HeatMapCategories
                    key={heatmapcategory.id}
                    label={heatmapcategory.label}
                    changed={(event) =>
                      this.onheatmapCategoriesChangeHandler(
                        event,
                        heatmapcategory.id
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-4 titlefivecrossfive'>
                <span className='vertical'>
                  {this.state.ytitles.map((ytitle, index) => {
                    return (
                      <YAxisTitle
                        key={ytitle.id}
                        label={ytitle.label}
                        changed={(event) =>
                          this.onYtitleChangeHandler(event, ytitle.id)
                        }
                      />
                    );
                  })}
                </span>
              </div>
              <div className='col-md-8'>
                <div className='y-axisValue mt-5'>
                  <div className='mt-4'>
                    {this.state.ycategories.map((categories, index) => {
                      return (
                        <Ycategories
                          key={categories.id}
                          changed={(event) =>
                            this.onYCategoriesChangeHandler(
                              event,
                              categories.id
                            )
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-3'></div>
              <div className='col-md-5'>
                {this.state.heatmaptitles.map((heatmaptitle, index) => {
                  return (
                    <HeatMapTitle
                      key={heatmaptitle.id}
                      changed={(event) =>
                        this.onHeatMapTitleInputChangeHandler(
                          event,
                          heatmaptitle.id
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
            <div className='gridOneContainer'>
              <form onSubmit={this.handleSubmit} className='gridform'>
                <span className='grid-container'>
                  {this.state.colorFields.map((color, index) => {
                    return (
                      <HeatMapColor
                        data={color.value}
                        label={color.label}
                        key={color.id}
                        changed={(event) =>
                          this.onInputChangeHandler(event, color.id)
                        }
                      />
                    );
                  })}
                </span>
                <div className='text-center mt-5'>
                  <div className='row x-axisValue'>
                    <div className='x-axisValue'>
                      {this.state.xcategories.map((xcategories, index) => {
                        return (
                          <Xcategories
                            key={xcategories.id}
                            changed={(event) =>
                              this.onxCategoriesChangeHandler(
                                event,
                                xcategories.id
                              )
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className='mt-3'>
                    <span className='form-group text-center ml-5'>
                      {this.state.xtitles.map((xtitle, index) => {
                        return (
                          <XAxisTitle
                            key={xtitle.id}
                            label={xtitle.label}
                            changed={(event) =>
                              this.onXtitleChangeHandler(event, xtitle.id)
                            }
                          />
                        );
                      })}
                    </span>
                  </div>
                </div>
                <div className='text-right mt-4 form-group'>
                  <button className='other-white-button'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeatMapConfiguration;
