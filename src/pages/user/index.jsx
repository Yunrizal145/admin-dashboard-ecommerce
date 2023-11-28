import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

const User = () => {
	return (
		<div className="user flex-[4] p-6">
			<div className="userTitleContainer flex items-center justify-between">
				<h1 className="userTitle text-2xl font-bold underline">
					Edit User
				</h1>
				<Link to="/newUser">
					<button className="userAddButton w-24 p-2 bg-teal-500 rounded-lg cursor-pointer text-white text-lg">
						Create
					</button>
				</Link>
			</div>
			<div className="userContainer flex mt-6">
				<div className="userShow flex-[1] p-6 shadow-xl">
					<div className="userShowTop flex items-center">
						<img
							src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="userShowImg w-12 h-12 rounded-full object-cover"
						/>
						<div className="userShowTopTitle flex flex-col ml-6">
							<span className="userShowUsername font-semibold">
								Anna Becker
							</span>
							<span className="userShowUserTitle font-light">
								Software Engineer
							</span>
						</div>
					</div>
					<div className="userShowBottom mt-6">
						<span className="userShowTitle text-lg font-semibold">
							Account Details
						</span>
						<div className="userShowInfo flex items-center my-6 text-[#444]">
							<PermIdentityIcon className="userShowIcon text-lg" />
							<span className="userShowInfoTitle ml-4">
								annabeck99
							</span>
						</div>
						<div className="userShowInfo flex items-center my-6 text-[#444]">
							<CalendarTodayIcon className="userShowIcon" />
							<span className="userShowInfoTitle ml-4">
								10.12.1999
							</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo flex items-center my-6 text-[#444]">
							<PhoneAndroidIcon className="userShowIcon" />
							<span className="userShowInfoTitle ml-4">
								+1 123 456 67
							</span>
						</div>
						<div className="userShowInfo flex items-center my-6 text-[#444]">
							<MailOutlineIcon className="userShowIcon" />
							<span className="userShowInfoTitle ml-4">
								annabeck99@gmail.com
							</span>
						</div>
						<div className="userShowInfo flex items-center my-6 text-[#444]">
							<LocationSearchingIcon className="userShowIcon" />
							<span className="userShowInfoTitle ml-4">
								New York | USA
							</span>
						</div>
					</div>
				</div>
				<div className="userUpdate flex-[2] p-6 shadow-xl ml-6">
					<span className="userUpdateTitle text-2xl font-semibold">
						Edit
					</span>
					<form className="userUpdateForm flex justify-between mt-6">
						<div className="userUpdateLeft">
							<div className="userUpdateItem flex flex-col mt-3">
								<label className="mb-2 text-sm">Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput w-72 h-10 border-b-slate-400"
								/>
							</div>
							<div className="userUpdateItem flex flex-col mt-3">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Anna Becker"
									className="userUpdateInput w-72 h-10 border-b-slate-400"
								/>
							</div>
							<div className="userUpdateItem flex flex-col mt-3">
								<label>Email</label>
								<input
									type="text"
									placeholder="annabeck99@gmail.com"
									className="userUpdateInput w-72 h-10 border-b-slate-400"
								/>
							</div>
							<div className="userUpdateItem flex flex-col mt-3">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+1 123 456 67"
									className="userUpdateInput w-72 h-10 border-b-slate-400"
								/>
							</div>
							<div className="userUpdateItem flex flex-col mt-3">
								<label>Address</label>
								<input
									type="text"
									placeholder="New York | USA"
									className="userUpdateInput w-72 h-10 border-b-slate-400"
								/>
							</div>
						</div>
						<div className="userUpdateRight flex flex-col justify-between">
							<div className="userUpdateUpload flex items-center">
								<img
									className="userUpdateImg w-28 h-28 rounded-xl object-cover mr-6"
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
								/>
								<label htmlFor="file">
									<PublishIcon className="userUpdateIcon cursor-pointer" />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
								/>
							</div>
							<button className="userUpdateButton rounded-lg p-2 cursor-pointer bg-blue-900 text-white font-semibold">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
