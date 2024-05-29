import React from 'react'
import { Row, Col, Card ,Button} from 'react-bootstrap';

function CyberSecurity() {
    const cs_courses = [
        {
            title: 'The Complete Certified in Cybersecurity (CC) course',
            image: 'https://media.licdn.com/dms/image/D5612AQGCLlLMl0atlg/article-cover_image-shrink_720_1280/0/1700584259771?e=2147483647&v=beta&t=s0XjCXxEtCNtnJqQYM7XMQsuvRPKhn8S_EcPqXVe75w',
            description: 'Start your Cyber security career today! Take the Complete Certified in Cybersecurity (CC) beginners course ISC2 - 2024',
        },
        {
            title: 'Cyber Security: From Beginner to Expert (2024)',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*lzlupRBDNB1inuL6Y-gEoA.png',
            description: 'Cyber Security made easy for absolute beginners - learn from an industry expert with PhD',
        },
        {
            title: 'The Complete Cyber Security Course : Hackers Exposed!',
            image: 'https://img-b.udemycdn.com/course/480x270/614772_233b_9.jpg',
            description: 'Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC',
        },
    ];
    return <>
        <Row>
            {
                cs_courses.map((course, index) => {
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

export default CyberSecurity