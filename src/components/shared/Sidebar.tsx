import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
    { title: "Dashboard", href: "/" },
    { title: "Content Tasks", href: "/content-tasks" },
    { title: "Backlink Manager", href: "/back-link-manager" },
    { title: "Normal Tasks", href: "/normal-tasks" },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="h-full w-64 border-r bg-background">
            <div className="px-6 py-4 text-lg font-semibold border-b">
                Dashboard
            </div>

            <nav className="space-y-1 p-3">
                {navItems.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) =>
                            cn(
                                "block rounded-md px-3 py-2 text-sm transition-colors font-medium",
                                "hover:bg-muted hover:text-foreground",
                                isActive ? "bg-muted text-foreground" : "text-muted-foreground"
                            )
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;