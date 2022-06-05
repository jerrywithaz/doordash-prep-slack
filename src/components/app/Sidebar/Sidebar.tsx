import React, { useCallback } from "react";
import useQuery from "../../../hooks/useQuery";
import { Channel, DirectMessageChannel } from "../../../types";
import List from "../../data/List";
import Text from "../../general/Text";
import Accordion from "../../layout/Accordion";
import Box from "../../layout/Box";

type Data = Channel | DirectMessageChannel;

type Result = { channels: Data[]; direct_messages: Data[] };

const sample_data: Result = {
  channels: [
    { name: "general", unread_messages: false, type: "channel" },
    { name: "competition", unread_messages: true, type: "channel" },
  ],
  direct_messages: [
    { name: "Alex Smith", unread_messages: false, type: "direct_message" },
    { name: "Jeremy Dude", unread_messages: true, type: "direct_message" },
  ],
};

const Sidebar: React.FC = () => {
  const query = useQuery<Result, {}>("sidebar", () =>
    Promise.resolve(sample_data)
  );

  const renderItem = useCallback((item: Data) => {
    return (
      <Box horizontal padding="10px" key={item.name}>
        {item.type === "channel" && (
          <Text
            color="#ffffff"
            bold={item.unread_messages}
            margin="0px 4px 0px 0px"
          >
            #
          </Text>
        )}
        <Text color="#ffffff" bold={item.unread_messages}>
          {item.name}
        </Text>
      </Box>
    );
  }, []);

  return (
    <Box vertical>
      <Accordion title="Channels">
        <List data={query.data.channels ?? []} renderItem={renderItem} />
      </Accordion>
      <Accordion title="Direct Messages">
        <List data={query.data.direct_messages ?? []} renderItem={renderItem} />
      </Accordion>
    </Box>
  );
};

export default Sidebar;
