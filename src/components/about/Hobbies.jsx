import React from 'react'
import PropTypes from 'prop-types'

import ReactEcharts from "echarts-for-react"; 

function Hobbies(props) {
    const option = {
        // backgroundColor: '#2c343c00',
        // title: {
        //   text: 'Customized Pie',
        //   left: 'center',
        //   top: 20,
        //   textStyle: {
        //     color: '#ccc'
        //   }
        // },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'My hobbies',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Write articles on medium.com' },
              { value: 310, name: 'Sketching portraits, scenery and anime OCs' },
              { value: 274, name: 'Helping programing enthusiasts worldwide' },
              { value: 235, name: 'Reading research papers from IEEE XPlore' },
              { value: 400, name: 'Develop hobby projects' }
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'gray'
            },
            labelLine: {
              lineStyle: {
                color: 'gray'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#30c3d2',
              shadowBlur: 100,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 20;
            }
          }
        ]
      };
      return <ReactEcharts option={option} />;
}

Hobbies.propTypes = {}

export default Hobbies
