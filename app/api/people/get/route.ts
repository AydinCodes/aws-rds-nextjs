import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const people = await prisma.person.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(people);
  } catch (err) {
    console.error('Failed to fetch people:', err);
    return NextResponse.json(
      { error: 'Failed to fetch people' },
      { status: 500 }
    );
  }
}