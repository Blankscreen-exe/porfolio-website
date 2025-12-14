import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

// Data
import MetricsData from "../../data/metrics.json";

// constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img"

// Helpers
import { truncateText, capitalizeFirstLetter, capitalizeWords } from "../../helpers/common";

function Metrics(props) {
  const [isVisible, setIsVisible] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const parseMetricValue = (value) => {
    // Extract numeric value
    const numericValue = parseInt(value.toString().replace(/\D/g, '')) || 0;
    
    // Extract suffix (+, %, etc.)
    const suffix = value.toString().match(/[+%]/)?.[0] || '';
    
    return { numericValue, suffix };
  };

  return (
    <div ref={metricsRef}>
      <div className="h-full w-full  pt-6 p-4">
        <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
          {MetricsData.map((metric, ind) => {
            const { numericValue, suffix } = parseMetricValue(metric.value);
            
            return (
              <div key={ind} className="rounded-xl bg-bg2 p-6 text-center shadow-xl w-[250px] min-w-[200px] max-w-[300px]">
                <div className="text-6xl font-bold text-primary mb-2">
                  {isVisible ? (
                    <CountUp
                      end={numericValue}
                      duration={2.5}
                      suffix={suffix}
                    />
                  ) : (
                    <span>0{suffix}</span>
                  )}
                </div>
                <div className="text-lg text-content/70">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Metrics.propTypes = {};

export default Metrics;
