import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../ui/button";
import {
    Search,
    Grid,
    Link,
    FileText,
    CheckSquare
} from "lucide-react";

const navItems = [
    { title: "Dashboard", href: "/", icon: Grid },
    { title: "Backlink Manager", href: "/back-link-manager", icon: Link },
    { title: "Content Tasks", href: "/content-tasks", icon: FileText },
    { title: "Normal Tasks", href: "/normal-tasks", icon: CheckSquare },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="h-full w-68 border-r bg-background flex flex-col justify-between">
            <div>
                <div className="px-6 py-6 border-b flex items-center gap-2">
                    <Button className="bg-primary text-primary-foreground rounded-md">
                        <Search className="h-6 w-6" />
                    </Button>
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>

                <nav className="space-y-1 p-3">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                                cn(
                                    "block rounded-md px-3 py-3 text-sm transition-colors font-medium",
                                    "hover:bg-muted hover:text-foreground flex gap-2 items-center",
                                    isActive ? "bg-primary text-primary-foreground hover:bg-primary" : "text-muted-foreground"
                                )
                            }
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t">
                <ThemeToggle />

                <div className="bg-primary text-primary-foreground p-4 rounded-md mt-3">
                    <h3 className="text-sm font-semibold mb-2">
                        Need help?
                    </h3>
                    <p className="text-xs">
                        Check Our Documentation
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;