import React from 'react';
import './Libros.css'; 
import { Link } from 'react-router-dom';

const Libro1 = () => {
    return (
        <div className="libro-container">
            <h1>El poder del ahora</h1>
            <h2>Autor: Eckhart Tolle</h2>
            <div className="libro-imagen-container">
                <img src="https://oceano.mx/img/obra/media/8607.jpg" alt="El poder del ahora" className="libro-imagen" />
            </div>
            <div className="libro-detalles">
                <h3>Información del Libro</h3>
                <p><strong>Categoría:</strong> Espiritualidad, Autoayuda</p>
                <p><strong>Calificación:</strong> ⭐ 4.8/5</p>
                <p>Una guía espiritual sobre cómo alcanzar la iluminación viviendo en el presente.</p>
                <p>El poder del ahora profundiza en el poder transformador del momento presente. En este libro, Tolle nos enseña cómo liberarnos del sufrimiento causado por nuestra mente y cómo encontrar la paz a través de la plena conciencia del ahora.</p>
                <p>A través de su sabiduría espiritual, el autor explica cómo nuestra identidad está profundamente influenciada por pensamientos del pasado y preocupaciones sobre el futuro. Tolle nos invita a liberarnos de estos condicionamientos mentales y a descubrir la paz interna simplemente viviendo el momento presente.</p>
                <p>La obra es un manual práctico para aquellas personas que buscan transformar su vida al enfocarse en el ahora, dejando de lado el estrés y las emociones negativas, para finalmente encontrar la verdadera paz y bienestar.</p>
            </div>
            <div className="libro-autor">
                <h3>Información del Autor</h3>
                <p>Eckhart Tolle es un escritor y maestro espiritual de origen alemán, conocido principalmente por su obra El poder del ahora. Nació en Alemania y, a lo largo de su vida, experimentó una profunda transformación espiritual. En sus enseñanzas, Tolle resalta la importancia de vivir en el presente y cómo esto puede llevar a una profunda paz interior.</p>
                <p>Tolle ha escrito varios libros que han sido bestsellers, y su enfoque se centra en el despertar de la conciencia y la transformación de la mente. Actualmente, es considerado uno de los autores más influyentes en el ámbito de la espiritualidad contemporánea.</p>
            </div>
            <div className="comentarios">
                <h3>Comentarios</h3>
                <p>★ "Un libro transformador que realmente cambia tu perspectiva sobre la vida y el sufrimiento."</p>
                <p>★ "Excelente para quienes buscan encontrar paz y equilibrio en medio del caos."</p>
            </div>
                <a href="/libros" className="back-link">← Volver a lista de libros</a>
        </div>
    );
};

export default Libro1;
