import React, { useState } from 'react';
import { User } from '../types/User';
import { createUser, getUser } from '../api/user';
import classNames from 'classnames';
import { useUser } from '../hooks/useUser';

const Auth: React.FC = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    getUser(email)
      .then(response => {
        if (!response || response.length === 0) {
          throw new Error('error');
        }

        setUser(response[0]);
      })
      .catch(() => {
        setIsRegistration(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const newUser: Pick<User, 'name' | 'email' | 'phone' | 'username'> = {
      name: userName,
      email: email,
      phone: null,
      username: userName,
    };

    createUser(newUser)
      .then(response => {
        if (!response) {
          throw new Error('error');
        }

        setUser(response);
        setIsRegistration(false);
      })
      .catch(() => {
        setUserName('');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isRegistration) {
    return (
      <form className="box mt-5" onSubmit={handleRegistration}>
        <h1 className="title is-3">You need to register</h1>
        <div className="field">
          <label className="label" htmlFor="user-email">
            Email
          </label>
          <div className="control has-icons-left">
            <input
              type="email"
              id="user-email"
              className="input"
              placeholder="Enter your email"
              required
              value={email}
              disabled
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="user-name">
            Your Name
          </label>
          <div className="control has-icons-left">
            <input
              type="text"
              id="user-name"
              className="input"
              placeholder="Enter your name"
              required
              minLength={4}
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <button
            type="submit"
            className={classNames('button', 'is-primary', {
              'is-loading': isLoading,
            })}
          >
            Register
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className="box mt-5" onSubmit={handleSubmit}>
      <h1 className="title is-3">Log in to open todos</h1>
      <div className="field">
        <label className="label" htmlFor="user-email">
          Email
        </label>
        <div className="control has-icons-left">
          <input
            type="email"
            id="user-email"
            className="input"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <button
          type="submit"
          className={classNames('button', 'is-primary', {
            'is-loading': isLoading,
          })}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Auth;
