import "./styles.css";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const Catalog = () => {
  let state = {
    //state is by default an object
    products: [
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      
    ]
  };

  const renderProducts = () => {
    return state.products.map((product, index) => {
      const { title, artist, price, image } = product; //destructuring
      return (
        <table class="box">
          <tr>
            <th class="table">
              <img src={image} alt="Italian Trulli" id="image" />
            </th>
            <th class="productDetails">
              <p class="title">
                <a href="catalog.html">{title}</a>
              </p>
              <p class="artist">Artist: {artist}</p>
              <p class="price">PKR {price}</p>
            </th>
          </tr>
        </table>
      );
    });
  };
  return (
    <div>
      <CustomerNavbar />
      <Memory panel="" page="" current="Catalog" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Catalog</h1>
      <br></br>
      <div class="filters">
        <input type="button" class="sortbars" value="Sort A-Z" />
        <input type="button" class="sortbars" value="Sort $-$$" />
        <input type="button" class="sortbars" value="Filter" />
      </div>
      <br></br>
      <div class="itemboxes">{renderProducts()}</div>
    </div>
  );
};

export default Catalog;
