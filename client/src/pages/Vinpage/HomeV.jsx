import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import SearchSection from "./SearchSection";
import { PropertiesSection } from "./PropertiesSection";
import { PropertyCard } from "./PropertyCard";
import { RecommendSection } from "./recommendSection";
import AdviceTools from "./AdviceTools";
import BudgetFriendly from "./budgetfriendly";
import Review from "./review";
import Carousel from "./carousel";
import PropertyList from "../../components/PropertyList";
import { PropertySpecs } from "./PropertySpecs";
import PropertyOverview from "./propertyOverview";
import { PropertyHeader } from "./appartHeader";
import ProjectAmenities from "./projectAmenities";
import { ImageGallery } from "./ImageGallery";

function HomeV() {
  return (
    <div className="min-h-screen bg-white">
      <Carousel />
      <PropertiesSection />
      <RecommendSection />
      <AdviceTools />
      <BudgetFriendly />
      <Review />
    </div>
  );
}

export default HomeV;
