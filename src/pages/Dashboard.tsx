import TitleCard from "../components/shared/TitleCard";
import KpiCardList from "../components/dashboard/KpiCard";

const Dashboard: React.FC = () => {
    return (
        <div>
            <TitleCard
                title="Dashboard"
                description="Welcome back! Here's your SEO performance overview."
            />
            <KpiCardList />
        </div>
    );
};

export default Dashboard;