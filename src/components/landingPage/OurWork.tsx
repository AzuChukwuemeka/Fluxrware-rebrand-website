import React from "react";
import { Avatar, Box, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import FluxPictureText from "../global/fluxUI/FluxPictureText";
import { customerReviewsRowOne, customerReviewsRowThree, customerReviewsRowTwo } from "@/data/customerReviews";

export default function OurWork() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box paddingTop={theme.spacing(10)} style = {{background: "radial-gradient(circle at top right, #fefefe 95%, lightblue) 200% 200%"}}>
            <Container>
              <Typography fontWeight = {"bold"} variant = "h3" textAlign={"center"}>
                Our <span style = {{color: theme.palette.primary.main}}>Work,</span> Through Their <span style = {{color: "grey"}}>Lens</span>
              </Typography>
              <Typography fontWeight = {"bold"} variant = "body1" textAlign={"center"} marginBlock={theme.spacing(5)}>
                Their words, their success, our shared story
              </Typography>
              <Box>
                <Grid container spacing = {2} justifyContent={"center"} paddingBottom={2}>
                  {customerReviewsRowOne.map((customerReview,index) => {
                    return (
                      <Grid key = {index} item xs = {12/1} md = {12/1} lg = {12/4}>
                        <Card variant = "outlined">
                          <CardContent>
                            <FluxPictureText>
                              <Avatar src = {customerReview.img} sx = {{marginRight: theme.spacing(2)}}/>
                              <Typography fontWeight = {"bold"}>
                                {customerReview.name}
                              </Typography>
                            </FluxPictureText>
                            <Typography fontWeight = {"bold"} variant = "body2">
                              {customerReview.review}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

                <Grid container spacing = {2} justifyContent={"center"} paddingBottom={2}>
                  {customerReviewsRowTwo.map((customerReview,index) => {
                    return (
                      <Grid key = {index} item xs = {12/1} md = {12/1} lg = {12/4}>
                        <Card variant = "outlined">
                          <CardContent>
                            <FluxPictureText>
                              <Avatar src = {customerReview.img} sx = {{marginRight: theme.spacing(2)}}/>
                              <Typography fontWeight = {"bold"}>
                                {customerReview.name}
                              </Typography>
                            </FluxPictureText>
                            <Typography fontWeight = {"bold"} variant = "body2">
                              {customerReview.review}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

                <Grid container spacing = {2} justifyContent={"center"} paddingBottom={2}>
                  {customerReviewsRowThree.map((customerReview,index) => {
                    return (
                      <Grid key = {index} item xs = {12/1} md = {12/1} lg = {12/4}>
                        <Card variant = "outlined">
                          <CardContent>
                            <FluxPictureText>
                              <Avatar src = {customerReview.img} sx = {{marginRight: theme.spacing(2)}}/>
                              <Typography fontWeight = {"bold"}>
                                {customerReview.name}
                              </Typography>
                            </FluxPictureText>
                            <Typography fontWeight = {"bold"} variant = "body2">
                              {customerReview.review}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </Container>
          </Box>
        </React.Fragment>
    )
}