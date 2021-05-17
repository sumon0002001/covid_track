import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
  const [ dailyData, setDailyData] = useState({}); 

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
  });

  return (
    <div>
      <h2>Chart</h2>
    </div>
  )
};

export default Chart;
