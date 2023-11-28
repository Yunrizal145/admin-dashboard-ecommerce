import { FeaturedInfo, Chart, WidgetLG, WidgetSM } from "../../components";
import { userData } from "../../constant/data";

const HomePage = () => {
	return (
		<div className="flex-[4]">
			<FeaturedInfo />
			<Chart
				title="User Analytics"
				data={userData}
				grid
				dataKey="Active User"
			/>
			<div className="homeWidgets flex m-6">
				<div className="flex-[1]">
					<WidgetSM />
				</div>
				<div className="flex-[2]">
					<WidgetLG />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
