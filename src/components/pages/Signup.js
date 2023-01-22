import Illustration from '../Illustration';
import SignupForm from '../SignupForm';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>

            <div className="column">
                <Illustration root="signup" />
                <SignupForm />
                {/* <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter Name" icon="person" />
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter Password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm Password" icon="lock_clock" />
                    <Checkbox text=" I agree to the Terms & Conditions" />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form> */}
            </div>
        </>
    );
}
