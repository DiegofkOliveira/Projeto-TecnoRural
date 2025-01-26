import { Link } from 'react-router-dom';
import { GiCube } from "react-icons/gi";
import { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Top() {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu sanduíche
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

    // Fechar o menu quando um item for clicado
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="flex w-full justify-center items-center p-2 text-white bg-green-600">
            <nav className='flex flex-row w-[1200px] justify-between items-center px-4 py-2'>
                <div className='flex flex-row gap-4 items-center'>
                    <Link to="/">
                        <GiCube className='w-8 h-8 text-gray-600' />
                    </Link>
                    <Link to="/" className='text-xl font-gummy text-gray-600'>Tech Agro</Link>
                </div>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-600 text-3xl focus:outline-none"
                >
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                <ul
                    ref={menuRef}
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } absolute top-16 right-0 w-40 text-center bg-green-600 border-none lg:flex lg:static lg:w-auto lg:space-x-4 lg:gap-6`}
                >
                    <li className='text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200'>
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className='text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200'>
                        <Link to="/sobre" onClick={handleLinkClick}>Sobre</Link>
                    </li>
                    <li className='text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200'>
                        <Link to="/laudo" onClick={handleLinkClick}>Laudo</Link>
                    </li>
                    <li className='text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200'>
                        <Link to="/projeto" onClick={handleLinkClick}>Projeto</Link>
                    </li>
                    <li className='text-lg font-gummy text-gray-600 hover:text-gray-200 transition duration-200'>
                        <Link to="/contato" onClick={handleLinkClick}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Top;