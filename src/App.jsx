import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Text from "./components/desc/Text";
import Images from "./components/images/Images";
import TopBar from "./components/topbar/TopBar";
import imgData from "./images.json";

function App() {
    // axios

    const fixed_price = 125;
    const [qty, setQty] = useState(0);
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(250);
    const [discount, setDiscount] = useState(50);
    const [img, setImg] = useState([]);
    const [price, setPrice] = useState(() => {
        const disc = discount / 100;
        return priceBeforeDiscount - priceBeforeDiscount * disc;
    });

    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await axios
                .get("https://jsonplaceholder.typicode.com/photos")
                .then((res) => {
                    const imgData = res.data;
                    const slicedList = imgData.slice(0, 4);
                    // console.log(slicedList);
                    setImg(slicedList);
                })
                .catch((err) => console.log("Cannot get data: ", err));
        }

        console.log(fetchData());
    }, []);

    console.log(img);

    // img.filter(e=>{
    //     e.url = 
    // })

    // function for Text Component
    const increment = (e) => {
        setQty(qty + 1);
        // setCartQty(cartQty + 1);
        if (qty > 0) {
            setPrice(price + fixed_price);
        }
    };

    const decrement = (e) => {
        setQty(qty - 1);
        // setCartQty(cartQty - 1);
        if (qty <= 0) {
            setQty(0);
            setPrice(fixed_price);
        } else {
            setPrice(price - fixed_price);
        }
    };

    const checkCartQty = () => {
        if (cartQty > 0) {
            return cartQty;
        } else {
            console.log("< 0");
        }
    };

    const addToCart = () => {
        console.log("Add to cart");
        if ((qty) => 0) {
            setCartQty(qty);
        }
    };
    return (
        <>
            <TopBar cartQty={cartQty} checkCartQty={checkCartQty} />
            <Line />
            <Content>
                <Images images={img} />
                <Text
                    quantity={qty}
                    price={price}
                    priceBefore={priceBeforeDiscount}
                    discount={discount}
                    onDecrement={decrement}
                    onIncrement={increment}
                    addToCart={addToCart}
                />
            </Content>
        </>
    );
}

const Content = styled.div`
    padding: 10px 150px;
    display: flex;
`;

const Line = styled.hr`
    width: 95%;
    margin: 20px auto;
`;

export default App;
