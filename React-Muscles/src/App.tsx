"use client";

import React, { useState } from "react";
import FrontBody from "./FrontBody"
import RearBody from "./RearBody";

// Types for both SVGs
type FrontRegionId =
  | "pectorals"
  | "biceps"
  | "anteriorDeltoids"
  | "forearms"
  | "abdominals"
  | "obliques"
  | "adductors"
  | "abductors"
  | "quadriceps"
  | "tibialis"
  | "nonMuscles"
  | "traps";

type RearRegionId =
  | "nonMuscles"
  | "traps"
  | "glutes"
  | "teres"
  | "triceps"
  | "latissimus"
  | "posteriorForearms"
  | "spinalErectors"
  | "externalObliques"
  | "calves"
  | "hamstrings"
  | "posAdductors"
  | "posDeltoids";

export default function MusclesPage() {
  // State for front body regions
  const [frontRegionColors, setFrontRegionColors] = useState<Record<FrontRegionId, string>>({
    pectorals: "grey",
    biceps: "grey",
    anteriorDeltoids: "grey",
    forearms: "grey",
    abdominals: "grey",
    obliques: "grey",
    adductors: "grey",
    abductors: "grey",
    quadriceps: "grey",
    tibialis: "grey",
    nonMuscles: "black",
    traps: "grey",
  });

  // State for rear body regions
  const [rearRegionColors, setRearRegionColors] = useState<Record<RearRegionId, string>>({
    nonMuscles: "black",
    traps: "grey",
    glutes: "grey",
    teres: "grey",
    triceps: "grey",
    latissimus: "grey",
    posteriorForearms: "grey",
    spinalErectors: "grey",
    externalObliques: "grey",
    calves: "grey",
    hamstrings: "grey",
    posAdductors: "grey",
    posDeltoids: "grey",
  });

  // Track selected regions as lists
  const [selectedFront, setSelectedFront] = useState<FrontRegionId[]>([]);
  const [selectedRear, setSelectedRear] = useState<RearRegionId[]>([]);

  // Functions to change region colors
  const changeFrontRegionColor = (regionId: FrontRegionId, color: string) => {
    setFrontRegionColors((prev) => ({ ...prev, [regionId]: color }));
  };

  const changeRearRegionColor = (regionId: RearRegionId, color: string) => {
    setRearRegionColors((prev) => ({ ...prev, [regionId]: color }));
  };

  // Handlers for FrontBody
  const handleFrontRegionClick = (regionId: FrontRegionId) => {
    setSelectedFront((prev) => {
      if (prev.includes(regionId)) {
        // Deselect
        changeFrontRegionColor(regionId, "grey");
        return prev.filter((id) => id !== regionId);
      } else {
        // Select
        changeFrontRegionColor(regionId, "darkslateblue");
        return [...prev, regionId];
      }
    });
  };

  const handleFrontRegionHover = (regionId: FrontRegionId) => {
    if (!selectedFront.includes(regionId)) {
      changeFrontRegionColor(regionId, "lightgrey");
    }
  };

  const handleFrontRegionLeave = (regionId: FrontRegionId) => {
    if (!selectedFront.includes(regionId)) {
      changeFrontRegionColor(regionId, "grey");
    }
  };

  // Handlers for RearBody
  const handleRearRegionClick = (regionId: RearRegionId) => {
    setSelectedRear((prev) => {
      if (prev.includes(regionId)) {
        // Deselect
        changeRearRegionColor(regionId, "grey");
        return prev.filter((id) => id !== regionId);
      } else {
        // Select
        changeRearRegionColor(regionId, "darkslateblue");
        return [...prev, regionId];
      }
    });
  };

  const handleRearRegionHover = (regionId: RearRegionId) => {
    if (!selectedRear.includes(regionId)) {
      changeRearRegionColor(regionId, "lightgrey");
    }
  };

  const handleRearRegionLeave = (regionId: RearRegionId) => {
    if (!selectedRear.includes(regionId)) {
      changeRearRegionColor(regionId, "grey");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-8 w-full">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Front</h1>
        <FrontBody
          regionColors={frontRegionColors}
          changeRegionColor={changeFrontRegionColor}
          onRegionClick={handleFrontRegionClick}
          onRegionHover={handleFrontRegionHover}
          onRegionLeave={handleFrontRegionLeave}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Rear</h1>
        <RearBody
          regionColors={rearRegionColors}
          changeRegionColor={changeRearRegionColor}
          onRegionClick={handleRearRegionClick}
          onRegionHover={handleRearRegionHover}
          onRegionLeave={handleRearRegionLeave}
        />
      </div>
    </div>
  );
}
