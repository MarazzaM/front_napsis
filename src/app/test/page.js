"use client"
// pages/form.js
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        const data = await response.json();
        setMessage(data.message);
        setName('');
        setEmail('');
      } else if (response.status === 200) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('Error saving person data.');
      }
    } catch (error) {
      console.error('Error saving person data:', error);
      setMessage('Error saving person data.');
    }
  };

  return (
    <div>
      <h1>Save Person Data</h1>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Smartway SRL</p>
        </div>
        <form onSubmit={handleSubmit}>

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Entrar</button>
        </div>
        </form>

      </div>
    </section>
      <p>{message}</p>
    </div>
  );
}
