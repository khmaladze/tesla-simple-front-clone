import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Section component for displaying a section with title, description, and buttons
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      {/* Fade animation for the section content */}
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      {/* Buttons section */}
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            {/* Left button */}
            <LeftButton>{leftBtnText}</LeftButton>
            {/* Right button if provided */}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          {/* Down arrow icon for scrolling */}
          <DownArrow src="/images/down-arrow.svg" alt="Scroll down arrow" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

// Styled components for Section

// Wrapper for the section with background image
const Wrap = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

// Styled component for section text content
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

// Button group container
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Base styled component for buttons
const Button = styled.div`
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

// Styled component for the left button
const LeftButton = styled(Button)`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  text-transform: uppercase;
`;

// Styled component for the right button
const RightButton = styled(Button)`
  background: white;
  opacity: 0.65;
  color: black;
`;

// Styled component for the down arrow icon
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

// Styled component for the buttons container
const Buttons = styled.div``;
