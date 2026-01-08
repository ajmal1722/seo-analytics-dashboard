import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import { Spinner } from "@/components/ui/spinner";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen w-full bg-background">
            {/* Desktop Sidebar - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block h-full">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col h-full overflow-hidden">
                {/* Mobile/Tablet Navbar - Visible on mobile < lg */}
                <div className="lg:hidden">
                    <Navbar />
                </div>

                <Suspense
                    fallback={
                        <div className="flex flex-1 items-center justify-center">
                            <Spinner />
                        </div>
                    }
                >
                    <main className="flex-1 overflow-y-auto p-5 lg:py-10 py-6">
                        <Outlet />
                    </main>
                </Suspense>
            </div>
        </div>
    );
};

export default DashboardLayout;