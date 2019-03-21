import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarGraph extends Component {
  render() {
    const correctCount = this.props.data.map(el => {
      return el.correctCount;
    });
    const incorrectCount = this.props.data.map(el => {
      return el.incorrectCount;
    });

    const data = {
      labels: [
        'Hola',
        'Cervesa',
        'Biblioteca',
        'Baño',
        '¿Por qué?',
        'porque',
        'porque',
        'gato',
        'burro'
      ],

      datasets: [
        {
          label: 'Correct',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#8D2B0B',
          borderColor: '#8D2B0B',
          borderCapStyle: 'butt',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: correctCount,
          easing: 'linear'
        },
        {
          label: 'Incorrect',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#CB6E17',
          borderColor: '#B44D12',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: incorrectCount
        }
      ]
    };

    return (
      <div>
        <h2>Your Progress!</h2>
        <Bar ref="chart" data={data} />
      </div>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
}

export default BarGraph;
