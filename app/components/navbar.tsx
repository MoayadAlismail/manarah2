"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
// import ModeToggle from "../mode-toggle"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image"; // Ensure to import Image
import { smoothScroll } from "@/utils/smoothScroll"; // Adjust the path as necessary

// ... existing code ...

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg text-black">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="font-alexandria"
                  onClick={() => smoothScroll("#features")}
                >
                  مميزات الدورة
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="font-alexandria"
                  onClick={() => smoothScroll("#testimonials")}
                >
                  آراء الطلاب
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  className="font-alexandria"
                  onClick={() => smoothScroll("#faq")}
                >
                  الأسئلة الشائعة
                </Button>
              </DialogClose>
              {/* <DialogClose asChild> */}
              {/* <Link href="/blog">
                                    <Button variant="outline" className="w-full font-alexandria">المدونة</Button>
                                </Link> */}
              {/* </DialogClose> */}
              {/* <ModeToggle /> */}
            </div>
          </SheetContent>
          {/* <div className="flex justify-end">
            <Image
              src="/qudrah_logo.png"
              alt="Logo"
              width={70}
              height={10}
              className="h-auto"
            />
          </div> */}
        </Dialog>

        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              {/* <h1 className="font-bold font-alexandria">فابريكا.</h1> */}
              <Image
                src="/qudrah_logo.png"
                alt="Logo"
                width={60}
                height={40}
                className="h-auto"
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href="/#faq">
            <Button variant="ghost" className="font-alexandria">
              الأسئلة الشائعة
            </Button>
          </Link>
          <Link href="/#testimonials">
            <Button variant="ghost" className="font-alexandria">
              آراء الطلاب
            </Button>
          </Link>
          <Link href="/#features">
            <Button variant="ghost" className="font-alexandria">
              مميزات الدورة
            </Button>
          </Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <nav>
      {/* ... existing nav items */}
      <Link href="/all-courses">جميع الدورات</Link>
      {/* ... other nav items */}
    </nav>
  );
};

export default Navbar;
