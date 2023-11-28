const NewProduct = () => {
	return (
		<div className="newProduct flex-[4]">
			<h1 className="addProductTitle">New Product</h1>
			<form className="addProductForm mt-3">
				<div className="addProductItem w-64 flex flex-col mb-3">
					<label className="text-slate-500 font-semiboldmb-3">
						Image
					</label>
					<input className="p-3" type="file" id="file" />
				</div>
				<div className="addProductItem w-64 flex flex-col mb-3">
					<label className="text-slate-500 font-semiboldmb-3">
						Name
					</label>
					<input
						className="p-3"
						type="text"
						placeholder="Apple Airpods"
					/>
				</div>
				<div className="addProductItem w-64 flex flex-col mb-3">
					<label className="text-slate-500 font-semiboldmb-3">
						Stock
					</label>
					<input className="p-3" type="text" placeholder="123" />
				</div>
				<div className="addProductItem w-64 flex flex-col mb-3">
					<label className="text-slate-500 font-semiboldmb-3">
						Active
					</label>
					<select className="p-3" name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="addProductButton mt-3 px-4 py-2 rounded-xl bg-blue-900 text-white font-semibold cursor-pointer">
					Create
				</button>
			</form>
		</div>
	);
};

export default NewProduct;
