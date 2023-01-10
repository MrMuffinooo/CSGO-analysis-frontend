import React, { useState } from "react";
import { BannerContent } from "./BannerContent";
import { Tabs } from "./Tabs";
import { MapBanner } from "./MapBanner";
import { RoundView } from "./RoundView";
import { MatchView } from "./MatchView";

export function Main({ tick }) {
  const [tabIsMecz, setTabIsMecz] = useState(true);

  return (
    <div>
      <BannerContent tabIsMecz={tabIsMecz} />
      <MapBanner />
      <Tabs tabIsMecz={tabIsMecz} setTabIsMecz={setTabIsMecz} />
      {tabIsMecz ? <MatchView /> : <RoundView tick={tick} />}
    </div>
  );
}
