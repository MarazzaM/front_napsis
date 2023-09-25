"use client"
// pages/form.js
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneAsInt = parseInt(phone, 10);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phoneAsInt);

    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 200) {
        
        const data = await response.json();
        setMessage(data.message);
        router.push(process.env.NEXT_PUBLIC_URL + '/game/?email=' + email)
      } else {
        setMessage('Error saving person data.');
      }
    } catch (error) {
      console.error('Error saving person data:', error);
      setMessage('Error saving person data.');
    }
  };

  return (
    <div className='grid justify-center items-center h-screen'>
      {/* <h1>Save Person Data</h1> */}
      <section className="bg-white p-16 rounded flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
      <div className="md:w-1/3 max-w-sm">
      <Image
      src="/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
      <div className="md:w-1/3 max-w-sm">
        
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-800">Ingresa a participar</p>
        </div>
        <form onSubmit={handleSubmit}>

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded " type="text" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)}
            required />

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="phone" placeholder="Celular" value={phone} minLength="8" maxLength="20"
            onChange={(e) => setPhone(e.target.value)}
            required />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Entrar</button>
        </div>
        </form>

      </div>
      <p>{message}</p>

    </section>
      {/* <p>{message}</p> */}
      <Image
      src="/smartway.png"
      width={250}
      height={250}
      alt="Picture of the author" className='m-auto'
    />
    </div>
  );
}
