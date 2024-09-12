import { IoWarningOutline } from "react-icons/io5"

const Error = ({ message, retry }) => {
    return (
        <div className="flex gap-4 my-10 bg-red-500 p-5 rounded text-white">
            <IoWarningOutline className="text-4xl" />
            <div className="font-semibold">
                <h2>Üzgünüz Bir Sorun Oluştu!</h2>
                <p>{message}</p>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={retry}
                    className="border px-5 py-2 font-semibold hover:bg-red-400 rounded"
                >
                    Tekrar Dene
                </button>
            </div>
        </div>
    )
}

export default Error