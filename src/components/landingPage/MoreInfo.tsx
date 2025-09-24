'use client';
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import { moreInfoQuestions } from "@/data/moreInfo";
import { ArrowDownwardOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function MoreInfo() {
  const theme: Theme = useTheme();

  return (
    <React.Fragment>
      <Box paddingTop={10} style={{ background: "radial-gradient(circle at bottom left, #fefefe 90%, lightblue) 200% 200%" }}>
        <Container>
          <Typography textAlign={"center"} variant="h3">
            Need a Little More <span style={{ color: theme.palette.primary.main }}>Info?</span>
          </Typography>
          <Typography textAlign={"center"} variant="body2" marginTop={4}>
            Can&apos;t find what you need? Our FAQs have more details
          </Typography>
          <Grid container spacing={5} paddingTop={theme.spacing(8)}>
            {moreInfoQuestions.map((question, index) => {
              return (

                <Grid key={question.mainHeading} item xs={12 / 1} md={12 / 1} lg={12 / 2}>
                  <Typography variant="h5" fontWeight={"bold"} marginBottom={2}>
                    {question.icon} {question.mainHeading}
                  </Typography>
                  {question.info.map((subQuestions, index) => {
                    return (
                      <Accordion
                        key={subQuestions.title}
                        sx={{
                          paddingBlock: theme.spacing(1),
                          marginBottom: theme.spacing(2),
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: theme.spacing(3),
                          boxShadow: "none",
                          "&:before": {
                            display: "none",
                          },
                          "&.MuiAccordion-root": {
                            borderRadius: theme.spacing(3), 
                          },
                          "&.Mui-expanded": {
                            margin: `${theme.spacing(2)} 0`,
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <Image
                              src="/chevron-down.svg"
                              alt="Down Arrow"
                              width={20}
                              height={20}
                            />
                          }
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography variant="body1" component="span">
                            {subQuestions.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body2" textAlign="justify" lineHeight={1.3}>
                            {subQuestions.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )
                  })}
                </Grid>

              )
            })}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}