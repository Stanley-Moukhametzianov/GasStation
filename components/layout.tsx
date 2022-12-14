import Head from "next/head";
import { useEffect, useState } from "react";
import { LayoutProps } from "../@types";
import MoonIcon from "../public/moon.svg";
import SunIcon from "../public/sun.svg";
import GithubIcon from "../public/github.svg";

function Layout({ title, children }: LayoutProps) {
  const [isDarkmode, setIsDarkmode] = useState(true);

  const toggleDarkmode = (darkmode) => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      document.querySelector("html").style.backgroundColor =
        "rgba(31, 32, 33, 1)";
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("html").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
    }
    localStorage.setItem("theme", darkmode ? "dark" : "light");
    setIsDarkmode(darkmode);
  };

  useEffect(() => {
    toggleDarkmode(true);
  }, []);

  return (
    <div>
      <Head>
        <title>
          {title} {title ? " | " : ""} GasStation - Gas Price Estimator
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Polygon gas price forecast based on the last 500 transactions"
        ></meta>
        <meta name="image" content="https://polygas.org/meta-image.png"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta
          name="twitter:title"
          content="PolyGas - Gas Price Estimator"
        ></meta>
        <meta
          name="twitter:description"
          content="Polygon gas price forecast based on the last 500 transactions"
        ></meta>
        <meta
          name="twitter:image:src"
          content="https://polygas.org/meta-image.png"
        ></meta>
        <meta name="og:title" content="PolyGas - Gas Price Estimator"></meta>
        <meta
          name="og:description"
          content="Polygon gas price forecast based on the last 500 transactions"
        ></meta>
        <meta
          name="og:image"
          content="https://polygas.org/meta-image.png"
        ></meta>
        <meta name="og:url" content="https://polygas.org"></meta>
        <meta
          name="og:site_name"
          content="PolyGas - Gas Price Estimator"
        ></meta>
        <meta name="og:type" content="website"></meta>
        <meta
          name="keywords"
          content="gas,gasprice,polygon,polygas,price"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="14 days"></meta>
        <meta name="author" content="https://pufler.dev"></meta>
      </Head>
      <header className="p-4 mb-6 shadow-md bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark">
        <div className="flex justify-between max-w-4xl mx-auto">
          <div className="flex items-center">
            <img className="w-8" alt="logo" src="/logo.png"></img>
            <h1 className="ml-2 text-2xl font-bold md:text-3xl text-accentText">
              GasStation
            </h1>
            <h2 className="mt-1 ml-4 text-sm font-bold md:text-xl text-secondaryTextLight dark:text-secondaryTextDark">
              Polygon Gas Price Forecast
            </h2>
          </div>
          <div className="flex items-center">
            <GithubIcon
              className="transition-none fill-current ctursor-pointer text-primaryTextLight dark:text-primaryTextDark"
              onClick={() => window.open("https://github.com/Stanley-Moukhametzianov?tab=repositories")}
            />
            <div className="w-5"></div>
            {isDarkmode ? (
              <SunIcon
                className="cursor-pointer fill-current text-primaryTextDark"
                onClick={() => toggleDarkmode(!isDarkmode)}
              />
            ) : (
              <MoonIcon
                className="cursor-pointer fill-current text-primaryTextLight"
                onClick={() => toggleDarkmode(!isDarkmode)}
              />
            )}
          </div>
        </div>
      </header>
      <div className="container flex flex-col mx-auto overflow-hidden">
        <main className="flex flex-col flex-1">{children}</main>
      </div>
      <footer className="px-16 py-4 shadow-md bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark text-secondaryTextLight dark:text-secondaryTextDark">

      </footer>
    </div>
  );
}
export default Layout;
