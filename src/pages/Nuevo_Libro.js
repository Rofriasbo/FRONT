import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nuevo_Libro.css';

const LibrosCrud = () => {
    const [operacion, setOperacion] = useState('Agregar');
    const [nuevoLibro, setNuevoLibro] = useState({
        imagen: '',
        titulo: '',
        autor: '',
        categoria: '',
        calificacion: '',
        descripcion: ''
    });
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const navigate = useNavigate();

    const handleOperacionChange = (e) => {
        setOperacion(e.target.value);
        setNuevoLibro({ imagen: '', titulo: '', autor: '', categoria: '', calificacion: '', descripcion: '' });
    };

    const buscarLibro = (titulo) => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        return librosGuardados.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    };

    const handleBuscar = () => {
        if (operacion === 'Editar' && nuevoLibro.titulo) {
            const libroEncontrado = buscarLibro(nuevoLibro.titulo);
            if (libroEncontrado) {
                setNuevoLibro(libroEncontrado);
            } else {
                alert('Libro no encontrado');
            }
        } else if (operacion === 'Eliminar' && nuevoLibro.titulo) {
            const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
            const nuevosLibros = librosGuardados.filter(libro => libro.titulo.toLowerCase() !== nuevoLibro.titulo.toLowerCase());
            localStorage.setItem('libros', JSON.stringify(nuevosLibros));
            alert('Libro eliminado exitosamente');
            navigate('/libros');
        }
    };

    const handleSubmit = () => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        if (operacion === 'Agregar') {
            if (nuevoLibro.titulo && nuevoLibro.imagen) {
                const nuevoLibroConID = { ...nuevoLibro, id: Date.now() };
                localStorage.setItem('libros', JSON.stringify([...librosGuardados, nuevoLibroConID]));
                setMostrarConfirmacion(true);
            } else {
                alert('Por favor, ingresa al menos título e imagen.');
            }
        } else if (operacion === 'Editar') {
            const nuevosLibros = librosGuardados.map(libro => 
                libro.titulo.toLowerCase() === nuevoLibro.titulo.toLowerCase() ? nuevoLibro : libro
            );
            localStorage.setItem('libros', JSON.stringify(nuevosLibros));
            alert('Libro actualizado exitosamente');
            navigate('/libros');
        }
    };

    const confirmar = () => {
        setMostrarConfirmacion(false);
        navigate('/libros');
    };

    return (
        <div className="libros-crud-container">
            <h1>Gestión de Libros</h1>
            <div className="nuevo-libro-form">
                <label>Operación:</label>
                <select value={operacion} onChange={handleOperacionChange}>
                    <option>Agregar</option>
                    <option>Editar</option>
                    <option>Eliminar</option>
                </select>

                <label>Título</label>
                <input type="text" value={nuevoLibro.titulo} onChange={e => setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })} />

                {operacion !== 'Eliminar' && (
                    <>
                        <label>URL Imagen</label>
                        <input type="text" value={nuevoLibro.imagen} onChange={e => setNuevoLibro({ ...nuevoLibro, imagen: e.target.value })} />
                        {nuevoLibro.imagen && (
                            <div className="preview-imagen">
                                <img src={nuevoLibro.imagen} alt="Previsualización" />
                            </div>
                        )}
                        <label>Autor</label>
                        <input type="text" value={nuevoLibro.autor} onChange={e => setNuevoLibro({ ...nuevoLibro, autor: e.target.value })} />

                        <label>Categoría</label>
                        <input type="text" value={nuevoLibro.categoria} onChange={e => setNuevoLibro({ ...nuevoLibro, categoria: e.target.value })} />

                        <label>Calificación</label>
                        <input type="text" value={nuevoLibro.calificacion} onChange={e => setNuevoLibro({ ...nuevoLibro, calificacion: e.target.value })} />

                        <label>Descripción</label>
                        <textarea value={nuevoLibro.descripcion} onChange={e => setNuevoLibro({ ...nuevoLibro, descripcion: e.target.value })}></textarea>
                    </>
                )}

                {operacion === 'Agregar' || operacion === 'Editar' ? (
                    <>
                        {operacion === 'Editar' && <button onClick={handleBuscar}>Buscar Libro</button>}
                        <button onClick={handleSubmit}>{operacion === 'Agregar' ? 'Agregar Libro' : 'Guardar Cambios'}</button>
                    </>
                ) : (
                    <button onClick={handleBuscar}>Eliminar Libro</button>
                )}
            </div>

            {mostrarConfirmacion && (
                <div className="modal-confirmacion">
                    <div className="modal-contenido">
                        <h2>¡Libro agregado exitosamente!</h2>
                        <button onClick={confirmar}>Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LibrosCrud;
