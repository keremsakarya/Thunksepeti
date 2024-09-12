import { Link } from "react-router-dom";
import Container from "./Container";
import { BsBasket3 } from "react-icons/bs";

const Header = () => {
    return (
        <header className="shadow">
            <Container designs={"flex justify-between items-center"}>
                <Link to={"/"} className="text-red-500 font-[900] text-2xl font-mono">
                    Yemeksepeti
                </Link>

                <div className="flex items-center gap-4">
                    <button className="border border-red-500 px-3 py-1 transition text-red-500 rounded hover:bg-red-500 hover:text-white">
                        Giriş Yap
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:brightness-75 transition">
                        Kayıt Ol
                    </button>

                    <Link
                        to={"/cart"}
                        className="hover:bg-red-500 hover:bg-opacity-15 p-3 rounded-full transition"
                    >
                        <BsBasket3 className="text-red-500 text-xl" />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;