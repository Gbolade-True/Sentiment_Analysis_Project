/* eslint-disable no-shadow */
import { PieChart, Pie, Cell } from 'recharts';

enum SentimentEnum {
  NEGATIVE = 35,
  NEUTRAL = 25,
  POSITIVE = 40
}

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: SentimentEnum.NEGATIVE, color: '#ff0000' },
  { name: 'B', value: SentimentEnum.NEUTRAL, color: '#cccccc' },
  { name: 'C', value: SentimentEnum.POSITIVE, color: '#00ff00' },
] as {
  name: string;
  value: number;
  color: string;
}[];
const cx = 200;
const cy = 200;
const iR = 50;
const oR = 100;

interface NeedleProps {
  value: number;
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
}

const needle = ({value, data, cx, cy, iR, oR, color}: NeedleProps) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key={x0} />,
    <path 
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} 
      stroke="#none" 
      fill={color} 
      key={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} 
    />,
  ];
};

interface LabelProps {
  cx: any; 
  cy: any; 
  midAngle: any;
  innerRadius: any; 
  outerRadius: any; 
  value: any; 
  index: any;
}

interface PieChartProps {
  guage: number | undefined;
}

export const ResultPieChart = ({ guage }: PieChartProps) => {

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }: LabelProps) => {
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill={data.find(d => d.value === value)?.color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
      {value === SentimentEnum.NEGATIVE && '-ve' }
      {value === SentimentEnum.NEUTRAL && 'neu' }
      {value === SentimentEnum.POSITIVE && '+ve' }
    </text>
    );
  };

  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle({ value: (guage ? guage*100 : 50), data, cx, cy, iR, oR, color: '#d0d000' })}
    </PieChart>
  );
}
