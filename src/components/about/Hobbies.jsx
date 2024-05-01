import React, { useState } from 'react'
import PropTypes from 'prop-types'

// constants
import hobbyData from '../../data/hobbies.json';

import ReactEcharts from "echarts-for-react"; 
import TextDisplayBox from '../common/TextDisplayBox';

function Hobbies(props) {
    const [displayText, setDisplayText] = useState(hobbyData[0].desc)

    const option = {
        tooltip: {
          trigger: 'item',
          formatter: (data) => {
            console.log("FOUND IT",data);
            setDisplayText(data.data.desc)
          }
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
              ...hobbyData
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'gray',
              fontSize: 11
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
            },
          }
        ]
      };
      return (
      <div className='mb-12'>
      <ReactEcharts option={option} className='w-[80%] mx-auto'/>
      <TextDisplayBox text={displayText}/>
      </div>);
}

Hobbies.propTypes = {}

export default Hobbies
