import styled from "styled-components";

export const AsteroidContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${(props) =>
    `translate${props.number} ${props.time}ms linear infinite`};
  animation-delay: ${(props) => `${props.number * props.time}ms`};
  background: transparent;
  @keyframes ${(props) => `translate${props.number}`} {
    0% {
      transform: translate3d(${(props) => props.x0}, ${(props) => props.y0}, 0);
    }
    100% {
      transform: translate3d(${(props) => props.x1}, ${(props) => props.y1}, 0);
    }
  }
`;

export const AsteroidElement = styled.img`
  position: absolute;
  left: -100px;
  width: 100px;
  height: 100px;
  animation: ${(props) =>
    `spin${props.number} ${props.time}ms linear infinite`};
  animation-delay: ${(props) => `${props.number * props.time}ms`};
  background-color: transparent;
  z-index: ${(props) => props.number};
  @keyframes ${(props) => `spin${props.number}`} {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(${(props) => props.rotation});
    }
  }
`;
