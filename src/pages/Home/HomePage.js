import { Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const buttonHandler = () =>{
        navigate("/contact");
    }
  return (
    <div className="home_page">
      <Card>
        <Card.Body>
          <Card.Title>No contacts to show</Card.Title>
          <Card.Text>
            Please add your contact details by clicking on the below Create
            contact button.
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="warning" className="home_btn" onClick={buttonHandler}>
        Create Contact
      </Button>
    </div>
  );
};

export default HomePage;
