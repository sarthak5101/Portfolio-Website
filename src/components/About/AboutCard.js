import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Sarthak Sharma </span>
                        from <span className="purple"> Lucknow, India.</span>
                        <br /> I recently graduated from SRM Institute of Science and Technologogy after pursuing my B.Tech degree in Computer Science.
                        <br />
                        Additionally, I am a self motivated person, a quick learner and a team player.
                        <br />
                        <br />
                        Apart from my technical skills, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Cricket
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Dancing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening to music
                        </li>
                    </ul>

                    {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
