import { useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
    const error = useRouteError() as Error;
    console.error(error);

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
            <h1 className="text-2xl font-semibold">
                Something went wrong
            </h1>

            <p className="max-w-md text-sm text-muted-foreground">
                An unexpected error occurred while loading this page.
                Please try again or return to the dashboard.
            </p>

            <div className="flex gap-3">
                <Button onClick={() => window.location.reload()}>
                    Reload
                </Button>

                <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/")}
                >
                    Go to Dashboard
                </Button>
            </div>
        </div>
    );
};

export default ErrorPage;
