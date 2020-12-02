import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CV428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="12345671"
                        title="Adonis- The Lean Startup: How Constant Innovation Creates
                        Radically Successful Businesses Paperback"
                        price={109.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="12345681"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12345691"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$3000x4000_retinamobilex2s"
                        rating={5}
                    />
                    <Product
                        id="12345693"
                        title="SIM Free iPhone 11 Pro 64GB Mobile Phone - Space Grey"
                        price={924.99}
                        image="https://media.4rgos.it/i/Argos/2066712_R_Z001A"
                        rating={5}
                    />
                    <Product
                        id="12345622"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={99.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$3000x4000_retinamobilex2s"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12345641"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
