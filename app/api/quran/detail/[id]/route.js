import {NextResponse} from 'next/server'

export async function GET(request, {params}){
    const res = await fetch(`https://equran.id/api/v2/surat/${params.id}`)
    const hasil = await res.json()
    console.log(hasil)
    return NextResponse.json({hasil})
}