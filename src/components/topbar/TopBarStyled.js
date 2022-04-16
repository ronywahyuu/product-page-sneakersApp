import styled from "styled-components";


// const Hamburger = () => {
//     <div class="hamburger">
//         <div class="hamburger-box hamburger--collapse is-active">
//             <div class="hamburger-inner"></div>
//         </div>
//     </div>;
// };

// const HamburgerMenu = styled(Hamburger)``;

export const Container = styled.nav`
    background-color: #f5f5f5;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 150px;
    @media (max-width: 375px) {
        padding: 10px 20px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* border: 1px solid black; */
`;

export const Logo = styled.img`
    /* border: 1px solid black; */
`;

export const NavList = styled.ul`
    /* padding: 0 60px; */
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-left: -15%;
    /* justify-content: space-b; */
    /* border: 1px solid black; */

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    /* margin-right: 50px; */
`;

export const Link = styled.a`
    text-decoration: none;
    position: relative;
    cursor: pointer;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
`;

export const Cart = styled(Link)`
    /* border: 1px solid black; */
`;
export const LabelCartCount = styled.span`
    position: absolute;
    top: -10px;
    left: 10px;
    font-size: 12px;
    background: hsl(26, 100%, 55%);
    color: #fff;
    padding: 0 5px;
    border-radius: 10px;
    vertical-align: top;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */
    width: 10%;

    @media (max-width: 1048px) {
        width: 15%;
    }
    @media (max-width: 689px) {
        width: 25%;
    }

    @media (max-width: 414px) {
        width: 30%;
    }

    @media (max-width: 375px) {
        width: 30%;
    }
`;

export const AvatarImg = styled.img`
    width: 50px;
    @media (max-width: 689px) {
        border: 1px solid black;
        /* width: 70%; */
    }
    @media (max-width: 1048px) {
    }
`;

// const Line = styled.hr`
//     border: 1px solid black;
// `;