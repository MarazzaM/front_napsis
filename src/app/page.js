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
  const [empresa, setEmpresa] = useState('');
  const [empleados, setEmpleados] = useState('');
  const [industria, setIndustria] = useState('');
  const [napsis, setNapsis] = useState('');
  const [sueldo, setSueldo] = useState('');
  const [digital, setDigital] = useState('');
  const [integrado, setIntegrado] = useState('');
  const [conocer, setConocer] = useState('');
  const [informacion, setInformacion] = useState('');

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
    <div className='grid justify-center items-center min-h-screen'>
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
          <p className="mx-4 mb-0 text-center font-semibold text-slate-800">Sorteo Napsis</p>
        </div>
        <form onSubmit={handleSubmit}>

        <label class="block text-gray-700 text-sm font-bold mb-2" for="Empresa">
        Empresa
      </label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="Empresa" value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required />
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Nombre">
        Nombre y Apellido
      </label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="Nombre" value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
        Email
      </label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="email" placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Celular">
                    Celular
      </label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="phone" placeholder="Celular" value={phone} minLength="8" maxLength="20"
            onChange={(e) => setPhone(e.target.value)}
            required />
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Celular">
          Cantidad de empleados
      </label>
<input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="empleados" 
            value={empleados}
            onChange={(e) => setEmpleados(e.target.value)}
            required/>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="industria">
          A que industria pertenece
      </label>
<input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="industria" 
            value={industria}
            onChange={(e) => setIndustria(e.target.value)}
            required/>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="napsis">
          ¿Conocen Napsis?
      </label>
<select
    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
    value={napsis}
    onChange={(e) => setNapsis(e.target.value)}
    required
  >
    <option value="Si">Si</option>
    <option value="No">No</option>
    {/* Add more options as needed */}
  </select>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="sueldo">
          ¿En tu empresa tienen recibo de sueldo digital? 
      </label>
  <select
    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
    value={sueldo}
    onChange={(e) => setSueldo(e.target.value)}
    required
  >
    <option value="Si">Si</option>
    <option value="No">No</option>
    {/* Add more options as needed */}
  </select>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="digital">
  ¿Cual de estas plataformas digitales tienen en tu empresa?
</label>
  <select
    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
    value={digital}
    onChange={(e) => setDigital(e.target.value)}
    required
  >
    <option value="Elearning">Elearning</option>
    <option value="Legajo Digital">Legajo Digital</option>
    <option value="Encuesta de Clima">Encuesta de Clima</option>
    <option value="Evaluación de Desempeño">Evaluación de Desempeño</option>
    <option value="otro">Otro</option>
    {/* Add more options as needed */}
  </select>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="integrado">
  ¿Es un sistema integrado o son distintos?
</label>
<input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="integrado" 
            value={integrado}
            onChange={(e) => setIntegrado(e.target.value)}
            required/>  

<label class="block text-gray-700 text-sm font-bold mb-2" for="conocer">
¿Tienen interés de conocer el legajo digital?
</label>
<input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="conocer" 
            value={conocer}
            onChange={(e) => setConocer(e.target.value)}
            required/>  
<label class="block text-gray-700 text-sm font-bold mb-2" for="informacion">
¿Quieren recibir información de Napsis?
</label>
<select
    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
    value={informacion}
    onChange={(e) => setInformacion(e.target.value)}
    required
  >
    <option value="Si">Si</option>
    <option value="No">No</option>
  </select>


        <div className="text-center md:text-left">
          <button className="mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Entrar</button>
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
