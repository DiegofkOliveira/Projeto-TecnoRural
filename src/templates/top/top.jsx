import { Link } from 'react-router-dom';
import { GiCube } from "react-icons/gi";
import { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Top() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="flex justify-center items-center p-2 text-white bg-green-600 w-full">
            <nav className="flex flex-row items-center justify-between w-full max-w-[1200px] px-4 py-2">
                {/* Logo */}
                <div className="flex flex-row gap-4 items-center">
                    <Link to="/">
                        <GiCube className="w-8 h-8 text-gray-600" />
                    </Link>
                    <Link to="/" className="text-xl font-gummy text-gray-600">Tech Agro</Link>
                </div>

                {/* Botão do Menu Sanduíche */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-600 text-3xl focus:outline-none"
                >
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>

                {/* Menu Aberto em Tela Cheia */}
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="fixed inset-0 w-full h-full bg-green-600 bg-opacity-95 flex flex-col justify-center items-center z-50 transition-all duration-300"
                    >
                        {/* Botão para Fechar */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-5 right-5 text-gray-200 text-4xl"
                        >
                            <AiOutlineClose />
                        </button>

                        {/* Links do Menu */}
                        <ul className="flex flex-col gap-8 text-2xl">
                            {["Home", "Sobre", "Laudo", "Projeto", "Contato"].map((item, index) => (
                                <li key={index} className="text-gray-200 hover:text-gray-400 transition duration-200">
                                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={handleLinkClick}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}

                {/* Menu Desktop */}
                <ul className="hidden lg:flex lg:space-x-6 lg:gap-6">
                    {["Home", "Sobre", "Laudo", "Projeto", "Contato"].map((item, index) => (
                        <li key={index} className="text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200">
                            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
}

export default Top;
