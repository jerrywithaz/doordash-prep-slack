import React, { useState } from "react";
import Text from "../../general/Text";
import Box from "../Box";

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
      <Box onClick={() => setOpen(!open)} padding="10px 10px">
          <Text color="#ffffff" bold>{title}</Text>
      </Box>
      {open && <Box>{children}</Box>}
    </Box>
  );
};

export default Accordion;
