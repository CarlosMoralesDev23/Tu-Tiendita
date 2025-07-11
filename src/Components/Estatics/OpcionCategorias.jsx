import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Estatics/OpcionCategorias.css";

const OpcionCategorias = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { name: "Balones", path: "/category/balones" },
        { name: "Zapatos", path: "/category/zapatos" },
        { name: "Remeras", path: "/category/remeras" },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategoryClick = (path) => {
        navigate(path);
        setIsDropdownOpen(false);
    };

    return (
        <li
            className="nav-item has-dropdown"
            onClick={toggleDropdown}
            onMouseEnter={() =>
                window.innerWidth > 768 && setIsDropdownOpen(true)
            }
            onMouseLeave={() =>
                window.innerWidth > 768 && setIsDropdownOpen(false)
            }
        >
            <span className="dropdown-toggle">Categorias</span>
            {isDropdownOpen && (
                <ul className="dropdown-menu">
                    {categories.map((cat) => (
                        <li
                            key={cat.name}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCategoryClick(cat.path);
                            }}
                        >
                            {cat.name}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default OpcionCategorias;
