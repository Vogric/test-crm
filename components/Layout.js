import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>CRM - Client Administration</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossorigin="anonymous"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      {pathname === "/login" || pathname === "/signin" ? (
        <div className="bg-blue-900 min-h-screen flex flex-column justify-center">
          <div>{children}</div>
        </div>
      ) : (
        <div className="bg-gray-300 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-2">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
