import { vehicules } from '@/app/data/vehicules';
import { Vehicle } from '@/app/types/vehicule.types';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json<Vehicle[]>(vehicules);
}