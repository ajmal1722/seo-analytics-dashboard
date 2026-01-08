interface TitleCardProps {
    title: string;
    description: string;
    action?: React.ReactNode;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, description, action }) => {
    return (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
                    {title}
                </h1>
                <p className="text-sm lg:text-base text-muted-foreground">
                    {description}
                </p>
            </div>
            {action && <div>{action}</div>}
        </div>
    );
};

export default TitleCard;