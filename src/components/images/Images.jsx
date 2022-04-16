import { useState } from "react";
// import { render } from "react-dom"
import {
    Container,
    MainImg,
    ThumbnailImages,
    ThumbnailImg,
} from "./ImagesStyled";
import MainImage from "../../assets/images/image-product-1.jpg";
// import ThumbnailImage from "../../assets/images/image-product-1.jpg"
const Images = ({ images }) => {
    const [image, setImage] = useState(null);

    // console.log(images[0].url)

    const showIdOnClick = (e) => {
        const element = e.target;
        const attributeSrc = element.getAttribute("src");
        const attributeId = element.getAttribute("id");
        // console.log(attributeId)
        // console.log(element);

        const data = images.find((src) => src.url === attributeSrc);
        console.log(data.url);

        return data.url;
        // return <MainImg src={data.url} alt="main image" />
        // const findData = images.find(e=>e.id === attributeId)
        // console.log(mapData);
        // console.log(findData)
        // const findData = images.find(e=>e.id === attributeId)
        // const mapData = images.filter(e=>e.id === attributeId)
        // console.log(findData);
        // console.log(mapData);
        // return <MainImg src={attributeSrc} />
    };

    const renderMainImg = images.find((image) => {
        // const idData = showIdOnClick()
        // return image.id === idData
        // return <MainImg src={image.url} />
    });

    const imageThumbnails = images.map((e) => {
        // return e.url
        return (
            <ThumbnailImg
                src={e.url}
                key={e.id}
                id={e.id}
                onClick={showIdOnClick}
            />
        );
    });

    // console.log(imageThumbnails)
    // const findData = images.find(e=>e.url === showIdOnClick())
    // console.log(findData);

    // console.log(imageList);
    return (
        <Container>
            <MainImg src={MainImage} alt="main image" />
            {/* <MainImg src="https://via.placeholder.com/400"/> */}
            {/* <MainImg src={showIdOnClick.url} /> */}
            {/* <ShowedImg src={images[0].url}/> */}
            {/* {renderMainImg} */}
            {/* {showIdOnClick} */}
            <ThumbnailImages>
                {imageThumbnails}
                {/* <ThumbnailImg src="https://via.placeholder.com/70" /> */}
                {/* <ThumbnailImg src={ThumbnailImage} /> */}
                {/* <ThumbnailImg src={images[0].images} /> */}
                {/* <ThumbnailImg src={ThumbnailImage} />
            <ThumbnailImg src={ThumbnailImage} /> */}
            </ThumbnailImages>
        </Container>
    );
};

export default Images;
