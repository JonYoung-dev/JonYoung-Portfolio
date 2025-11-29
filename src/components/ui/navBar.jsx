"use client"
import {
   NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function MyNavBar() {
  return (
    <div className="z-50 w-full flex items-center justify-center p-2 sticky top-0 bg-white dark:bg-gray-500 shadow-md">
   <NavigationMenu className="sticky top-0" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">Test</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
                <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">the team</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Images</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">dog pics</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>New Project</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/projects/new">Add</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/contact-me">link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}