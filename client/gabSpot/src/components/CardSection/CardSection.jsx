import Card from "../Card/Card";
import "./CardSection.css";
function CardSection() {
    const cards = [
        {
            authorImg:
                "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
            authorName: "John Doe",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati corrupti amet id minus. Repellendus, porro dignissimos!",
            contentImg:
                "https://img.freepik.com/free-photo/dubai-city-landscape_1409-6484.jpg",
            likes: 56,
            comments: 4,
        },
    ];
    return (
        <div className="card-section">
            <div className="card-container">
                {cards.map((card) => (
                    <Card card={card} />
                ))}
            </div>
        </div>
    );
}
export default CardSection;
