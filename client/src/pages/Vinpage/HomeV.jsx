import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { SearchSection } from "./SearchSection";
import { PropertiesSection } from "./PropertiesSection";
import { PropertyCard } from "./PropertyCard";
import { RecommendSection } from "./recommendSection";
import AdviceTools from "./AdviceTools";

function HomeV() {
  return (
    <div className="min-h-screen bg-white">
      <SearchSection />
      <PropertiesSection />
      <RecommendSection />
      <AdviceTools />
    </div>
  );
}

export default HomeV;
