import Trending from "./Trending/Trending";
import SliderImg from "./SliderImg/SliderImg";
import Popular from "./Popular/Popular";
import Other from "./Other/Other";
export default function Home() {
  return (
    <>
      <SliderImg />
      <Trending />
      <Popular />
      <Other />
    </>
  );
}
