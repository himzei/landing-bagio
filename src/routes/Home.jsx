import { Element } from "react-scroll";
import About from "../components/about/About";
import Clark from "../components/clark/Clark";
import Consulting from "../components/consulting/Consulting";
import Main from "../components/main/Main";
import Speciality from "../components/speciality/Speciality";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <Main />

      <div id="1">
        <Element name="test1" className="test1">
          <About />
        </Element>
      </div>

      <div id="2">
        <Element name="test2" className="test2">
          <Clark />
        </Element>
      </div>

      <div id="3">
        <Element name="test3" className="test3">
          <Speciality />
        </Element>
      </div>

      <div id="4">
        <Element name="test4" className="test4">
          <Portfolio />
        </Element>
      </div>

      <div id="5">
        <Element name="test5" className="test5"></Element>
      </div>

      <div id="6">
        <Element name="test6" className="test6">
          <Consulting />
        </Element>
      </div>
    </>
  );
}
