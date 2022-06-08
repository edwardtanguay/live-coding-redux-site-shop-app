import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { items } = useSelector((state) => state.cart);
	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<p>There are {items.length} books.</p>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item.title}</li>;
				})}
			</ul>
		</div>
	);
};
