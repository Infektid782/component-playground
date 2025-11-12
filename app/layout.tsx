import type { Metadata } from "next";
import "./globals.css";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { FlaskRound, Home, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
  title: "Playground",
  description: "Component playground - generics exercise",
};

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Button",
    url: "/button",
    icon: MousePointerClick,
  },
  {
    title: "Example",
    url: "/example",
    icon: FlaskRound,
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="min-h-screen w-full p-2">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
