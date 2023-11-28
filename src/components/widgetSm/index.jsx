import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSM = () => {
	return (
		<div className="widgetSm p-6 mr-6 shadow-xl shadow-slate-400 border-2 border-slate-300 rounded-2xl">
			<span className="widgetSmTitle text-2xl font-semibold">
				New Join Members
			</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem flex items-center justify-between mt-6">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg w-16 h-16 rounded-full object-cover"
					/>
					<div className="widgetSmUser flex flex-col">
						<span className="widgetSmUsername font-semibold">
							Anna Keller
						</span>
						<span className="widgetSmUserTitle font-light">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
						<VisibilityIcon className="widgetSmIcon mr-3" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem flex items-center justify-between mt-6">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg w-16 h-16 rounded-full object-cover"
					/>
					<div className="widgetSmUser flex flex-col">
						<span className="widgetSmUsername font-semibold">
							Anna Keller
						</span>
						<span className="widgetSmUserTitle font-light">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
						<VisibilityIcon className="widgetSmIcon mr-3" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem flex items-center justify-between mt-6">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg w-16 h-16 rounded-full object-cover"
					/>
					<div className="widgetSmUser flex flex-col">
						<span className="widgetSmUsername font-semibold">
							Anna Keller
						</span>
						<span className="widgetSmUserTitle font-light">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
						<VisibilityIcon className="widgetSmIcon mr-3" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem flex items-center justify-between mt-6">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg w-16 h-16 rounded-full object-cover"
					/>
					<div className="widgetSmUser flex flex-col">
						<span className="widgetSmUsername font-semibold">
							Anna Keller
						</span>
						<span className="widgetSmUserTitle font-light">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
						<VisibilityIcon className="widgetSmIcon mr-3" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSM;
