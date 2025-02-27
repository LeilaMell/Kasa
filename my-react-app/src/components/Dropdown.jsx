import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="dropdown">
            <div className="dropdown-header">
                <h2>{title}</h2>
                <i
                    className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                ></i>
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : "close"}`}>
                {Array.isArray(content) ? (
                <ul>
                    {content.map((item, id) => (
                    <li key={id}>{item}</li>
                    ))}
                </ul>
                ) : (
                <p>{content}</p>
                )}
            </div>
            
      </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Dropdown;
