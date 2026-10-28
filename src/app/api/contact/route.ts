
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 254 ||
        subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { message: "Un ou plusieurs champs sont trop longs." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Veuillez saisir une adresse e-mail valide." },
        { status: 400 },
      );
    }

    const contactRequest = await prisma.contactRequest.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(
      {
        message: "Votre demande a bien été envoyée.",
        id: contactRequest.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erreur API contact :", error);

    return NextResponse.json(
      { message: "Une erreur est survenue. Veuillez réessayer plus tard." },
      { status: 500 },
    );
  }
}
