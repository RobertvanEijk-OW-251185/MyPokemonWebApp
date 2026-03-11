import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DashCards() {
	return (
		<div class="dashcards">
			<div class="dashCard">
				<Card.Body>
					<div class="cardContent">
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</div>
					<div class="cardImage" src="../images/Charmander.svg"></div>
				</Card.Body>
			</div>
			<div class="dashCard">
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</div>
			<div class="dashCard">
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</div>
			<div class="dashCard">
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</div>
		</div>
	);
}

export default DashCards;
