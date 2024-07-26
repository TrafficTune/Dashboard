import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./App.css";
import { LineChart } from "@mui/x-charts/LineChart";
import data from "./data.json";

const steps = data.map(({ step }) => step);
const waitingTimes = data.map(
  ({ system_mean_waiting_time }) =>
    system_mean_waiting_time
);

function App() {
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Intersection</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Intersection"
          onChange={() => {}}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Experiment date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Experiment date"
          onChange={() => {}}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
      <LineChart
        xAxis={[{ data: steps, id: "x-axis-id", scaleType: "band" }]}
        series={[
          {
            data: waitingTimes,
            showMark: false,
          },
        ]}
        width={800}
        height={500}
      />
    </>
  );
}

export default App;
