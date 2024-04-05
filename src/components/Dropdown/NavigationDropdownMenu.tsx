"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electronics",
    href: "/category/electronics",
    description:
      "Elevate your tech game with cutting-edge electronics that seamlessly blend innovation and style.",
  },
  {
    title: "Gaming Consoles",
    href: "/category/console",
    description:
      "Immerse yourself in the ultimate gaming experience with our top-tier consoles, delivering unparalleled performance and graphics.",
  },
  {
    title: "Computers",
    href: "/category/computers",
    description:
      "Unleash the power of productivity with our high-performance computers designed to meet all your computing needs.",
  },
  {
    title: "Accessories",
    href: "/category/accessories",
    description:
      "Explore a world of accessories that complement your devices, ensuring convenience and enhancing functionality.",
  },
  {
    title: "Headphones",
    href: "/category/headphones",
    description:
      "Dive into a realm of crystal-clear sound with our curated selection of headphones that redefine audio excellence.",
  },
  {
    title: "Mobile Phones",
    href: "/category/mobile-phones",
    description:
      "Stay connected and up-to-date with the latest mobile phones featuring advanced technology and sleek designs.",
  },
]
// home, all demos, pages, categories, blog
export function NavigationMenuComp() {
  return (
    <NavigationMenu className="h-[40px]">
      <NavigationMenuList>
        <NavigationMenuItem className="h-full ">
          <NavigationMenuTrigger className="h-full font-medium bg-transparent">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent className="text-sm">
            <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-sm font-medium">
                      Sage Warehouse
                    </div>
                    <p className="leading-tight text-muted-foreground">
                      "Indulge in a seamless shopping experience with our
                      beautifully designed e-commerce app, where every detail is
                      crafted for your convenience. Discover a world where
                      buying whatever you want is effortless, thanks to our
                      user-friendly interface and intuitive features. Shop
                      confidently with secure transactions, and elevate your
                      online shopping journey with us." Built With Next.js
                      Tailwind CSS, Shadcn UI.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Shadcn UI and Tailwind CSS.
              </ListItem> */}
              {/* <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem> */}
              {/* <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" h-full font-medium bg-transparent">
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-sm">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-none">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-none`}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} h-full bg-transparent bg-none`}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
          <div className=" font-medium leading-none">{title}</div>
          <p className="line-clamp-2  leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
