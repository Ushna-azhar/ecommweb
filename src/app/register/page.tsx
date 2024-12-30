'use client';
import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #4D0011, #FF5E5B)',
        color: '#F5F5DC',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // Light background for the form
          color: '#4D0011',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Elegant shadow effect
          padding: '40px 30px',
          width: '100%',
          maxWidth: '500px',
          fontFamily: "'Poppins', sans-serif", // Modern font for a clean look
          animation: 'fadeIn 0.8s ease-out', // Fade in effect
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '32px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#4D0011',
            textTransform: 'uppercase', // Adds a more elegant touch
          }}
        >
          Join Us
        </h1>
        
        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: '15px',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease-in-out', // Smooth transition on focus
          }}
          onFocus={(e) => e.target.style.borderColor = '#FF5E5B'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: '15px',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => e.target.style.borderColor = '#FF5E5B'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            marginBottom: '15px',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => e.target.style.borderColor = '#FF5E5B'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: '20px',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => e.target.style.borderColor = '#FF5E5B'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#4D0011',
            color: '#F5F5DC',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#FF5E5B')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4D0011')}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'} // Button press effect
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
