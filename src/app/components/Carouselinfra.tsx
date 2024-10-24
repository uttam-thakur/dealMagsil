"use client";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
// import {site1} from '../../../public/images/site/site1'
const items = [
  {
    src: "/images/site/site1.jpg",
    altText: "Site 1",
    caption: "Site 1 Caption",
  },
  {
    // src: "https://images.unsplash.com/photo-1577335029365-35029f68d093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZnJhc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    src: "/images/site/site2.jpg",
    altText: "Site 2",
    caption: "Site 2 Caption",
  },
  {
    // src: "https://images.unsplash.com/photo-1685708731554-c74f3679b2ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZnJhc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    src: "/images/site/site3.jpg",
    altText: "Site 3",
    caption: "Site 3 Caption",
  },
  {
    src: "/images/site/site4.jpg",
    altText: "Site 4",
    caption: "Site 4 Caption",
  },
  {
    src: "/images/site/site5.jpg",
    altText: "Site 5",
    caption: "Site 5 Caption",
  },
  {
    src: "/images/site/site6.jpg",
    altText: "Site 6",
    caption: "Site 6 Caption",
  },
  {
    src: "/images/site/site7.jpg",
    altText: "Site 7",
    caption: "Site 7 Caption",
  },
  {
    src: "/images/site/site8.jpg",
    altText: "Site 8",
    caption: "Site 8 Caption",
  },
];

const Carouselinfra = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            width: "800px",
            height: "400px",
            borderRadius: "10px",
            objectFit: "cover",
          }} // Setting image size
          className="d-block mx-auto" // Centers the image
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        InfraStructure
      </Typography>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className="custom-prev"
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className="custom-next"
        />
      </Carousel>

      <Typography gutterBottom variant="h6" component="div" marginTop="15px">
        Our state-of-the-art infrastructure comprises of a factory that is
        situated 5 km from Asansol Railway Station and 4 km from Asansol Bus
        Stand & just 5 minutes from Jubilee More, National Highway-2, West
        Bengal. The facilities are outfitted with the machinery and equipment to
        manufacture the products as per standards. The production capacity of
        the factory is well-suited to meet the ever-growing and changing needs
        of the industry. Our successful track record is the result of providing
        the best quality by making use of the finest raw materials for the
        standard and customized products. We have curing ponds to obtain the
        desired strength and durability of various products. In addition, we
        have facilities for carrying out various tests at laboratories that
        further assures the desired strength and longevity of the products .
      </Typography>
      <div
        style={{
          position: "relative",
          width: "90%",
          margin: "30px auto",
          height: "0.5px",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "gray",
            borderRadius: "50%",
            position: "absolute",
            top: "-5px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </>
  );
};

export default Carouselinfra;
