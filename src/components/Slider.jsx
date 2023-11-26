import React from 'react';
import { useSpring, animated } from 'react-spring';


const ParallaxImage = ({ speed, children }) => {
  const props = useSpring({
    transform: `translateY(${window.scrollY * speed}px)`,
    from: { transform: `translateY(0px)` },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Swiper = () => {
  return (
    <div className="swiper-container">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ParallaxImage speed={0.3}>
              <img className="img-fluid" src="images/1.jpg" alt="Image" />
            </ParallaxImage>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  Beautiful flower
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Pink color
                </h3>
                <a href="#" className="btn btn-light py-2 px-3">
                  Like
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <ParallaxImage speed={0.3}>
              <img className="img-fluid" src="images/2.jpg" alt="Image" />
            </ParallaxImage>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  Garden
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  It's a heaven
                </h3>
                <a href="#" className="btn btn-light py-2 px-3">
                  Like
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Swiper;
