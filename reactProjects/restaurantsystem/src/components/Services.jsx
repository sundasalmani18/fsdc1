import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Service(){
 
  // $('.owl-carousel').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   // autoplayTimeout:1000,
  //   responsive: {
  //     300: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   }
  // })

    return(
     

        // <!-- ===============================service section====================================== -->
  <div id="service">
    <div className="container section">
      <div className="row">
        <div className="owl-carousel owl-theme">
          <div className="servicecol">
            <div className="item  pt-3">
              <div className="service-item p-4">
                <i className="fa-solid fa-user-tie  icon fa-2x"></i>
                <h4 className="p-2">Master Chefs</h4>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="servicecol">
            <div className="item pt-3">
              <div className="service-item p-4">
                <i className="fa fa-utensils icon fa-2x"></i>
                <h4 className="p-2">Quality Food</h4>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="servicecol">
            <div className="item pt-3">
              <div className="service-item p-4">
                <i className="fa-solid fa-cart-shopping icon fa-2x"></i>
                <h4 className="p-2">Online Order</h4>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="servicecol">
            <div className="item pt-3">
              <div className="service-item p-4">
                <i className="fa fa-2x fa-headset icon"></i>
                <h4 className="p-2">24/7 Service</h4>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
//   <!-- ======================================service section end=================================== -->
    );


   
}