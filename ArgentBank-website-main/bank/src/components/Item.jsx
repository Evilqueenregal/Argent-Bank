import React from "react";
import '../styles/main.css';

/* Fonction de composant qui renvoie les éléments de la page d'accueil */
function Item ({ image, descriptionImage, title, description }) {
    return (
            <div className="feature-item">
                <img src={image} alt={descriptionImage} className="feature-item-icon"/>
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
    )
}

export default Item