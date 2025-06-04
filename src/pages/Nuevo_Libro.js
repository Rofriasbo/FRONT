import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nuevo_Libro.css';

// Componente principal
const LibrosCrud = () => {
    const [operacion, setOperacion] = useState('Agregar');
    // Estado para almacenar los datos del nuevo libro o libro a editar/eliminar
    const [nuevoLibro, setNuevoLibro] = useState({
        imagen: '',
        titulo: '',
        autor: '',
        categoria: '',
        calificacion: '',
        descripcion: ''
    });
    // Estado para controlar el modal de confirmación, éxito o info
    const [modal, setModal] = useState({ mostrar: false, tipo: '', mensaje: '' });
    // Hook de navegación para redirigir a otra página
    const navigate = useNavigate();

    const handleOperacionChange = (e) => {
        setOperacion(e.target.value);
        setNuevoLibro({ imagen: '', titulo: '', autor: '', categoria: '', calificacion: '', descripcion: '' });
    };

     // Función auxiliar para buscar un libro por título
    const buscarLibro = (titulo) => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        return librosGuardados.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    };


// Ejecuta la búsqueda del libro para edición o eliminación
    const handleBuscar = () => {
        if (operacion === 'Editar' && nuevoLibro.titulo) {
            const libroEncontrado = buscarLibro(nuevoLibro.titulo);
            if (libroEncontrado) {
                setNuevoLibro(libroEncontrado);
            } else {
                setModal({ mostrar: true, tipo: 'info', mensaje: 'Libro no encontrado.' });
            }
        } else if (operacion === 'Eliminar' && nuevoLibro.titulo) {
            setModal({ mostrar: true, tipo: 'confirmarEliminar', mensaje: `¿Estás seguro de eliminar "${nuevoLibro.titulo}"?` });
        }
    };

     // Confirma y elimina un libro del localStorage
    const confirmarEliminar = () => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        const nuevosLibros = librosGuardados.filter(libro => libro.titulo.toLowerCase() !== nuevoLibro.titulo.toLowerCase());
        localStorage.setItem('libros', JSON.stringify(nuevosLibros));
        setModal({ mostrar: true, tipo: 'exito', mensaje: 'Libro eliminado exitosamente.' });
    };
// Maneja el envío del formulario tanto para agregar como editar
    const handleSubmit = () => {
        const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
        // ✅ Validar y formatear calificación antes de guardar
        let calificacionFinal = "N/A";
        if (nuevoLibro.calificacion && !isNaN(nuevoLibro.calificacion)) {
            const num = parseFloat(nuevoLibro.calificacion);
            if (num >= 0 && num <= 5) {
                calificacionFinal = num.toFixed(1);  // Redondear a 1 decimal
            }
        }

        if (operacion === 'Agregar') {
             // Verifica campos obligatorios
            if (nuevoLibro.titulo && nuevoLibro.imagen) {
                const nuevoLibroConID = { ...nuevoLibro, id: Date.now(), calificacion: calificacionFinal };
                localStorage.setItem('libros', JSON.stringify([...librosGuardados, nuevoLibroConID]));
                setModal({ mostrar: true, tipo: 'exito', mensaje: '¡Libro agregado exitosamente!' });
            } else {
                setModal({ mostrar: true, tipo: 'info', mensaje: 'Por favor, ingresa al menos título e imagen.' });
            }
        } else if (operacion === 'Editar') {
            // Actualiza el libro si ya existe
            const nuevosLibros = librosGuardados.map(libro =>
                libro.titulo.toLowerCase() === nuevoLibro.titulo.toLowerCase()
                    ? { ...nuevoLibro, calificacion: calificacionFinal }
                    : libro
            );
            localStorage.setItem('libros', JSON.stringify(nuevosLibros));
            setModal({ mostrar: true, tipo: 'exito', mensaje: '¡Libro actualizado exitosamente!' });
        }
    };
// Cierra el modal y redirige si fue exitoso
    const cerrarModal = () => {
        setModal({ mostrar: false, tipo: '', mensaje: '' });
        if (modal.tipo === 'exito') navigate('/libros');
    };

    return (
        <div className="libros-crud-container">
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
                        <label>Calificación (0 a 5)</label>
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
 {/* Modal de confirmación y mensajes */}
            {modal.mostrar && (
                <div className="modal-confirmacion">
                    <div className="modal-contenido">
                        <h2>{modal.mensaje}</h2>
                        {modal.tipo === 'confirmarEliminar' ? (
                            <>
                                <button onClick={confirmarEliminar}>Aceptar</button>
                                <button onClick={cerrarModal}>Cancelar</button>
                            </>
                        ) : (
                            <button onClick={cerrarModal}>Aceptar</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LibrosCrud;
