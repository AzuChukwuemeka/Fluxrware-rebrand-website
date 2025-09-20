import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import FluxPictureText from "../global/FluxUI/FluxPictureText";

export default function OurWork() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box paddingTop={theme.spacing(8)} style = {{background: "radial-gradient(circle at top right, #fefefe 95%, lightblue) 200% 200%"}}>
            <Container>
              <Typography fontWeight = {"bold"} variant = "h3" textAlign={"center"}>
                Our <span style = {{color: theme.palette.primary.main}}>Work,</span> Through Their <span style = {{color: "grey"}}>Lens</span>
              </Typography>
              <Typography fontWeight = {"bold"} variant = "body1" textAlign={"center"} marginBlock={theme.spacing(3)}>
                Their words, their success, our shared story
              </Typography>
              <Box>
                <Grid container spacing = {2} justifyContent={"center"} marginBottom={2}>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing = {2} justifyContent={"center"} marginBottom={2}>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing = {2} justifyContent={"center"}>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: theme.spacing(2)}}/>
                          <Typography fontWeight = {"bold"}>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography fontWeight = {"bold"} variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </React.Fragment>
    )
}