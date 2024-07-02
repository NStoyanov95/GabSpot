import "./Card.css";
function Card({ card }) {
    return (
        <div className="card">
            <header className="card-header">
                <div className="author-img">
                    <img src={card.authorImg} />
                </div>
                <div className="author-name">
                    <p>{card.authorName}</p>
                </div>
            </header>
            <div className="description">
                <p>{card.description}</p>
            </div>
            <div className="content-image">
                <img src={card.contentImg} />
            </div>
            <div className="likes-comments-container">
                <p>Likes: {card.likes}</p>
                <p>Comments: {card.comments}</p>
            </div>
            <footer className="card-footer">
                <button>
                    <i className="fas fa-heart"></i>
                </button>
                <button>
                    <i className="fas fa-comment"></i>
                </button>
            </footer>
        </div>
    );
}
export default Card;
