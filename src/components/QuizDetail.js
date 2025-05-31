
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './QuizDetail.css';
import quizHeroImage from '../assets/quiz-bg.jpg'; // Asegúrate de tener esta imagen

const QuizDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [result, setResult] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const res = await axios.get(`https://backend-iw-65a4f5c49add.herokuapp.com/api/quizzes/${id}`);
                setQuiz(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching quiz:", err);
                setError("Error al cargar el quiz. Por favor intenta nuevamente.");
                setLoading(false);
            }
        };
        fetchQuiz();
    }, [id]);
