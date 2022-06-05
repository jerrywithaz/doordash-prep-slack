import React, { useState } from "react";
import Text from "../../general/Text";
import Box from "../Box";
import { AccordionHeader } from "./Accordion.styled";

type AccordionProps = {
  title: string;
};

const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <Box vertical>
      <AccordionHeader onClick={() => setOpen(!open)} padding="10px 10px">
          <Text color="#ffffff" bold>{title}</Text>
      </AccordionHeader>
      {open && <Box padding="0px 10px">{children}</Box>}
    </Box>
  );
};

export default Accordion;
