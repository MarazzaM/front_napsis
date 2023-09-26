// pages/api/saveUser.js
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';


export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const empresa = formData.get('empresa');
  const cantidad_empleados = formData.get('empleados');
  const industria = formData.get('industria');
  const conoce_napsis = formData.get('napsis');
  const tiene_recibo_digital =  formData.get('sueldo');
  const plataforma_empresa =  formData.get('digital');
  const sistema_integrado =  formData.get('integrado');
  const interes_legajo_digital =  formData.get('conocer');
  const informacion_napsis =  formData.get('informacion');

  try {
    // Check if a User with the same email already exists
    const existingUser = await prisma.User.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      // A User with the same email already exists
      return NextResponse.json({ message: 'Ya has participado, buena suerte!', data: existingUser });
    }

    // If no existing User, create a new one
    const createdUser = await prisma.User.create({
      data: {
        name,
        email,
        phone,
        empresa,
        cantidad_empleados,
        industria,
        conoce_napsis,
        tiene_recibo_digital,
        plataforma_empresa,
        sistema_integrado,
        interes_legajo_digital,
        informacion_napsis,
      },
    });

    return NextResponse.json({ message: 'Cargando...', data: createdUser });
  } catch (error) {
    console.error('Error saving User data:', error);
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 500 });
  }
}
