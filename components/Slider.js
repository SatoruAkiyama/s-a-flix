import SlickSlider from "react-slick";

const Slider = ({ elements }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          speed: 1000,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 800,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          speed: 300,
        },
      },
    ],
  };
  return <SlickSlider {...settings}>{elements}</SlickSlider>;
};

export default Slider;
