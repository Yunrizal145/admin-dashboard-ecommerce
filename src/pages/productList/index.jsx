import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../constant/data";
import { Link } from "react-router-dom";

const ProductList = () => {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "product",
			headerName: "Product",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem flex items-center">
						<img
							className="productListImg w-10 h-10 rounded-full object-cover mr-3"
							src={params.row.img}
							alt=""
						/>
						{params.row.name}
					</div>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "price",
			headerName: "Price",
			width: 160,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row.id}>
							<button className="productListEdit rounded-xl px-4 py-2 bg-[#3bb077] text-white cursor-pointer mr-5">
								Edit
							</button>
						</Link>
						<DeleteOutlineIcon
							className="productListDelete text-red-600 cursor-pointer"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="productList flex-[4]">
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
};

export default ProductList;
