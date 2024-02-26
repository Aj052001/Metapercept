// Classes.js

import React from 'react';

import data from './data.json';
import { CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Image, Card } from '@chakra-ui/react'

const Classes = () => {
    const handleButtonClick = (title) => {
        // Your click logic here
        alert(`Button clicked for ${title}`);
      };
    return (
        <SimpleGrid borderRadius={0} margin={10} spacing={8} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
          {data.map((item) => (
            <Card key={item.ID}>
              <CardHeader>
                <Image src={item.ImageUrl} />
              </CardHeader>
              <CardBody>
                <Heading size='md'>{item.Name}</Heading>
                <Text>{item.ShortDesc}</Text>
              </CardBody>
              <CardFooter>
              <Button onClick={() => handleButtonClick(item.title)}>View</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      );
};

export default Classes;
