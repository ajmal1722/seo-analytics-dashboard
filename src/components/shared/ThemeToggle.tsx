import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleTheme, getTheme } from "@/lib/theme";
import { useState } from "react";

export default function ThemeToggle() {
    const [theme, setCurrentTheme] = useState(getTheme());

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                toggleTheme();
                setCurrentTheme(getTheme());
            }}
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
