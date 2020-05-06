import styled from "styled-components";
import homeImg from "../../images/homeBcg.jpeg";

const Hero = styled.header`
  background: url(${(props) => props.img || homeImg});
  min-height: 100vh;
`;

export default Hero;

<Hero img={aboutImg} />;
``````````````````````````````````````````````````````````````````````````````````````````````````````;
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper>
      <h1>Hello world</h1>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default Banner;
``````````````````````````````````````````````````````````````````````````````````````````````````````;
