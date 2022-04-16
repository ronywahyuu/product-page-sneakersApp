// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import styled from "styled-components";
import {
    Container,
    Wrapper,
    Counter,
    SmallHeading,
    Heading,
    Description,
    PriceContainer,
    PriceTag,
    PriceDisc,
    Button,
} from "./TextStyled";
import IconIncrement from "../../assets/images/icon-plus.svg";
import IconDecrement from "../../assets/images/icon-minus.svg";

const Text = ({
    quantity,
    price,
    priceBefore,
    discount,
    onDecrement,
    onIncrement,
    addToCart,
}) => {
    const handleIncrement = (e) => {
        e.preventDefault();
        onIncrement();
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        onDecrement();
    };

    const handleAddToCart = () => {
        addToCart();
    };
    return (
        <Container>
            <Wrapper column>
                <SmallHeading primary capitalize>
                    Sneaker Company
                </SmallHeading>
                <Heading>Fall Limited Edition Sneakers</Heading>
                <Description gray>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur ut in ullam qui provident! Maxime, modi fugiat? Non
                    tempore modi explicabo dignissimos illum, asperiores porro
                </Description>
                <PriceContainer>
                    <PriceTag>${price}</PriceTag>
                    <PriceDisc primary>{discount}%</PriceDisc>
                    <PriceTag strikethrough priceCut gray>
                        ${priceBefore}.00
                    </PriceTag>
                </PriceContainer>
            </Wrapper>
            <Wrapper action>
                <Counter>
                    <span onClick={handleDecrement}>
                        <img src={IconDecrement} alt="" />
                    </span>
                    <span>{quantity}</span>
                    <span onClick={handleIncrement}>
                        <img src={IconIncrement} alt="" />
                    </span>
                </Counter>

                <Button
                    primary
                    addToCart
                    pointer
                    fullWidth
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </Wrapper>
        </Container>
    );
};

export default Text;
