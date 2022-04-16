import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    /* flex-direction: column; */
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    justify-content: center;
    /* border: 1px solid black; */
    width: 1px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    gap: 20px;
    /* border: 1px solid red; */
    width: 80%;
    margin-top: ${(prop) => (prop.action ? "20px" : "0")};
`;

export const SmallHeading = styled.h3`
    color: ${(props) => (props.primary ? "hsl(26, 100%, 55%)" : "black")};
    text-transform: ${(props) => (props.capitalize ? "uppercase" : "none")};
`;

export const Heading = styled.h1`
    font-weight: 700;
    font-size: 50px;
`;

export const Description = styled.p`
    letter-spacing: 1px;
    color: ${(props) => (props.gray ? "hsl(219, 9%, 45%)" : "black")};
    font-weight: 500;
`;

export const PriceContainer = styled.div`
    /* border: 1px solid black; */
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 0fr 0fr;
    gap: 10px;
`;

export const PriceTag = styled.p`
    font-weight: 700;
    color: ${(props) => (props.gray ? "hsl(219, 9%, 45%)" : "black")};
    /* font-size: 25px; */
    font-size: ${(props) => (props.priceCut ? "18px" : "25px")};
    text-decoration: ${(props) =>
        props.strikethrough ? "line-through" : "none"};
`;

export const PriceDisc = styled.span`
    color: ${(props) => (props.primary ? "hsl(26, 100%,50%)" : "black")};
    font-weight: 700;
    background-color: hsl(26, 100%, 70%);
    padding: 5px;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: ${(props) => (props.primary ? "hsl(26, 100%, 55%)" : "")};
    background-color: ${(props) => (props.secondary ? "#cdcdcd" : "")};
    /* align-self: center; */
    /* padding: 16px 70px; */
    padding: ${(props) => (props.addToCart ? "16px 100px" : "16px 70px")};
    color: ${(props) => (props.primary ? "white" : "")};
    border-radius: 7px;
    border: none;
    cursor: ${(props) => (props.pointer ? "pointer" : "default")};
    width: ${(props) => (props.fullWidth ? "100%" : "")};
    /* width: 100%; */
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */
    border-radius: 7px;
    width: 40%;
    background-color: #e2e1e1;
    padding: 10px;
`;