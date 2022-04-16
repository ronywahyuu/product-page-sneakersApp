import {
    Container,
    LogoContainer,
    Logo,
    NavList,
    ListItem,
    UserContainer,
    Link,
    Cart,
    LabelCartCount,
    AvatarImg,
} from "./TopBarStyled";
import LogoImg from "../../assets/images/logo.svg";
import CartIcon from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
// import { useState } from "react";

const TopBar = ({ cartQty }) => {
    // const [cartQty, setCartQty] = useState(3);

    const checkCartQty = () => {
        if (cartQty === 0) {
            console.log("cartQty = 0");
        } else if (cartQty > 0) {
            console.log("cartQty > 0");
            return <LabelCartCount>{cartQty}</LabelCartCount>;
        } else {
            console.log("< 0");
        }
    };

    return (
        <Container>
            {/* <HamburgerMenu></HamburgerMenu> */}
            <LogoContainer>
                <Logo src={LogoImg} />
            </LogoContainer>
            <NavList>
                <ListItem>
                    <Link href="#">Collections</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Men</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Women</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">About</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Contact</Link>
                </ListItem>
            </NavList>

            <UserContainer>
                <Link>
                    <Cart onClick={checkCartQty} as="img" src={CartIcon} />
                    {/* <LabelCartCount>{cartQty}</LabelCartCount> */}
                    {checkCartQty()}
                </Link>
                <Link>
                    <AvatarImg src={Avatar} />
                </Link>
            </UserContainer>
        </Container>
    );
};

export default TopBar;
