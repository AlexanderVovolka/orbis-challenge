import React, { FC, useRef, useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';
import { BarProps } from '../../useStocksDetails';
import useStyles from './styles';

interface ChartProps {
  bars: BarProps[];
}

const Chart: FC<ChartProps> = ({ bars }) => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const ref = useRef<HTMLHeadingElement>(null);
    const classes = useStyles();

    useEffect(() => {
        const width = ref.current ? ref?.current?.offsetWidth : 0;
        const height = ref.current ? ref?.current?.offsetHeight : 0;
        setWidth(width);
        setHeight(height);
      }, []);

  return (
    <div ref={ref} className={classes.chartWrapper}>
      <LineChart width={width} height={height} data={bars}>
        <Line
          type='monotone'
          dataKey='c'
          stroke='#E51616'
          strokeWidth={4}
          dot={<span />}
        />
      </LineChart>
    </div>
  );
};
export default Chart;
