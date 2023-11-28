const WidgetLG = () => {
	// eslint-disable-next-line react/prop-types
	const Button = ({ type }) => {
		return (
			<button
				className={`widgetLgButton py-1 px-2 rounded-xl  ${
					type === "Approved"
						? "bg-green-300 text-green-600"
						: type === "Declined"
						? "bg-red-300 text-red-600"
						: "bg-blue-300 text-blue-600"
				}`}
			>
				{type}
			</button>
		);
	};

	return (
		<div className="widgetLg p-5 shadow-xl shadow-slate-400 border-2 border-slate-300 rounded-2xl">
			<h3 className="widgetLgTitle text-2xl font-semibold">
				Latest transactions
			</h3>
			<table className="widgetLgTable w-full border-separate border-spacing-4">
				<thead>
					<tr className="widgetLgTr">
						<th className="widgetLgTh text-left">Customer</th>
						<th className="widgetLgTh text-left">Date</th>
						<th className="widgetLgTh text-left">Amount</th>
						<th className="widgetLgTh text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="widgetLgTr">
						<td className="widgetLgUser flex items-center font-semibold">
							<img
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="widgetLgImg w-16 h-16 rounded-full object-cover mr-4"
							/>
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate font-light">2 Jun 2021</td>
						<td className="widgetLgAmount font-light">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Approved" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser flex items-center font-semibold">
							<img
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="widgetLgImg w-16 h-16 rounded-full object-cover mr-4"
							/>
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate font-light">2 Jun 2021</td>
						<td className="widgetLgAmount font-light">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Declined" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser flex items-center font-semibold">
							<img
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="widgetLgImg w-16 h-16 rounded-full object-cover mr-4"
							/>
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate font-light">2 Jun 2021</td>
						<td className="widgetLgAmount font-light">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Pending" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser flex items-center font-semibold">
							<img
								src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="widgetLgImg w-16 h-16 rounded-full object-cover mr-4"
							/>
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate font-light">2 Jun 2021</td>
						<td className="widgetLgAmount font-light">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Approved" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default WidgetLG;
