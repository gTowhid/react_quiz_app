import { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleChange, input }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            className={classes.answer}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        />
                    ) : (
                        <Checkbox
                            className={`${classes.answer} ${
                                // eslint-disable-next-line no-nested-ternary
                                option.correct
                                    ? classes.correct
                                    : option.checked
                                    ? classes.wrong
                                    : null
                            }`}
                            text={option.title}
                            defaultChecked={option.checked}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}
