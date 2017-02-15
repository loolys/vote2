import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import oceanIgnore from'fusioncharts/themes/fusioncharts.theme.ocean';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

function getChart(data, title) {
  var myDataSource = {
    chart: {
        caption: title,
        theme: "ocean"
    },
    data: data
  },

  revenueChartConfigs = {
    id: "revenue-chart",
    renderAt: "revenue-chart-container",
    type: "column2d",
    width:600,
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource
  };

  return revenueChartConfigs;
}


export class PollChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      title: props.title
    }
  }
  render() {
    const { data, title } = this.props;
    console.log(title);
    let revenueChartConfigs = getChart(data, title);
    return (
      <div>
        <ReactFC {...revenueChartConfigs} />
      </div>
    );
  }
}

PollChart.propTypes = {
  data: React.PropTypes.array,
  title: React.PropTypes.string
};
