import React from 'react';
import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categoriesList = [
        {
            _id: 1,
            img: "https://www.16v.net/vw_wallpaper/bilder/microbus/hd/microbus_wallpaper_03.jpg",
            name: "Microbus",
            nameForBtn: "microbus"
        },
        {
            _id: 2,
            img: "https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390__340.jpg",
            name: "Luxury Car",
            nameForBtn: "luxury"
        },
        {
            _id: 3,
            img: "https://cdn.pixabay.com/photo/2015/09/01/06/56/amsterdam-916561__340.jpg",
            name: "Electric Car",
            nameForBtn: "electric"
        }
    ]

    return (
        <div>
            <h1 className='text-center pt-5 pb-2'>Choose your category to find your desired car!</h1>
            <Row>
                {categoriesList.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)}
            </Row>
        </div>
    );
};

export default Categories;