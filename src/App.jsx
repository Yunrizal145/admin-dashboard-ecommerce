import { Sidebar, Topbar } from "./components";
import {
	HomePage,
	NewProduct,
	NewUser,
	Product,
	User,
	UserList,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList";

function App() {
	return (
		<BrowserRouter>
			<Topbar />
			<div className="flex">
				<Sidebar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/user" element={<User />} />
					<Route path="/userList" element={<UserList />} />
					<Route path="/newUser" element={<NewUser />} />
					<Route path="/product" element={<Product />} />
					<Route path="/productList" element={<ProductList />} />
					<Route path="/newProduct" element={<NewProduct />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
