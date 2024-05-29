import React from 'react'
import { Row, Col, Card ,Button} from 'react-bootstrap';

function AllCourses() {
    const all_courses = [
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
        {
            title: 'The Data Science Course: Complete Data Science Bootcamp 2024',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg',
            description: 'Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning',
        },
        {
            title: 'Complete A.I. & Machine Learning, Data Science Bootcamp',
            image: 'https://www.filepicker.io/api/file/Avbp4rniQfeCFdVzCfQs',
            description: 'Learn Data Science, Data Analysis, Machine Learning (Artificial Intelligence) and Python with Tensorflow, Pandas &amp; more!',
        },
        {
            title: 'Data Science: Supervised Machine Learning in Python',
            image: 'https://img-b.udemycdn.com/course/750x422/944014_b9e0.jpg',
            description: 'Full Guide to Implementing Classic Machine Learning Algorithms in Python and with Scikit-Learn',
        },
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
                all_courses.map((course, index) => {
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

export default AllCourses