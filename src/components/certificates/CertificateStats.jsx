import React, {useState, useEffect} from 'react'

import ReactEcharts from "echarts-for-react"

function CertificateStats(props) {

    const {data} = props;
    
    const dataKeys = Object.keys(data)
    const dataValues = Object.values(data).map(item => item.length)
    
    const radiusAxis = Math.max(...dataValues)+2

    // REVIEW: do it if you want dynamic resizing of the chart
    // const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //   const handleResize = () => {
    //     setWidth(window.innerWidth);
    //   };
  
    //   window.addEventListener('resize', handleResize);
  
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);

    // let middleRadius;
    // if (width<525) {
    //     middleRadius = '50%'
    // } else {
    //     middleRadius = '80%'
    // }

    const option = {
        title: [
            {
                text: ''
            }
        ],
        polar: {
            radius: [30, window.innerWidth<525 ? '50%' : '80%']
        },
        radiusAxis: {
            max: radiusAxis
        },
        angleAxis: {
            type: 'category',
            data: dataKeys,
            startAngle: 75,

        },
        tooltip: {},
        series: {
            type: 'bar',
            data: dataValues,
            coordinateSystem: 'polar',
            itemStyle: {
                color: '#30c3d2',
                shadowBlur: 100,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
            // label: {
            //     show: false,
            //     position: 'middle',
            //     formatter: '{b}: {c}'
            // }
        },
        animation: false
    };

    return (
        <div>
            <section class="grid place-items-center  w-[100%]">
                <label className='w-[100%]'> 
                    <input class="peer/showLabel absolute scale-0" type="checkbox" />
                    <span class="block max-h-14 w-[100%] overflow-hidden rounded-lg bg-bg2 px-4 py-0 text-primary shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-[100%]">
                        <h3 class="flex h-14 cursor-pointer items-center font-bold">Show/Hide Stats</h3>
                        <div class="mb-2 z-50">
                            {/* charts go here */}
                            <ReactEcharts option={option} className='w-[90%] mx-auto z-50'/>
                        </div>
                    </span>
                </label>
            </section>
        </div>
    )
}

export default CertificateStats