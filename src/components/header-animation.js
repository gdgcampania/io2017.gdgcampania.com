import React from "react";
import styled from "styled-components";
import anime from "animejs";

import Title from "./title";

const getPointsString = points => points.map(([a, b]) => `${a} ${b}`).join(" ");

const Info = styled.div`
  font-family: ubuntu;
  font-weight: 500;
  font-size: 2vw;
  color: #5585f0;
`;

const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & .right {
    fill: #59e7c0;
  }
  & .left {
    fill: #fed330;
  }
`;

class HeaderAnimation extends React.Component {
  setupPoints(svg) {
    const bbox = svg.getBoundingClientRect();

    const stroke = 5;

    const slopePercentage = 7;
    const vw = bbox.width / 100;

    const bottomX = vw * 25;
    const topX = bottomX + vw * slopePercentage;

    this.leftSteps = [
      [
        [bottomX - stroke, bbox.height],
        [bottomX - stroke, bbox.height],
        [bottomX, bbox.height],
        [bottomX, bbox.height]
      ],
      [
        [bottomX - stroke, bbox.height],
        [topX - stroke, 0],
        [topX, 0],
        [bottomX, bbox.height]
      ],
      [[0, bbox.height], [0, 0], [topX, 0], [bottomX, bbox.height]]
    ];

    this.rightSteps = [
      [
        [bottomX, bbox.height],
        [bottomX, bbox.height],
        [bottomX + stroke, bbox.height],
        [bottomX + stroke, bbox.height]
      ],
      [
        [bottomX, bbox.height],
        [topX, 0],
        [topX + stroke, 0],
        [bottomX + stroke, bbox.height]
      ],
      [
        [bottomX, bbox.height],
        [topX, 0],
        [bbox.width, 0],
        [bbox.width, bbox.height]
      ]
    ];
  }

  componentDidMount() {
    const left = this._svg.querySelector(".left");
    const right = this._svg.querySelector(".right");

    this.setupPoints(this._svg);

    left.setAttribute("points", getPointsString(this.leftSteps[0]));
    right.setAttribute("points", getPointsString(this.rightSteps[0]));

    const timeline = anime.timeline();

    timeline.add({
      targets: left,
      points: [
        { value: getPointsString(this.leftSteps[1]) },
        { value: getPointsString(this.leftSteps[2]) }
      ],
      easing: "easeOutQuad",
      duration: 1000,
      offset: 0
    });

    timeline.add({
      targets: right,
      points: [
        { value: getPointsString(this.rightSteps[1]) },
        { value: getPointsString(this.rightSteps[2]) }
      ],
      easing: "easeOutQuad",
      offset: 0
    });

    timeline.add({
      targets: this._content,
      opacity: 1,
      easing: "easeOutQuad",
      offset: 1000
    });
  }

  render() {
    return (
      <div>
        <StyledSVG innerRef={c => this._svg = c}>
          <polygon className="right" />
          <polygon className="left" />
        </StyledSVG>

        <div
          ref={c => this._content = c}
          style={{
            position: "absolute",
            zIndex: 10,
            left: "22vw",
            top: "50%",
            opacity: 0,
            transform: "translateY(-50%)"
          }}
        >
          <Title color="#5c76f3" size="7vw" margin="0.1em">
            GDG<br /> Campania
          </Title>
          <Title color="#ff6b00" size="5vw" margin="0.2em">
            Google I/O Extended
          </Title>

          <Info>
            <p>17 Maggio</p>
            <p>18.30/22.30</p>
            <p>Città della Scienza – Napoli</p>
          </Info>
        </div>
      </div>
    );
  }
}

export default HeaderAnimation;
