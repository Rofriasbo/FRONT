import React from 'react';
import './Libros.css'; 
import { Link } from 'react-router-dom';

const Libro2 = () => {
    return (
        <div className="libro-container">
            <div className="libro-contenido">
                <div className="libro-imagen-container">
                    <img src="https://m.media-amazon.com/images/I/411bIc+eOEL._SY445_SX342_.jpg" alt="Inteligencia emocional" className="libro-imagen" />
                </div>
                <div className="libro-detalles">
                    <h1>Inteligencia Emocional</h1>
                    <h2>Autor: Daniel Goleman</h2>
                    <h3>Información del Libro</h3>
                    <p><strong>Categoría:</strong> Psicología</p>
                    <p><strong>Calificación:</strong> ⭐ 4.7/5</p>
                    <p>Un análisis profundo sobre la inteligencia emocional.</p>
                    <p>Inteligencia Emocional explica cómo reconocer, comprender y gestionar nuestras emociones y las de los demás. Presenta cinco componentes clave: autoconocimiento emocional, autorregulación, motivación, empatía y habilidades sociales.</p>
                    <p>A través de numerosos estudios y ejemplos, Goleman ilustra cómo la inteligencia emocional se puede aprender y desarrollar, y cómo impacta nuestras relaciones, bienestar y éxito.</p>
                    <h3>Información del Autor</h3>
                    <p>Daniel Goleman es un psicólogo y periodista estadounidense, conocido principalmente por su trabajo sobre la inteligencia emocional. Su carrera comenzó en el campo de la psicología, pero se hizo popular gracias a su libro Inteligencia Emocional, el cual ha sido traducido a más de 40 idiomas. Goleman ha trabajado en el campo de la psicología y la educación y ha sido director de la sección de Psicología en el New York Times.</p>
                </div>
            </div>
            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Este libro cambió mi forma de ver la vida y el trabajo en equipo."</p>
                <p>★ "Muy revelador, especialmente en cuanto a la importancia de la empatía y la autorregulación emocional."</p>
            </div>
            <a href="/libros" className="back-link">← Volver a lista de libros</a>
        </div>
    );
};

export default Libro2;
