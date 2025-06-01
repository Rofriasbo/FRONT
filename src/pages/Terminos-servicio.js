import React from 'react';
import { Link } from 'react-router-dom';
import './Terminos-servicio.css';
import mentalHealthImage from '../assets/meditacion.jpg';  // Imagen para el banner

const TerminosCondiciones = () => {
    return (
        <div className="terminos-container">
            {/* Hero Section similar a SaludMental */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${mentalHealthImage}))`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '100px 20px',
                    color: 'white',
                    borderRadius: '10px',
                    marginBottom: '40px',
                }}
            >
                <h1>Términos y Condiciones de Uso</h1>
                <p>Última actualización: 1 de junio de 2025</p>
            </div>

            {/* Contenido */}
            <div className="contenido-section">
                <p>Bienvenido(a) a <strong>MindCare</strong>. Al acceder y utilizar nuestro sitio web (<a href="https://www.mindcare.com">www.mindcare.com</a>) y los servicios relacionados, usted acepta y se compromete a cumplir con los presentes Términos y Condiciones de Uso. Si no está de acuerdo, por favor no utilice nuestros servicios.</p>

                <h2>1. Uso del sitio</h2>
                <p>MindCare proporciona información y contenidos relacionados con la psicología, salud mental, bienestar emocional y desarrollo personal.</p>
                <p>El contenido es de carácter informativo y educativo, y <strong>no sustituye la atención médica o psicológica profesional</strong>.</p>
                <p>El uso del sitio es exclusivamente para mayores de edad o menores con consentimiento y supervisión de un tutor.</p>

                <h2>2. Propiedad intelectual</h2>
                <p>Todos los textos, gráficos, logotipos, imágenes, videos y demás contenidos son propiedad de <strong>MindCare</strong> o se utilizan con autorización.</p>
                <p>Se prohíbe copiar, reproducir, distribuir, modificar o crear trabajos derivados sin consentimiento previo y por escrito.</p>

                <h2>3. Responsabilidad</h2>
                <p>MindCare no asume responsabilidad por daños directos o indirectos derivados del uso del sitio o de la confianza en su contenido.</p>
                <p>No garantizamos que la información proporcionada esté libre de errores o sea completamente actualizada.</p>

                <h2>4. Enlaces externos</h2>
                <p>El sitio puede contener enlaces a sitios de terceros. Estos enlaces son proporcionados para su conveniencia, y MindCare no tiene control sobre el contenido o políticas de dichos sitios.</p>
                <p>No asumimos responsabilidad por el contenido, prácticas o políticas de privacidad de estos sitios externos.</p>

                <h2>5. Contacto</h2>
                <p>Si tiene preguntas sobre estos Términos y Condiciones, puede escribirnos a: <a href="mailto:contacto@mindcare.com">contacto@mindcare.com</a></p>
            </div>
        </div>
    );
};

export default TerminosCondiciones;
