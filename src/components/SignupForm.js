import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();
        // do validation
        if (password !== confirmPassword) {
            return setError('Passwords do not match!');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to create an account!');
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-bind
        <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
            <TextInput
                required
                type="text"
                placeholder="Enter Name"
                icon="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                required
                type="text"
                placeholder="Enter Email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                required
                type="password"
                placeholder="Enter Password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                required
                type="password"
                placeholder="Confirm Password"
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
                required
                text=" I agree to the Terms & Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />
            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}
