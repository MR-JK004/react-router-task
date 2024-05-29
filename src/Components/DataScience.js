import React from 'react'
import { Row, Col, Card ,Button} from 'react-bootstrap';

function DataScience() {
    const ds_courses = [
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
    ];
    return <>
        <Row>
            {
                ds_courses.map((course, index) => {
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

export default DataScience