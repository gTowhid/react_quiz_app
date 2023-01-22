import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            // datebase related works
            const db = getDatabase();
            const answerRef = ref(db, `answers/${videoID}/questions`);
            const answerQuery = query(answerRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                // request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => [...prevAnswers, ...Object.values(snapshot.val())]);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswers();
    }, [videoID]);

    return {
        loading,
        error,
        answers,
    };
}
