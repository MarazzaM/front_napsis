// pages/api/saveUser.js
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';


export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');

  try {
    // Check if a User with the same email already exists
    const existingUser = await prisma.User.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      // A User with the same email already exists
      return NextResponse.json({ message: 'User with this email already exists', data: existingUser });
    }

    // If no existing User, create a new one
    const createdUser = await prisma.User.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return NextResponse.json({ message: 'User data saved successfully', data: createdUser });
  } catch (error) {
    console.error('Error saving User data:', error);
    return NextResponse.json({ message: 'Error saving User data' }, { status: 500 });
  }
}
