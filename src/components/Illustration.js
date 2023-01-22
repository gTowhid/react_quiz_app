import loginImage from '../assets/login.svg';
import signupImage from '../assets/signup.svg';
import classes from '../styles/Illustration.module.css';

export default function Illustration({ root }) {
    let image;
    if (root === 'signup') {
        image = signupImage;
    } else if (root === 'login') {
        image = loginImage;
    }
    return (
        <div className={classes.illustration}>
            <img src={image} alt="Signup/Login" />
        </div>
    );
}
