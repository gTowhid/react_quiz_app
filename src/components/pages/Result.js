import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';

export default function Result() {
    const { id } = useParams();
    const location = useLocation();
    const { state } = location;
    const { qna } = state;

    const { loading, error, answers } = useAnswers(id);

    function calculate() {
        let score = 0;

        answers.forEach((question, index1) => {
            const correctIndices = [];
            const checkedIndices = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctIndices.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndices.push(index2);
                    // eslint-disable-next-line no-param-reassign
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndices, checkedIndices)) {
                score += 5;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an Error!</div>}

            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}