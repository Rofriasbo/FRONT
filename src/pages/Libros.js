import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Libros.css';
import booksImage from '../assets/libros.jpg';

// Componente funcional principal
const Libros = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [libros, setLibros] = useState([]);
 // Lista de libros estáticos predeterminados
    const librosEstaticos = [
        {
            id: 1,
            titulo: "El poder del ahora",
            autor: "Eckhart Tolle",
            descripcion: "Una guía para el despertar espiritual y vivir en el momento presente.",
            categoria: "Desarrollo Personal",
            imagen: "https://oceano.mx/img/obra/media/8607.jpg",
            rating: 4.5
        },
        {
            id: 2,
            titulo: "Inteligencia emocional",
            autor: "Daniel Goleman",
            descripcion: "Explora por qué el coeficiente emocional puede ser más importante que el IQ.",
            categoria: "Psicología",
            imagen: "https://m.media-amazon.com/images/I/411bIc+eOEL._SY445_SX342_.jpg",
            rating: 4.7
        },
        {
            id: 3,
            titulo: "Los 7 hábitos de la gente altamente efectiva",
            autor: "Stephen R. Covey",
            descripcion: "Principios atemporales para el éxito personal y profesional.",
            categoria: "Desarrollo Personal",
            imagen: "https://m.media-amazon.com/images/I/51JQDV3YDEL._SY425_.jpg",
            rating: 4.6
        },
        {
            id: 4,
            titulo: "Mindset: La actitud del éxito",
            autor: "Carol S. Dweck",
            descripcion: "Cómo nuestra mentalidad afecta nuestro potencial de crecimiento.",
            categoria: "Psicología",
            imagen: "https://m.media-amazon.com/images/I/419nwdB9h+L._SY445_SX342_.jpg",
            rating: 4.4
        },
        {
            id: 5,
            titulo: "El hombre en busca de sentido",
            autor: "Viktor E. Frankl",
            descripcion: "Un relato conmovedor y profundo sobre la supervivencia y el sentido de la vida.",
            categoria: "Psicología Existencial",
            imagen: "https://m.media-amazon.com/images/I/61By+AvZOVL._SY425_.jpg",
            rating: 4.8
        },
        {
            id: 6,
            titulo: "Hábitos atómicos",
            autor: "James Clear",
            descripcion: "Pequeños cambios, resultados extraordinarios: un método fácil para crear buenos hábitos.",
            categoria: "Desarrollo Personal",
            imagen: "https://m.media-amazon.com/images/I/51C8AbIsLTL._SX342_SY445_.jpg",
            rating: 4.7
        },
        {
            id: 7,
            titulo: "Fluir (Flow)",
            autor: "Mihaly Csikszentmihalyi",
            descripcion: "La psicología de la experiencia óptima y cómo alcanzar un estado de flujo.",
            categoria: "Psicología Positiva",
            imagen: "https://m.media-amazon.com/images/I/311J7EUFaTL._SY445_SX342_.jpg",
            rating: 4.5
        },
        {
            id: 8,
            titulo: "El arte de amar",
            autor: "Erich Fromm",
            descripcion: "Un análisis profundo sobre el amor como arte que requiere conocimiento y esfuerzo.",
            categoria: "Psicología Social",
            imagen: "https://m.media-amazon.com/images/I/51O1ezdBmCL._SY445_SX342_.jpg",
            rating: 4.3
        }
    ];
 // Hook useEffect que se ejecuta al montar el componente
    useEffect(() => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        setLibros([...librosEstaticos, ...librosGuardados]);
    }, []);
 // Extrae todas las categorías únicas de los libros y añade "Todos" al inicio
    const categorias = ['Todos', ...new Set(libros.map(libro => libro.categoria))];
 // Filtra los libros dependiendo de la categoría seleccionada
    const librosFiltrados = categoriaSeleccionada === 'Todos'
        ? libros
        : libros.filter(libro => libro.categoria === categoriaSeleccionada);
    // Render del componente
    return (
        <div className="libros-container">
            {/* Aquí puedes añadir la hero-section e intro-section si las tienes */}

            <div className="libros-grid">
                {librosFiltrados.map(libro => (
                    <div className="libro-card" key={libro.id}>
                        <div className="libro-imagen-container">
                            <img src={libro.imagen} alt={libro.titulo} className="libro-imagen" />
                            <div className="libro-rating">
                                ⭐ {
                                    libro.calificacion && libro.calificacion !== "N/A"
                                        ? `${libro.calificacion}/5`
                                        : (libro.rating ? `${libro.rating}/5` : 'Sin calificación')
                                }
                            </div>
                        </div>
                        <div className="libro-info">
                            <span className="libro-categoria">{libro.categoria}</span>
                            <h3>{libro.titulo}</h3>
                            <p className="libro-autor">{libro.autor}</p>
                            <p className="libro-descripcion">{libro.descripcion}</p>
                            <Link to={`/libro/${libro.id}`} className="libro-link">Ver detalles →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Libros; // Exporta el componente para que pueda ser usado en otras partes de la app
