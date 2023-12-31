import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    //return specific parms
    // const name = searchParams.get('name');
    // const instrument = searchParams.get('instrument');

    //return any parm sent
    const person = Object.fromEntries(searchParams.entries());

    return NextResponse.json({ person });
}