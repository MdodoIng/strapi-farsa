import "styles/globals.css";
import { Rubik } from "next/font/google";
import Layout from "components/layout/Layout";
import Image from "next/image";
import head_texture from "public/textures/head texture.webp";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Menu app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={rubik.style}>
      <body
        className={` bg-pepperTexture bg-contain relative flex items-start justify-center flex-col w-full`}
      >
        <Image
          src={head_texture}
          alt="texture"
          fill
          loading="eager"
          className="absolute top-0 w-full max-h-[300px] object-cover object-[0_25%] -z-10"
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
