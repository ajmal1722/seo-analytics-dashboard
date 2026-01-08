import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleTheme, getTheme } from "@/lib/theme";
import { useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getTheme());

    const isDark = theme === "dark";

    const handleToggle = () => {
        toggleTheme();
        setTheme(getTheme());
    };

    return (
        <Button
            variant="outline"
            className="flex w-full items-center gap-2 justify-start"
            onClick={handleToggle}
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
        </Button>
    );
}
