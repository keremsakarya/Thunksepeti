import { FaRegClock, FaArrowDown, FaStar } from "react-icons/fa"

const RestaurantDetail = ({ data }) => {
    return (
        <div className="flex gap-5">
            <img src={data.photo} className="w-[150px] max-md:w-[100px]" />
            <div>
                <p>
                    <span className="flex items-center gap-2">
                        <FaArrowDown /> min. {data.minPrice} ₺
                    </span>
                    <span className="flex items-center gap-2">
                        <FaRegClock />
                        {data.estimatedDelivery} dak.
                    </span>
                </p>

                <h1>{data.name}</h1>

                <p className="flex items-center gap-2">
                    <FaStar /> {data.rating}
                    <a
                        className="text-red-500 font-semibold p-1 hover:bg-red-100 transition rounded"
                        href="#"
                    >
                        Yorumları Gör
                    </a>
                </p>
            </div>
        </div>
    )
}

export default RestaurantDetail