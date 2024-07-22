import "./App.css";
import { LineChart } from "@mui/x-charts/LineChart";

function App() {
  return (
    <>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10], id: "x-axis-id", scaleType: 'band', }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}

export default App;
