import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import bubble from "../images/bubble.jfif";
import { Link } from "@reach/router";
import Selection from "../images/selection.png";
import Navbarr from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SortingAlgo from "../images/SortingAlgo.png";
import Pathfinding from "../images/PathFinding.png";
import Stack from "../images/Stack.png";
import Queue from "../images/Queue.png";
import Nqueen from "../images/Nqueen.png";
import Tree from "../images/Tree.png";
import Searching_algo from "../images/Searching_algo.png";

function Home() {
  return (
    <div className="home">
      <Navbarr />
      <div className="home_heading">
        <h1>Algorithm Visualization </h1>
      </div>
      <div className="card-list" style={{ backgroundColor: "#203239" }}>
        <Container style={{ marginTop: "20px" }}>
          {/*row 1 */}
          <Row className="justify-content-md-center">
            <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={SortingAlgo} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Sorting Algorithm
                  </Card.Title>
                  <Card.Text>
                    A Sorting Algorithm is used to rearrange a given array or
                    list elements according to a comparison operator on the
                    elements
                  </Card.Text>
                  <Button variant="primary">
                    <Link
                      to="/sorting-algorithm"
                      style={{ all: "unset", color: "white" }}
                    >
                      Visualize
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Pathfinding} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Pathfinding Algorithm
                    </Card.Title>
                    <Card.Text>
                      Path finding algorithms explore routes between nodes,
                      starting at one node and traversing through relationships
                      until the destination has been reached
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to="/pathfinding"
                        style={{ all: "unset", color: "white" }}
                      >
                        Visualize
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Col>

            <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Stack} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>Stack</Card.Title>
                  <Card.Text>
                    Stack is a linear data structure which follows a particular
                    order in which the operations are performed.
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/stack" style={{ all: "unset", color: "white" }}>
                      Visualize
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Queue} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>Queue</Card.Title>
                  <Card.Text>
                    Queue is an abstract data structure, somewhat similar to
                    Stacks. Unlike stacks, a queue is open at both its ends
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/queue" style={{ all: "unset", color: "white" }}>
                      Visualize
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/*Row 2 */}
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Nqueen} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      Nqueen (Backtracking){" "}
                    </Card.Title>
                    <Card.Text>
                      The N Queen is the problem of placing N chess queens on an
                      N??N chessboard so that no two queens attack each other
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to="/nqueen"
                        style={{ all: "unset", color: "white" }}
                      >
                        Visualize
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Tree} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>Tree</Card.Title>
                  <Card.Text>
                    A tree is a nonlinear data structure consisting of one node
                    called the root and zero or one or more subtrees.
                  </Card.Text>
                  <Button variant="primary">
                    <Link to="/tree" style={{ all: "unset", color: "white" }}>
                      Visualize
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="3" md="6" sm="12" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Searching_algo} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Searching Algorithm
                  </Card.Title>
                  <Card.Text>
                    Searching Algorithm are used to search an element in array.
                  </Card.Text>
                  <Button variant="primary">
                    <Link
                      to="/searching-algorithms"
                      style={{ all: "unset", color: "white" }}
                    >
                      Visualize
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h5
            style={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "10px",
              color: "#fff",
            }}
          >
            Made with <span style={{ color: "#ff0000" }}>???</span> by Jugal, Jay
            and Sanket
          </h5>
        </Container>
      </div>
    </div>
  );
}

export default Home;
