import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Callback from "./Callback";

export function MainLayout({ children, title }) {
  return (
    <div className="wrapper">
      <Head>
        <title>{title} | Alin</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="text-gray-700 mt-24">{children}</main>

      <Callback />

      <Footer />
    </div>
  );
}
