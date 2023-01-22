import classes from '../styles/Form.module.css';

export default function Form({ children, className, ...rest }) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <form className={`${className} ${classes.form}`} action="#" {...rest}>
            {children}
        </form>
    );
}
