import React from 'react'
import'./Header.css'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Image } from '@chakra-ui/react'
const Header = () => {
    const handleButtonClick = (title) => {
        // Your click logic here
        alert(` ${title}`);
      };
    return (
        <div className="navbar">
          <div className="left-section">Title</div>
          <div className="right-section">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <Button onClick={() => handleButtonClick("Clicked on Button")}>Button</Button>
          </div>
        </div>
      );
    };

export default Header