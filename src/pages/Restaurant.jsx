import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/actions/productAction"
import { getRestaurants } from "../redux/actions/restaurantActions"
import Container from "../components/Container"
import Loader from "../components/Loader"
import Error from "../components/Error"
import ProductCard from "../components/ProductCard"
import { FaFireFlameCurved } from "react-icons/fa6"
import { useParams } from "react-router-dom"
import RestaurantDetail from "../components/RestaurantDetail"
import { addToBasket, updateItem } from "../redux/actions/basketAction"

const Restaurant = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const productState = useSelector((store) => store.products)
    const { isLoading, error, restaurants } = useSelector((store) => store.restaurants)

    useEffect(() => {
        dispatch(getRestaurants(id))
        dispatch(getProducts(id))
    }, [])

    const handleAdd = (item, found) => {
        found ? dispatch(updateItem(found.id, found.amount + 1)) : dispatch(addToBasket(item, restaurants))
    }

    return (
        <div>
            <div className="shadow">
                <Container>
                    <h1>{isLoading ? (
                        <Loader />
                    ) : (
                        !error && <RestaurantDetail data={restaurants} />
                    )}</h1>
                </Container>
            </div>

            <Container>
                <div>
                    <h2 className="flex items-center gap-2 text-2xl font-bold">
                        <FaFireFlameCurved className="text-red-500" />
                        Popüler
                    </h2>

                    <p className="text-gray-600">
                        Restoranın en çok tercih edilen ürünleri
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
                    {productState.isLoading ? (
                        <Loader />
                    ) : productState.error ? (
                        <Error message={error} />
                    ) : (
                        productState.products.map((item) => (
                            <ProductCard item={item} key={item.id} handleAdd={handleAdd} />
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Restaurant