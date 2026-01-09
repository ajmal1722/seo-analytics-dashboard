import TitleCard from "../components/shared/TitleCard";
import KpiCardList from "../components/dashboard/KpiCard";
import ChartCard from "../components/dashboard/ChartCard";
import TrafficChart from "../components/dashboard/TrafficChart";
import KeywordPositionChart from "../components/dashboard/KeywordPositionChart";
import TopKeywordsTable from "../components/dashboard/TopKeywordsTable";
import { topKeywordsData } from "../data/dashboard";

const Dashboard: React.FC = () => {
    return (
        <div>
            <TitleCard
                title="Dashboard"
                description="Welcome back! Here's your SEO performance overview."
            />
            <KpiCardList />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <ChartCard title="Organic Traffic">
                    <TrafficChart />
                </ChartCard>

                <ChartCard title="Keyword Position Distribution">
                    <KeywordPositionChart />
                </ChartCard>
            </div>

            <div className="mt-8">
                <h3 className="font-semibold text-lg lg:text-xl leading-none tracking-tight mb-4">Top Keywords Performance</h3>
                <TopKeywordsTable keywords={topKeywordsData} />
            </div>
        </div>
    );
};

export default Dashboard;