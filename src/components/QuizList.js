// Importación de dependencias necesarias
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Componente funcional que muestra una lista de quizzes
const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
// Hook useEffect para ejecutar código al montar el componente (comportamiento similar a componentDidMount)
    useEffect(() => {
        const fetchQuizzes = async () => {
            const res = await axios.get('https://backend-iw-65a4f5c49add.herokuapp.com/api/quizzes');
            setQuizzes(res.data);
        };
        fetchQuizzes();
    }, []);
    // Renderiza el contenido del componente
    return (
        <div>
            <h1>Quizzes</h1>
            {quizzes.map(quiz => (
                <div key={quiz._id}>
                    <Link to={`/quiz/${quiz._id}`}>
                        <h2>{quiz.title}</h2>
                    </Link>
                    <p>{quiz.description}</p>
                </div>
            ))}
        </div>
    );
};

export default QuizList;// Exporta el componente para poder usarlo en otras partes de la aplicación
