import { Link } from "react-router-dom";
import { Chart } from "../../components";
import { productData } from "../../constant/data";
import PublishIcon from "@mui/icons-material/Publish";

const Product = () => {
	return (
		<div className="product flex-[4] p-5">
			<div className="productTitleContainer flex items-center justify-between">
				<h1 className="productTitle">Product</h1>
				<Link to="/newproduct">
					<button className="productAddButton w-24 p-2 bg-teal-500 text-white rounded-lg text-lg cursor-pointer">
						Create
					</button>
				</Link>
			</div>
			<div className="productTop flex">
				<div className="productTopLeft flex-[1]">
					<Chart
						data={productData}
						dataKey="Sales"
						title="Sales Performance"
					/>
				</div>
				<div className="productTopRight flex-[1] p-5 m-5 shadow-xl">
					<div className="productInfoTop flex items-center">
						<img
							src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="productInfoImg w-10 h-10 rounded-full object-cover mr-5"
						/>
						<span className="productName font-semibold">
							Apple Airpods
						</span>
					</div>
					<div className="productInfoBottom mt-3">
						<div className="productInfoItem w-40 flex justify-between">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue font-light">
								123
							</span>
						</div>
						<div className="productInfoItem w-40 flex justify-between">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue font-light">
								5123
							</span>
						</div>
						<div className="productInfoItem w-40 flex justify-between">
							<span className="productInfoKey">active:</span>
							<span className="productInfoValue font-light">
								yes
							</span>
						</div>
						<div className="productInfoItem w-40 flex justify-between">
							<span className="productInfoKey">in stock:</span>
							<span className="productInfoValue font-light">
								no
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom p-5 m-5 shadow-xl">
				<form className="productForm flex justify-between">
					<div className="productFormLeft flex flex-col">
						<label className="mb-2 text-slate-500">
							Product Name
						</label>
						<input
							type="text"
							placeholder="Apple AirPod"
							className="mb-3 p-2 border border-b-slate-500 rounded-lg"
						/>
						<label className="mb-2 text-slate-500">In Stock</label>
						<select name="inStock" id="idStock" className="mb-3">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label className="mb-2 text-slate-500">Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="productFormRight flex flex-col justify-around">
						<div className="productUpload flex items-center">
							<img
								src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt=""
								className="productUploadImg w-32 h-32 rounded-xl object-cover mr-5"
							/>
							<label htmlFor="file">
								<PublishIcon />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: "none" }}
							/>
						</div>
						<button className="productButton p-2 rounded-lg bg-blue-800 text-white font-semibold cursor-pointer">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;
