import type { Metadata } from "next";
import {Mulish} from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap"
});


export const metadata: Metadata = {
  title: "Jokenpô - Pedra, Papel e Tesoura",
  description: "Jogo de joken pô VS Computador, vai encarar?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.className} antialiased flex flex-col `}
      >
        {children}
      </body>
    </html>
  );
}
