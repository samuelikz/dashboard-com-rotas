import { Chart } from 'react-google-charts';

const data = [
  ['Pizza', 'Popularity'],
  ['Windows', 3],
  ['Linux/Mac', 10],
  ['Outros', 10], // Below limit.
];

export const options = {
  title: 'Popularity of Types of Pizza',
  sliceVisibilityThreshold: 0.0, // 20%
};

export function Sistemas() {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'auto'}
        height={'450px'} />
    </>
  );
}
