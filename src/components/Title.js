import React from 'react'
import './Title.css'
import { Button } from '@chakra-ui/react';
const Title = () => {
    const handleButtonClick = (title) => {
        // Your click logic here
        alert(`${title}`);
      };
    return (
        <div className="main-div">
          <div className="nested-heading">Title</div>
          <div className="nested-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, est a convallis efficitur, justo felis
              bibendum lacus, nec efficitur libero velit sit amet sapien. Ut vitae hendrerit risus. Quisque a bibendum
              purus. Proin aliquam eu felis vel scelerisque. Suspendisse potenti. Vestibulum varius orci a neque tempus, ac
              malesuada odio bibendum. Integer nec quam ut lectus hendrerit rhoncus. Sed vel suscipit nunc. Vestibulum
              cursus auctor dapibus. Vivamus eu sapien et nisl bibendum tincidunt vel in tortor.
            </p>
          </div>
          <div className="nested-button">
          <Button onClick={() => handleButtonClick("Read more")}>Read More</Button>
          </div>
        </div>
      );
    };

export default Title