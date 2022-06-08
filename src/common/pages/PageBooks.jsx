import { useDispatch } from 'react-redux';
import {addItem, removeItem} from '../../features/cart/cartSlice';

export const PageBooks = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_books">
			<h2>Books</h2>
			<button onClick={() => dispatch(addItem())}>Add book</button>
			<button onClick={() => dispatch(removeItem())}>Remove book</button>
		</div>
	)
}