import React from "react";
import styled from "styled-components";

const KoreaKichenStyled = styled.ul`
  list-style: none;
  padding: 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  overflow-y: scroll;

  li {
    border: 1px solid lightgray;
    box-shadow: 5px 5px 5px lightgray;
    border-radius: 10px;
    margin: 0px 10px 0px 10px;
    img {
      width: 10vw;
      border-radius: 20px;
    }
  }
`;

const KoreaKichen = () => {
  return (
    <KoreaKichenStyled className="KoreaKichen">
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>{" "}
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>{" "}
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>{" "}
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>{" "}
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>{" "}
      <li>
        <img
          src="https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600"
          alt="test"
        />
      </li>
    </KoreaKichenStyled>
  );
};

export default KoreaKichen;
