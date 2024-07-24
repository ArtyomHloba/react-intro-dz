import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";

const slides = [
  {
    title: "BMW M3",
    description: "BMW M3 in white color",
    src: "https://s12079.pcdn.co/wp-content/uploads/2015/10/bmw_m3_autumn-wallpaper-1920x1080.jpg",
  },
  {
    title: "Mercedes Benz CLA 250 AMG",
    description: "Mercedes Benz CLA 250 AMG in black color",
    src: "https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg",
  },
  {
    title: "Ford Mustang",
    description: "Ford Mustang in blue color",
    src: "https://www.baltana.com/files/wallpapers-20/Ford-Mustang-Shelby-GT500-Widescreen-Wallpapers-48448.jpg",
  },
  {
    title: "Tesla Model S",
    description: "Tesla Model S in red color",
    src: "https://www.baltana.com/files/cars-1/2018-Tesla-Model-S-Wallpaper-1920x1080-70416.jpg",
  },
  {
    title: "McLaren P1",
    description: "McLaren P1 in white color",
    src: "https://i.pinimg.com/originals/24/85/2b/24852b690de2f16f63690351bc55d31c.jpg",
  },
];

function App() {
  return (
    <>
      <Header />
      <Slider slides={slides} />
      <Footer />
    </>
  );
}

export default App;
