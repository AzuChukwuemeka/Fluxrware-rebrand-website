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
              <Typography textAlign={"center"} variant = "h3">
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
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="general">What Services do you normally offer</InputLabel>
                    <Select
                      labelId="general"
                      id="generalSelect"
                      value={"What Services do you normally offer"}
                      label="general"
                    >
                      {servicesOfferedQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="workwith">Who do you typically work with</InputLabel>
                    <Select
                      labelId="workwith"
                      id="workwithSelect"
                      value={"Who do you normally work with"}
                      label="workwith"
                    >
                      {typicallyWorkWithQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="buildConstraint">Do you only build websites?</InputLabel>
                    <Select
                      labelId="buildConstraints"
                      id="buildConstraintsSelect"
                      value={"Do you only build websites?"}
                      label="buildConstraints"
                    >
                      {buildConstraintsQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs = {12/1} md = {12/1} lg = {12/2}>
                  <Typography fontWeight = {"bold"} marginBottom={2}>
                    Design & Development
                  </Typography>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="optimized">Will my website be optimized for mobile</InputLabel>
                    <Select
                      labelId="optimized"
                      id="optimizedSelect"
                      value={"Will my website be optimized for mobile"}
                      label="optimized"
                    >
                      {websiteOptimizedQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="unique">I need Something unique, Can you make it</InputLabel>
                    <Select
                      labelId="unique"
                      id="uniqueSelect"
                      value={"I need Something unique, Can you make it"}
                      label="unique"
                    >
                      {somethingUniqueQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="ecommerce">Do you offer ecommerce solutions?</InputLabel>
                    <Select
                      labelId="ecommerce"
                      id="ecommerceSelect"
                      value={"Do you offer ecommerce solutions?"}
                      label="ecommerce"
                    >
                      {offerCommerceQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="haveDesign">What if i already have a design?</InputLabel>
                    <Select
                      labelId="haveDesign"
                      id="haveDesignSelect"
                      value={"What if i already have a design?"}
                      label="haveDesign"
                    >
                      {alreadyHaveDesignQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs = {12/1} md = {12/1} lg = {12/2}>
                  <Typography fontWeight = {"bold"} marginBottom={3}>
                    Pricing, Discounts & Refunds
                  </Typography>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="cost">How much will it cost?</InputLabel>
                    <Select
                      labelId="cost"
                      id="costSelect"
                      value={"How much will it cost?"}
                      label="cost"
                    >
                      {howMuchCostQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="cost">Will updates also be free?</InputLabel>
                    <Select
                      labelId="updates"
                      id="udpatesSelect"
                      value={"Will updates also be free?"}
                      label="updates"
                    >
                      {willUpdatesBeFreeQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="cost">Will updates also be free?</InputLabel>
                    <Select
                      labelId="updates"
                      id="udpatesSelect"
                      value={"Will updates also be free?"}
                      label="updates"
                    >
                      {offerDiscountQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="cost">Any Refunds?</InputLabel>
                    <Select
                      labelId="refunds"
                      id="refundsSelect"
                      value={"Any Refunds?"}
                      label="refunds"
                    >
                      {refundQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs = {12/1} md = {12/1} lg = {12/2}>
                  <Typography fontWeight = {"bold"} marginBottom={3}>
                    Timelines & Support
                  </Typography>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="duration">How long will my project take?</InputLabel>
                    <Select
                      labelId="duration"
                      id="durationSelect"
                      value={"How long will my project take?"}
                      label="project"
                    >
                      {projectDurationsQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="duration">What happens after launch</InputLabel>
                    <Select
                      labelId="launch"
                      id="launchSelect"
                      value={"What happens after launch?"}
                      label="launch"
                    >
                      {whatHappensAfterLaunchQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx = {{marginBottom: 3}}>
                    <InputLabel id="duration">Can i request changes during development?</InputLabel>
                    <Select
                      labelId="requestchanges"
                      id="requestchangesSelect"
                      value={"Can i request changes during development?"}
                      label="requestchanges"
                    >
                      {requestChangeQuestions.map((v,index) => {
                        return (<MenuItem value = {v}>{v}</MenuItem>)
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </React.Fragment>
    )
}