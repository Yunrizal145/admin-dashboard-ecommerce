const NewUser = () => {
	return (
		<div className="newUser flex-[4]">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm flex flex-wrap">
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Username
					</label>
					<input
						type="text"
						placeholder="john"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Full Name
					</label>
					<input
						type="text"
						placeholder="John Smith"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">Email</label>
					<input
						type="email"
						placeholder="john@gmail.com"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Password
					</label>
					<input
						type="password"
						placeholder="password"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">Phone</label>
					<input
						type="text"
						placeholder="+1 123 456 78"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Address
					</label>
					<input
						type="text"
						placeholder="New York | USA"
						className="h-5 p-3 border border-slate-500 rounded-lg "
					/>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Gender
					</label>
					<div className="newUserGender">
						<input
							className="mt-3"
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<label
							htmlFor="male"
							className="m-3 text-lg text-[#555]"
						>
							Male
						</label>
						<input
							className="mt-3"
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<label
							htmlFor="female"
							className="m-3 text-lg text-[#555]"
						>
							Female
						</label>
						<input
							className="mt-3"
							type="radio"
							name="gender"
							id="other"
							value="other"
						/>
						<label
							htmlFor="other"
							className="m-3 text-lg text-[#555]"
						>
							Other
						</label>
					</div>
				</div>
				<div className="newUserItem w-[400px] flex flex-col mt-3 mr-5 ">
					<label className="mb-3 text-sm font-semibold ">
						Active
					</label>
					<select
						className="newUserSelect h-10 rounded-xl"
						name="active"
						id="active"
					>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="newUserButton w-52 bg-blue-900 text-white px-4 py-2 font-semibold rounded-xl mt-8 cursor-pointer">
					Create
				</button>
			</form>
		</div>
	);
};

export default NewUser;
