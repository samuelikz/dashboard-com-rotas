import { Chart } from 'react-google-charts';

const data = [
  ['Pizza', 'Popularity'],
  ['Google Chorme', 3],
  ['Mozila', 10],
  ['Opera Mine', 10], // Below limit.
  ['Safari', 10],
  ['Outros', 10],
];

const options = {
  title: 'Popularity of Types of Pizza',
  sliceVisibilityThreshold: 0.0, // 20%
};

export function Navegadores() {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'auto'}
        height={'450px'}
      />
    </>
  );
}
