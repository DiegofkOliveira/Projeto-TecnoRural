import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from '../../assets/Marca.png';

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
        <header className="fixed flex flex-col z-20 flex w-full h-32">
            <nav className="flex flex-row items-center justify-between backdrop-blur-[20px] shadow-lg shadow-custom border-none justify-between w-full h-24 rounded-xl px-4 lg:justify-evenly">
                {/* Logo */}
                <div className="flex flex-row gap-4 items-center">
                    <Link to="/">
                        <img className="w-20" src={Logo} alt="Logo da Empresa" />
                    </Link>
                </div>

                {/* Botão do Menu Sanduíche com Efeito */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-green-100 text-3xl focus:outline-none focus:transform focus:transition-transform duration-300"
                >
                    {menuOpen ? (
                        <AiOutlineClose className="rotate-90" /> // Roda 90° para formar um "X"
                    ) : (
                        <AiOutlineMenu className="rotate-0" /> // Retorna ao estado inicial (sanduíche)
                    )}
                </button>

                {/* Menu Aberto em Tela Cheia */}
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="fixed inset-0 w-screen h-screen bg-teal-900 bg-opacity-95 flex flex-col justify-center items-center z-50 transition-all duration-300"
                    >
                        {/* Botão para Fechar */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-8 right-3 text-white text-4xl"
                        >
                            <AiOutlineClose />
                        </button>

                        {/* Links do Menu */}
                        <ul className="flex flex-col gap-8 text-2xl">
                            {["Home", "Quem somos", "Laudo", "Projeto", "Contato"].map((item, index) => (
                                <li key={index} className="text-green-100 hover:text-gray-500 transition duration-200">
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
                    {["Quem somos", "Laudo", "Projeto", "Contato"].map((item, index) => (
                        <li key={index} className="text-xl font-gummy text-green-100 hover:text-gray-500 transition duration-200">
                            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Top;