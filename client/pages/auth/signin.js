import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dbRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async event => {
        event.preventDefault();

        dbRequest();
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign In</h1>
            <div className="form-group">
                <label htmlFor="email"></label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" className="form-control"
                />
            </div>
            {errors}
            <button className="btn btn-primary mt-2">Sign In</button>
        </form>
    );
}

export default Signup;