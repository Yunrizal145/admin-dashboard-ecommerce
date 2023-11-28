import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className="chart m-5 p-5 shadow-xl shadow-slate-400 border-2 border-slate-300 rounded-2xl">
			<h3 className="chartTitle mb-5 text-2xl font-semibold">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<YAxis />
					<Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
					<Tooltip />
					{grid && (
						<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
					)}
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
