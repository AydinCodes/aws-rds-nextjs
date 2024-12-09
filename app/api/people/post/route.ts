import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, email, address, occupation } = body;

    const person = await prisma.person.create({
      data: {
        name,
        age: parseInt(age),
        email,
        address,
        occupation,
      },
    });

    return NextResponse.json(person);
  } catch (err) {
    console.error('Failed to create person:', err);
    return NextResponse.json(
      { error: 'Failed to create person' },
      { status: 500 }
    );
  }
}