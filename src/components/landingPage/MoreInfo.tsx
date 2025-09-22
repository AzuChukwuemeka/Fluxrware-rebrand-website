'use client';
import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";


export default function MoreInfo() {
  const servicesOfferedQuestions : Array<string> = [];
  const typicallyWorkWithQuestions : Array<string> = [];
  const buildConstraintsQuestions : Array<string> = [];
  const websiteOptimizedQuestions: Array<string> = [];
  const somethingUniqueQuestions: Array<string> = [];
  const offerCommerceQuestions: Array<string> = [];
  const alreadyHaveDesignQuestions: Array<string> = [];
  const howMuchCostQuestions: Array<string> = [];
  const willUpdatesBeFreeQuestions: Array<string> = [];
  const offerDiscountQuestions: Array<string> = [];
  const refundQuestions: Array<string> = [];
  const projectDurationsQuestions: Array<string> = [];
  const whatHappensAfterLaunchQuestions: Array<string> = [];
  const requestChangeQuestions: Array<string> = [];
  const theme : Theme = useTheme();

    return (
        <React.Fragment>
          <Box paddingTop={10}  style = {{background: "radial-gradient(circle at bottom left, #fefefe 90%, lightblue) 200% 200%"}}>
            <Container>
              <Typography textAlign={"center"} variant = "h3" fontWeight={"bold"}>
                Need a Little More <span style = {{color: theme.palette.primary.main}}>Info?</span>
              </Typography>
              <Typography textAlign={"center"} variant = "body2" fontWeight={"bold"} marginTop={4}>
                Can't find what you need? Our FAQs have more details
              </Typography>
              <Grid container spacing = {2} marginTop={5}>
                <Grid item xs = {12/1} md = {12/1} lg = {12/2}>
                  <Typography fontWeight = {"bold"} marginBottom={2}>
                    General Questions
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </React.Fragment>
    )
}