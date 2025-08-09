import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { use } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { Link, useNavigate } from "react-router";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, isloading } = use(AuthContext);
  const { logout } = useAuth();

  const navigate = useNavigate();

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

  const linkToRender = !isloading && user ? authLinks : guestLinks;

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes ",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await logout();
        if (result.success) {
          Swal.fire({
            title: "Successfully loged out",
            icon: "success",
          });
        } else {
          Swal.fire("Failed", "Failed to logout Try Again!!", "error");
        }
      }
    });
  };

  return (
    <section className="py-4 fixed top-0 w-full bg-white z-50 backdrop:blur-3xl">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              FoodEX
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {linkToRender.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link to={item.path}> {item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center gap-2">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      FoodEX
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {linkToRender.map((item, idx) => (
                    <Link to={item.path}>{item.name}</Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {!user ? (
                    <Button
                      variant="outline"
                      onClick={() => navigate("/login")}
                    >
                      Sign in
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={handleLogout}>
                      Logout
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
