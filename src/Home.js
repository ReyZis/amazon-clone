import React from "react";
import "./Home.css";
import Product from "./Product";
import background from "./amazon background.jpg";
import lean from "./lean.jpg";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={`${background}`}
                    alt="amazon background"
                />

                <div className="home__row">
                    <Product
                        id="12345678"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        image={`${lean}`}
                        rating={5}
                    />
                    <Product
                        id="87654321"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239}
                        image={`https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg`}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="14725836"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image={`https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg`}
                        rating={1}
                    />
                    <Product
                        id="36258147"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image={`https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$`}
                        rating={1}
                    />
                    <Product
                        id="32165487"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image={`https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg`}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="35768241"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image={`https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg`}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
