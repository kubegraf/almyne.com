import Header from "./components/Header";
import WeekHero from "./components/WeekHero";
import GentleCopy from "./components/GentleCopy";
import OrbitTiles from "./components/OrbitTiles";
import RhythmStory from "./components/RhythmStory";
import FamilyView from "./components/FamilyView";
import PriceLeaves from "./components/PriceLeaves";
import LampCTA from "./components/LampCTA";
import LightFooter from "./components/LightFooter";

export default function App() {
  return (
    <div className="min-h-screen paper text-ink">
      <Header />
      <main>
        <WeekHero />
        <GentleCopy />
        <OrbitTiles />
        <RhythmStory />
        <FamilyView />
        <PriceLeaves />
        <LampCTA />
      </main>
      <LightFooter />
    </div>
  );
}
