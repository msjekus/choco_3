import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './App.css';
import image from "./img/candy.jpg"
import image1 from "./img/candy_1.jpg"
import image2 from "./img/candy_2.webp"
import image3 from "./img/candy_3.jpg"


const App = () => {
  return (
    <div className="landing-page">
      {/* Навігація */}
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-brown">
            Yulichka <span className="text-pink">Choco Desserts</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Про нас</Nav.Link>
              <Nav.Link href="#products">Асортимент</Nav.Link>
              <Nav.Link href="#contact">Замовити</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero секція */}
      <header id="home" className="hero-section text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="display-3 fw-bold mb-4">Магія шоколаду у кожному шматочку</h1>
          <p className="lead mb-5">Ручна робота, преміальний шоколад та найсвіжіша продукти для ваших особливих моментів.</p>
          <Button variant="light" size="lg" className="rounded-pill px-5 py-3 fw-bold text-brown" href="#products">
            Переглянути меню
          </Button>
        </Container>
      </header>

      {/* Секція "Про нас" */}
      <section id="about" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="section-title">Чому обирають нас?</h2>
              <p className="mt-4">
                Ми створюємо не просто десерти, а емоції. Кожен набір <strong>yulichka_choco_desserts </strong>
                виготовляється вручну з використанням бельгійського шоколаду та добірних інгредієнтів.
              </p>
              <ul className="list-unstyled">
                <li>✨ Тільки натуральні інгредієнти</li>
                <li>🍓 Завжди свіжі ягоди</li>
                <li>🎁 Естетичне пакування</li>
                {/* <li>🚀 Швидка доставка по місту</li> */}
              </ul>
            </Col>
            <Col md={6}>
              <img
                src={image}
                alt="Chocolate process"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Секція Товарів */}
      <section id="products" className="py-5 bg-light">
        <Container>
          <h2 className="text-center section-title mb-5">Наші Десерти</h2>
          <Row>
            {products.map((product, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm product-card">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{product.title}</Card.Title>
                    <Card.Text className="text-muted">{product.description}</Card.Text>
                    <Button variant="outline-brown" href="https://www.instagram.com/yulichka_choco_desserts/">
                      Замовити в Direct
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Футер / Контакти */}
      <footer id="contact" className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="mb-4">Зробіть свій день солодшим</h2>
          <p className="mb-4">Для замовлення пишіть нам в Instagram або телефонуйте</p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Button variant="danger" className="rounded-pill px-4" href="https://www.instagram.com/yulichka_choco_desserts/">
              Instagram
            </Button>
            <Button variant="light" className="rounded-pill px-4">
              Telegram
            </Button>
          </div>
          <hr className="bg-secondary" />
          <p className="small mb-0">© 2026 yulichka_choco_desserts. Всі права захищені.</p>
        </Container>
      </footer>
    </div>
  );
};

const products = [
  {
    title: "Трюфель <<Черна смородина>>",
    description: "Набори від 6 до 12 цукерок у різних видах шоколаду з декором.",
    image: image1,

  },
  {
    title: "Шоколадні бокси",
    description: "Асорті цукерок ручної роботи з горіхами та сублімованими ягодами.",
    image: image2
  },
  {
    title: "Шоколадне яйце для найменших діток",
    description: "Шоколадне яйце для найменших діток. Верхній шар ароматного кераба, шар білого шоколаду, а всередині смаколики на вибір. Фігурка курчати або яєчко з кераба або молочного шоколаду, горішки, сушені фрукти. Справжній Кіндер Сюрприз, тільки набагато корисніший і смачніший. Молоток у комплекті!",
    image: image3
  }
];

export default App;