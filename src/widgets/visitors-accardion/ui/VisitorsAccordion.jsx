import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useTranslation } from "react-i18next";

const accordionList = [
  {
    title: "accordion.rules_visiting_dealership.title",
    content: "accordion.rules_visiting_dealership.content",
  },
  {
    title: "accordion.not_allowed_dealership.title",
    content: "accordion.not_allowed_dealership.content",
  },
  {
    title: "accordion.rules_during_quarantine.title",
    content: "accordion.rules_during_quarantine.content",
  },
  {
    title: "accordion.visiting_rules_during_quarantine.title",
    content: "accordion.visiting_rules_during_quarantine.content",
  },
  {
    title: "accordion.concluding_provisions.title",
    content: "accordion.concluding_provisions.content",
  },
];

export const VisitorsAccordion = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ padding: "50px 10px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: "clamp(36px, 4vw, 52px)" }}
      >
        {t("accordion_head")}
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        {accordionList.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {t(item.title)}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "20px 60px " }}>
              <Typography component="div" sx={{ textAlign: "justify" }}>
                <div dangerouslySetInnerHTML={{ __html: t(item.content) }} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};
