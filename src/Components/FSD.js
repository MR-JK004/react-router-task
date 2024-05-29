import React from 'react'
import { Row, Col, Card ,Button} from 'react-bootstrap';


function FSD() {
    const fsd_courses = [
        {
            title: 'The Full Stack Web Development Bootcamp (Frontend & Backend)',
            image: 'https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg',
            description: 'Full Stack Web Development Bootcamp (HTML, CSS, JavaScript,jQuery, Web Templates, PHP, MySQL,MySQLi, with Source Code)',
        },
        {
            title: 'The Complete 2024 Web Development Bootcamp',
            image: 'https://www.skilliency.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_11712328838.jpg',
            description: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
        },
        {
            title: 'The Full Stack Web Development Bootcamp 2024 - MERN STACK',
            image: 'https://img-c.udemycdn.com/course/750x422/4505104_8592_8.jpg',
            description: 'Fullstack web development MERN STACK, ChatGPT, Node/Express, React, Mongodb, Javascript, HTML/CSS, build 9+ projects',
        },
    ];
    return <>
        <Row>
            {
                fsd_courses.map((course, index) => {
                    return <Col md={4} key={index} className="mb-4">
                        <Card className='h-100 custom-card'>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>{course.description}</Card.Text>
                            </Card.Body>
                            <Button className='w-50 mx-auto mb-4 btn-success'>Buy Course</Button>
                        </Card>
                    </Col>
                })
            }
        </Row>
    </>
}

export default FSD