import React from "react";
import { PropertyHeader } from "./appartHeader";
import { ImageGallery } from "./ImageGallery";
import { PropertySpecs } from "./PropertySpecs";
import PropertyOverview from "./propertyOverview";
import ProjectAmenities from "./projectAmenities";
import Navbar from "../../components/Navbar";

const Property = () => {
  return (
    <>
      <Navbar />
      <PropertyHeader />
      <ImageGallery />
      <PropertySpecs />
      <PropertyOverview />
      <ProjectAmenities />
    </>
  );
};

export default Property;
