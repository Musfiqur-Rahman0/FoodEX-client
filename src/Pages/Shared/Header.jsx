import { Button } from "@/components/ui/button";
import { AuthContext } from "@/Context/AuthContext";
import useAuth from "@/Hooks/useAuth";
import { navigation } from "@/lib/utils";
import React, { use, useState } from "react";
import { BiX } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import { motion } from "motion/react";
import Swal from "sweetalert2";

const authLinks = [
  { name: "Home", path: "/" },
  { name: "Fridge", path: "/fridge" },
  { name: "Add Food", path: "/add-food" },
  { name: "My Items", path: "/my-items" },
];

const guestLinks = [
  { name: "Home", path: "/" },
  { name: "Fridge", path: "/fridge" },
  { name: "Log in", path: "/login" },
  { name: "Register", path: "/signup" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { logout } = useAuth();
  const { user, isloading } = use(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes ",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Successfully loged out",
          icon: "success",
        });
        setIsHovered(false);
      }
    });
  };

  const linkToRender = !isloading && user ? authLinks : guestLinks;
  return (
    <nav className="bg-background  fixed top-0 z-20 w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div
              onClick={handleToggle}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset cursor-pointer"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <BiX
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="text-foreground text-4xl font-bold">
                FoodEX
              </Link>
            </div>
          </div>

          {/* destop nevigation menu */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center gap-5">
              {linkToRender.map(({ name, path }) => (
                <NavLink
                  to={path}
                  key={name}
                  onClick={() => setSelectedPage(name)}
                  className="relative"
                >
                  {name}
                  {name === selectedPage && (
                    <motion.div
                      className="h-1 w-full rounded-xl bg-primary absolute -bottom-1"
                      layoutId="underline"
                    />
                  )}
                </NavLink>
              ))}
              {user && user?.email && (
                <div
                  onClick={() => setIsHovered(!isHovered)}
                  className=" cursor-pointer w-10 h-10 overflow-hidden rounded-full"
                >
                  <img
                    src={user?.photoURL}
                    alt={user?.photoURL}
                    title={user?.displayName}
                  />
                </div>
              )}
              {isHovered && (
                <div className=" text-white bg-slate-500 absolute -bottom-36 right-0 z-10 p-8 rounded-lg flex items-center justify-center gap-3 flex-col">
                  <p className="text-xl font-bold ">{user?.displayName}</p>
                  <button
                    onClick={handleLogout}
                    className=" bg-white cursor-pointer text-black px-5 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* <div className="ml-3 flex items-center space-x-2"> */}
          {/* <ModeToggle /> */}
          {/* </div> */}
        </div>
      </div>
      {/* mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {linkToRender.map(({ name, path }) => (
              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                key={name}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-gray-900 text-white"
                      : " hover:bg-gray-700 hover:text-white"
                  } block rounded-md px-3 py-2 text-base font-medium`
                }
              >
                {name}
              </NavLink>
            ))}
            {user && (
              <Button variant={"outline"} onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
