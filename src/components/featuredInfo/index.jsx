import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
	return (
		<div className="featured flex justify-between">
			{/* Revanue */}
			<div className="featuredItem flex-[1] mx-6 p-8 rounded-xl cursor-pointer shadow-xl shadow-slate-400 border-2 border-slate-300">
				<span className="featuredtitle text-2xl">Revanue</span>
				<div className="featuredMoneyContainer my-3 flex items-center">
					<span className="featuredMoney text-3xl font-semibold">
						$2,145
					</span>
					<span className="featuredMoneyRate flex items-center ml-5">
						-11.4{" "}
						<ArrowDownwardIcon className="featuredIcon text-sm ml-2 text-red-500" />
					</span>
				</div>
				<span className="featuredSub text-slate-700">
					Compared to last month
				</span>
			</div>

			{/* Sales */}
			<div className="featuredItem flex-[1] mx-6 p-8 rounded-xl cursor-pointer shadow-xl shadow-slate-400 border-2 border-slate-300">
				<span className="featuredtitle text-2xl">Sales</span>
				<div className="featuredMoneyContainer my-3 flex items-center">
					<span className="featuredMoney text-3xl font-semibold">
						$4,415
					</span>
					<span className="featuredMoneyRate flex items-center ml-5">
						-1.4{" "}
						<ArrowDownwardIcon className="featuredIcon text-sm ml-2 text-red-500" />
					</span>
				</div>
				<span className="featuredSub text-slate-700">
					Compared to last month
				</span>
			</div>

			{/* Cost */}
			<div className="featuredItem flex-[1] mx-6 p-8 rounded-xl cursor-pointer shadow-xl shadow-slate-400 border-2 border-slate-300">
				<span className="featuredtitle text-2xl">Cost</span>
				<div className="featuredMoneyContainer my-3 flex items-center">
					<span className="featuredMoney text-3xl font-semibold">
						$2,225
					</span>
					<span className="featuredMoneyRate flex items-center ml-5">
						+2.4{" "}
						<ArrowUpwardIcon className="featuredIcon text-sm ml-2 text-emerald-500" />
					</span>
				</div>
				<span className="featuredSub text-slate-700">
					Compared to last month
				</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
