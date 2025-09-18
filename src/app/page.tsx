'use client';
import FluxwareButton from "@/components/FluxwareButtons";
import Navbar from "@/components/navbar";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import WhatWeOffer from "@/components/WhatWeOffer";
import ProjectTier from "@/components/ProjectTier";
import OurWork from "@/components/OurWork";
import WhoWeAre from "@/components/WhoWeAre";
import MoreInfo from "@/components/MoreInfo";
import WorkFlow from "@/components/WorkFlow";
import HeroSection from "@/components/HeroSection";
import BuildTogether from "@/components/BuildTogether";

export default function Home() {
  const theme : Theme = useTheme();
  //switch to memoization

  return (
    <>
      <HeroSection />
      <WorkFlow />
      <WhatWeOffer/>
      <ProjectTier/>
      <OurWork />
      <WhoWeAre />
      <MoreInfo />
      <BuildTogether />
    </>
  );
}