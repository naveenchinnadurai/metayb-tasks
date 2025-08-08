import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AccordionPractice() {
  return (
    <div className="flex flex-col p-10">
        <Typography variant="h5" align="center" marginBottom="20px">Some Common FAQ's</Typography>
      <div className="w-1/2 mx-auto">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">What is React?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            React is a free and open-source JavaScript library used for building
            user interfaces, particularly for single-page applications. It
            allows developers to create reusable components that manage their
            own state, making it easier to build dynamic and interactive web
            applications.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
              What is Functional Component?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Functional components in React are simple JavaScript functions that
            accept props as input and return JSX, which describes what the UI
            should look like. They are lightweight, easier to read, and can
            manage state and lifecycle methods using React Hooks.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Explain Agile Methodology?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            The Agile methodology is a proper way of managing the project with
            breaking them into smaller phases which is iteration. It basically
            focus on flexibility of the project which we can change and improve
            the team work regularly as per requirements.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">
              Why is Nextjs better than React?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            NextJS is a framework of React that enhances its server-side
            rendering, automatic code splitting, and simplified routing, while
            React is a frontend library of JavaScript that is used for
            developing interactive user interfaces and building UI components. <br /> <br />
            NextJS is optimized for production with easier setup for SSR, making
            it ideal for scalable applications. React, while powerful, requires
            additional configuration for similar capabilities without Next.js's
            out-of-the-box features. This article explains the differences
            between NextJS and React in detail.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
