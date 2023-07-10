import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodies from "../../Assets/Foodies.png";
import tictac from "../../Assets/Tic-tac.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={foodies}
                            isBlog={false}
                            title="FoodiesHub"
                            description="Recipe App is a webpage that provides recipes from various chefs for various cuisines from across the world. It consists of a user-friendly UI that helps its users to navigate through the app without any difficulties and it also enhances the user's experience.
                This web app consists of various components such as the home page, the recipes page, and the settings page.
                The Home page consists of the About section, the top chef's section, the Recipes page consists of the previous searches section, and the recipes section.
                The Settings page allows the user to change the theme of the app, change the font size and color, and change the speed of the animation.
                Technologies Used: React Js, Saas"
                            ghLink="https://github.com/sarthak5101/FoodiesHub"
                            demoLink="https://foodies-hub.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tictac}
                            isBlog={false}
                            title="Tic-Tac-Toe"
                            description="The Tic Tac Toe Game Project is a classic, interactive game implementation designed to provide an engaging and entertaining experience for players of all ages. This project offers a digital adaptation of the wellknown
                Tic Tac Toe game, also known as Noughts and Crosses, with a user-friendly interface and intuitive gameplay mechanics.
                It is a totally responsive web app that makes it fun to play on all screen sizes.
                The project consists of the scoreboard indicating the scores of both X and Y by adding one point as the players win the match.
                Technologies Used: React, CSS, Javascript"
                            ghLink="https://github.com/sarthak5101/Tic-Tac-Toe"
                            demoLink="https://tic-tac-toe-phi-gilt.vercel.app/"
                        />
                    </Col>

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            ghLink="https://github.com/soumyajit4419/Editor.io"
                            demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Ai For Social Good"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                        // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                        // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                        />
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
