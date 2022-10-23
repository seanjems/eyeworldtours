import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Benefits = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="wpo-benefits-section">
      <h2>Destination FAQ</h2>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="wpo-benefits-item">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Is Uganda a safe country
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Traveling and visiting Uganda is typically safe. It is
                  regarded as a politically stable nation with well-managed
                  internal security structures and borders within the East
                  African area. However, opportunistic crimes like house
                  invasions, credit card fraud, and small-time theft happen just
                  as in any other nation. By exercising caution and abiding by
                  local regulations, you can avoid current crime dangers,
                  terrorist hotspots, and COVID-19 infections.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  How and where do I get a Visa?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  An online application is required to obtain a visa for Uganda.
                  The official application website can be accessed at
                  https://visas.immigration.go.ug/. The visa approval should be
                  sent to your email within 2 to 4 days of uploading the
                  necessary documents.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  What is the best time to travel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You may visit Uganda at any time of year. For wildlife trips,
                  January, February, June, July, August, September, and December
                  are often the driest months.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  What vaccination do I need before travelling to Uganda/Rwanda?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yellow fever immunization is required. Please be aware,
                  though, that the current Covid-19 pandemic makes immunization
                  absolutely necessary for your protection and for making travel
                  easier. You will need to present both your Yellow fever and
                  Covid-19 vaccination certificates when you arrive. Those who
                  have received the full course of Covid-19 vaccination are
                  exempt from needing a PCR Certificate. If you are not
                  protected against COVID-19, you must have a negative PCR
                  certificate obtained within 72 hours of your arrival.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography className={classes.heading}>
                  What chance do I have to see the gorillas?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We can't claim with certainty that a day's trip will guarantee
                  you a chance of seeing gorillas. However, we are confident
                  that the wildlife administration will let you try again the
                  following day without charging you again for the gorilla
                  permit if you are unable to see the gorillas on your first
                  attempt. We have never encountered a situation in which two
                  attempts to see the gorillas resulted in failure.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Typography className={classes.heading}>
                  How do I book a tour or Safari?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Click on the contact us button then fill and submit the form.
                  A professional eyeworld representative will respond with all
                  the information and will help you through the safari booking
                  process.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
