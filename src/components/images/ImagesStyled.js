import styled from "styled-components"

export const Container = styled.div`   
    flex: 1;
    padding: 10px 50px;
    /* border: 1px solid black; */
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MainImg = styled.img`
    width: 400px;
    border-radius: 10px;
    align-self: center;
`

export const ThumbnailImages = styled.div`
    display: flex;
    gap: 35px;
`

export const ThumbnailImg = styled.img`
    border-radius: 10px;
    width: 70px;
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }

    :active{
        opacity: 0.5;
    }
    
`