import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <aside className="bg-gradient-to-b from-green-900 via-green-700 to-green-400 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-9">
      <div>
        <Image
          src="/public/images/ILTQq.png"
          alt="Logo"
          width={50}
          height={50}
        />
        <Link href="/">
          <a className="text-gray-200 font-sans text-4xl font-semibold m-r-6 m-l-6 ">
            WELCOME TO CMYK
          </a>
        </Link>
        <h1>png</h1>
      </div>
    </aside>
  );
};

export default Sidebar;
