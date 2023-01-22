/* import { Link } from 'react-router-dom';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form'; */
import Illustration from '../Illustration';
/* import TextInput from '../TextInput'; */
import LoginForm from '../LoginForm';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration root="login" />
                <LoginForm />
                {/* <Form className={`${classes.login}`}>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter Password" icon="lock" />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">
                        Don&apost have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form> */}
            </div>
        </>
    );
}
