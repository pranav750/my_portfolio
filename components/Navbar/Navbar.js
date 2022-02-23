import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="flex justify-between px-20 py-6">
          <div className="flex">
            <h1 className="font-semibold text-md">Pranav Pandey</h1>
          </div>
          <div className="flex">
            <ul className="flex">
              <li className="px-4 py-2 mr-8 hover:bg-black hover:text-white hover:rounded hover:cursor-pointer">
                Projects
              </li>
              <li className="px-4 py-2 mr-8 hover:bg-black hover:text-white hover:rounded hover:cursor-pointer">
                Acheivements
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-white hover:rounded hover:cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
