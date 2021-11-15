import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StyledHeader } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h4>
              <div className="tag-line">
                <div>Local Control.</div>
                <div>Global Cooperation</div>
              </div>
            </h4>
            <div>
              <p>
                Stellar Anchors is a decentralized global cooperative that
                places small businesses and community associations on an equal
                competitive footing with multi-national corporations and
                government entities in the areas of info tech, legal, and
                business admin by pooling member resources.
              </p>
            </div>
          </div>
          <div className="image">
            <StaticImage
              src="../assets/images/stellar-anchors.jpg"
              alt="stellar anchors badge"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
