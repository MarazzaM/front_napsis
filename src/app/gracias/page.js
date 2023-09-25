
import Image from 'next/image';

export default function Form() {


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
        <div className="md:w-1/3 max-w-sm text-center">
          <h1 className='font-semibold text-2xl'>¡GRACIAS POR PARTICIPAR!</h1>
          <Image
            src="/home.png"
            width={800}
            height={600}
            alt="Picture of the author" priority
          />
          <h2 className='font-lg'>El sorteo se hace el <b>viernes 29/09</b> y

            anunciaremos el ganador por nuestras redes sociales</h2>
        </div>


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
