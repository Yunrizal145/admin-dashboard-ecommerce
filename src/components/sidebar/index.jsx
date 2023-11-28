import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar flex-[1] h-[100vh] bg-slate-100 sticky top-[50px]">
			<div className="sidebarWrapper p-7 text-[#555]">
				{/* Dashboard */}
				<div className="sidebarMenu mb-4">
					<h3 className="sidebarTitle text-2xl text-slate-400">
						Dashboard
					</h3>
					<ul className="sidebarList p-2 text-lg">
						<Link to="/">
							<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
								<HomeIcon className="sidebarIcon mr-3" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<TimelineIcon className="sidebarIcon mr-3" />
							Analytics
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<TrendingUpIcon className="sidebarIcon mr-3" />
							Sales
						</li>
					</ul>
				</div>
				{/* Quick Menu */}
				<div className="sidebarMenu mb-4">
					<h3 className="sidebarTitle text-2xl text-slate-400">
						Quick Menu
					</h3>
					<ul className="sidebarList p-2 text-lg">
						<Link to="/user">
							<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
								<PermIdentityIcon className="sidebarIcon mr-3" />
								Users
							</li>
						</Link>
						<Link to="/productList">
							<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
								<StorefrontIcon className="sidebarIcon mr-3" />
								Products
							</li>
						</Link>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<AttachMoneyIcon className="sidebarIcon mr-3" />
							Transactions
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<BarChartIcon className="sidebarIcon mr-3" />
							Reports
						</li>
					</ul>
				</div>
				{/* Notifications */}
				<div className="sidebarMenu mb-4">
					<h3 className="sidebarTitle text-2xl text-slate-400">
						Notifications
					</h3>
					<ul className="sidebarList p-2 text-lg">
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<MailOutlineIcon className="sidebarIcon mr-3" />
							Mail
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<DynamicFeedIcon className="sidebarIcon mr-3" />
							Feedback
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<ChatBubbleOutlineIcon className="sidebarIcon mr-3" />
							Message
						</li>
					</ul>
				</div>
				{/* Staff */}
				<div className="sidebarMenu mb-4">
					<h3 className="sidebarTitle text-2xl text-slate-400">
						Staff
					</h3>
					<ul className="sidebarList p-2 text-lg">
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<WorkOutlineIcon className="sidebarIcon mr-3" />
							Manage
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<ViewTimelineIcon className="sidebarIcon mr-3" />
							Analytics
						</li>
						<li className="sidebarListItem p-2 cursor-pointer flex items-center rounded-xl  hover:bg-slate-200">
							<ReportIcon className="sidebarIcon mr-3" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
