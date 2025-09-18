import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import FluxPictureText from "./FluxPictureText";

export default function OurWork() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box paddingTop={8} style = {{background: "radial-gradient(circle at top right, #fefefe 95%, lightblue) 200% 200%"}}>
            <Container>
              <Typography variant = "h3" textAlign={"center"}>
                Our <span style = {{color: theme.palette.primary.main}}>Work,</span> Through Their <span style = {{color: "grey"}}>Lens</span>
              </Typography>
              <Typography variant = "body2" textAlign={"center"} paddingBlock={2} fontWeight={"bold"}>
                Their words, their success, our shared story
              </Typography>
              <Box>
                <Grid container spacing = {2} justifyContent={"center"} marginBottom={2}>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
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
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
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
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
                          "Reliable, creative, and always one step ahead. Highly recommended."
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs = {12/1} md = {12/1} lg = {12/4}>
                    <Card variant = "outlined">
                      <CardContent>
                        <FluxPictureText>
                          <Avatar src = "./served1.jpg" sx = {{marginRight: "10px"}}/>
                          <Typography>
                            Rando
                          </Typography>
                        </FluxPictureText>
                        <Typography variant = "body2">
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