import React, {StyleSheet, useState} from 'react'
import { StackedCarousel } from 'adams-stacked-carousel'
import 'adams-stacked-carousel/dist/index.css';
const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  }
  
  return (
    <div className="main">

      <div>
        <h3>Carousel with images as children</h3>
        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}>
          <img key="img1" src="https://placeimg.com/640/480/arch" />
          <img key="img2" src="https://placeimg.com/640/480/tech" />
          <img key="img3" src="https://placeimg.com/640/480/nature" />
          <img key="img4" src="https://placeimg.com/640/480/animals" />
        </StackedCarousel>
      </div>

      <div>
        <h3>Carousel with complex elements as children</h3>
        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}
          containerClassName={"container"}
          cardClassName="card"
          leftButton={<span style={{  marginRight: '10px' }}>{"<"}</span>}
          rightButton={<span style={{  marginLeft: '10px' }}>{">"}</span>}>
          <div key={'child1'}>
            <h2>1 Card</h2>
          </div>
          <div key={'child2'}>
            <h2>2 Card</h2>
          </div>
          <div key={'child3'}>
            <h2>3 Card</h2>
          </div>
          <div key={'child4'}>
            <h2>4 Card</h2>
          </div>
          <div key={'child5'}>
            <h2>5 Card</h2>
          </div>
          <div key={'child6'}>
            <h2>6 Card</h2>
          </div>
          <div key={'child7'}>
            <h2>7 Card</h2>
          </div>
        </StackedCarousel>
      </div>
    </div>
  )
}

export default App
