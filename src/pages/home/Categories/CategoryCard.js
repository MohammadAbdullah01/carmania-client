import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css'

const CategoryCard = ({ category, cars }) => {
    const navigate = useNavigate()

    const { name, img, nameForBtn } = category;
    return (
        <Col className='mt-2 category-card' sm={12} md={6} lg={4}>
            <Card className="bg-dark text-white">
                <Card.Img style={{ "width": "100%", "minHeight": "300px", "objectFit": "cover" }} src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <h1 className='text-center category-name py-2'>{name}</h1>
                    <button onClick={() => navigate(`/category/${nameForBtn}`)} className='show-all-btn'>Show All</button>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CategoryCard;