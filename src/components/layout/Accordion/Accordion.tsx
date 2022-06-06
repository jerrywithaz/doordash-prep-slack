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
      <AccordionHeader onClick={() => setOpen(!open)} padding="s">
          <Text color="#ffffff" bold>{title}</Text>
      </AccordionHeader>
      {open && <Box paddingLeft="s" paddingRight="s">{children}</Box>}
    </Box>
  );
};

export default Accordion;
