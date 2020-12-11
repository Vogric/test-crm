import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <aside className="bg-blue-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-9">
      <div>
        <Link href="/">
          <a className="text-gray-200 font-sans text-3xl font-semibold ">
            Clients CRM
          </a>
        </Link>

        <ul className="mt-3">
          <li className={pathname === "/" ? "bg-blue-900 p-2" : "p-2"}>
            <Link href="/">
              <a className="text-gray-200 text-xl">Clients</a>
            </Link>
          </li>
          <li className={pathname === "/orders" ? "bg-blue-900 p-2" : "p-2"}>
            <Link href="/orders">
              <a className="text-gray-200 text-xl">Orders</a>
            </Link>
          </li>
          <li className={pathname === "/products" ? "bg-blue-900 p-2" : "p-2"}>
            <Link href="/products">
              <a className="text-gray-200 text-xl">Products</a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
