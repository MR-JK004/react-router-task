import React from 'react'
import { Row, Col, Card ,Button} from 'react-bootstrap';

function Career() {
    const career_courses = [
        {
            title: 'The Complete Career Coaching Course - Career Development',
            image: 'https://careercoaching.training/wp-content/uploads/Foundation-in-Career-Development-Practice-5-1.png',
            description: 'Career Coaching - Career Development - Career Change - Be A Career Coach for Others and Yourself - Interview Skills',
        },
        {
            title: 'Career Coaching Certification in Career Development Coaching',
            image: 'https://media.licdn.com/dms/image/C5612AQEy-yP7NKHSug/article-cover_image-shrink_600_2000/0/1520224256997?e=2147483647&v=beta&t=GNqtH-SSrHCJe6uXVtqx0L0w_x1-92QyDfkL_jkDvNk',
            description: 'Career Coaching Practitioner Course Graduates Ready-To-Work Professionals in Holistic Career Development Career Coaching',
        },
        {
            title: 'Discover Your Career Path & Land a Job You Love in 12 Weeks',
            image: 'https://reupeducation.com/wp-content/uploads/2022/08/FindYourCareerPath-03.png',
            description: 'Innovative Career Path Discovery, Job Search, LinkedIn Profile, Resume, Networking, & Interviewing Strategies',
        },
    ];
    return <>
        <Row>
            {
                career_courses.map((course, index) => {
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

export default Career