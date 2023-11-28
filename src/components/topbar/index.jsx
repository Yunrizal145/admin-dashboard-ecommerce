import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import profile from "../../assets/images/profile.jpg";

const Topbar = () => {
	return (
		<div className="w-full px-8 py-12 h-14 bg-white sticky top-0 z-50">
			<div className="h-full flex justify-between items-center ">
				<div className="topLeft">
					<span className="logo font-bold text-5xl text-indigo-900 cursor-pointer">
						Yunrizal
					</span>
				</div>
				<div className="topRight flex ">
					<div className="topbarIconContainer relative cursor-pointer mr-4 hover:text-[#558]">
						<NotificationsNoneIcon fontSize="large" />
						<span className="topIconBag absolute w-5 h-5 flex items-center justify-center -top-1 right-0 bg-red-500 text-white rounded-full ">
							2
						</span>
					</div>
					<div className="topbarIconContainer relative cursor-pointer mr-4 hover:text-[#558]">
						<LanguageIcon fontSize="large" />
					</div>
					<div className="topbarIconContainer relative cursor-pointer mr-4 hover:text-[#558]">
						<SettingsIcon fontSize="large" />
					</div>
					<img
						src={profile}
						alt=""
						className="topAvatar w-12 h-12 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
