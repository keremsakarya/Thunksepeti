import { useSelector } from "react-redux"
import Container from "../components/Container"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"

const Card = () => {

    const cart = useSelector((store) => store.cart)
    console.log(cart)
    return (
        <Container>
            <h1 className="text-2xl font-bold">Sepet</h1>

            <div>
                {cart.isLoading ? (
                    <Loader />
                ) : cart.error ? (
                    <Error message={cart.error} />
                ) : cart.data.length === 0 ? (
                    <p className="flex items-center flex-col gap-3">
                        Sepette herhangi bir ürün yok
                        <Link
                            className="border shadow hover:bg-gray-200 rounded p-2"
                            to={"/"}
                        >
                            Ürün Ekle
                        </Link>
                    </p>
                ) : (
                    cart.data.map((item) => <CartItem key={item.id} item={item} />)
                )}
            </div>
        </Container>
    )
}

export default Card