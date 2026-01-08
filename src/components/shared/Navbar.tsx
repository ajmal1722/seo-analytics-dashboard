import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
    return (
        <header className="flex h-14 items-center justify-between border-b px-4 lg:hidden bg-background">
            {/* Left */}
            <span className="font-semibold">
                Dashboard
            </span>

            {/* Right */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="p-0 w-64">
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Navbar;
