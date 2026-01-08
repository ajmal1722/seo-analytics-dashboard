interface TitleCardProps {
    title: string;
    description: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, description }) => {
    return (
        <div className="mb-8 space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
                {title}
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground">
                {description}
            </p>
        </div>
    );
};

export default TitleCard;