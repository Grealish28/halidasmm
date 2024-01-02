import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseConfig from '../firebaseConfig';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [items, setItems] = useState([]);

  const handleLogin = () => {
    if (username === 'admin' && password === 'halidasmm2023') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  useEffect(() => {
    if (authenticated) {
      const fetchData = async () => {
        const formDataRef = ref(database, 'formData');
        const unsubscribe = onValue(formDataRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const itemsArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setItems(itemsArray);
          } else {
            setItems([]);
          }
        });
        return () => unsubscribe();
      };

      fetchData();
    }
    // eslint-disable-next-line
  }, [authenticated, database]);
  return (
    <div className="container mt-5">
      {authenticated ? (
        <div>
          <h2 className="mb-4">Admin Panel - List of Items</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
          <ul className="list-group mt-3">
            {items.map((item) => (
              <li key={item.id} className="list-group-item">
                <strong>Name:</strong> {item.name} <br />
                <strong>Phone Number:</strong> {item.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="mb-4">Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
