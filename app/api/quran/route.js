import {NextResponse} from 'next/server'

export async function GET(request){
    const res = await fetch("https://equran.id/api/v2/surat")
    const hasil = await res.json()
    return NextResponse.json({hasil})
}