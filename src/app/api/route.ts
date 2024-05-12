import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { name: "John Doe", age: 30 },
    { name: "Franklin", age: 20 },
  ];
  return NextResponse.json(data);
}
