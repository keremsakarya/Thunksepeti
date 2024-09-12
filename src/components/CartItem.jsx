import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { deleteItem, updateItem } from "../redux/actions/basketAction"

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(updateItem(item.id, item.amount + 1))
    }

    const handleDecrease = () => {
        item.amount > 1
            ? dispatch(updateItem(item.id, item.amount - 1))
            : dispatch(deleteItem(item.id))
    }

    return (
        <div className="flex gap-4 border my-10 rounded-lg p-4">
            <img src={item.photo} alt={item.title} className="w-[115px] rounded-lg" />

            <div className="w-full flex flex-col justify-between">
                <h3>{item.title}</h3>
                <p>{item.restaurantName}</p>

                <div className="flex justify-between">
                    <p className="font-semibold">{item.price} ₺</p>

                    <div className="border rounded-xl text-lg">
                        <button onClick={handleDecrease} className="hover:bg-red-100 p-3 rounded-xl transition text-red-500">
                            {item.amount > 1 ? <FaMinus /> : <FaTrash />}
                        </button>
                        <span className="p-3">{item.amount}</span>
                        <button onClick={handleIncrease} className="hover:bg-red-100 p-3 rounded-xl transition text-red-500">
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem