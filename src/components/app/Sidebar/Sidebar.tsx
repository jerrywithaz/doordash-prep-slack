import React, { useCallback, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import { Channel, DirectMessageChannel } from "../../../types";
import List from "../../data/List";
import Text, { Link } from "../../general/Text";
import Accordion from "../../layout/Accordion";
import Box from "../../layout/Box";

type Data = Channel | DirectMessageChannel;

type Result = { channels: Data[]; direct_messages: Data[] };

const sample_data: Result = {
  channels: [
    { name: "general", unread_messages: false, type: "channel", id: "18dsjk" },
    { name: "competition", unread_messages: true, type: "channel", id: "h7hu" },
  ],
  direct_messages: [
    {
      name: "Alex Smith",
      unread_messages: false,
      type: "direct_message",
      id: "dhiku",
    },
    {
      name: "Jeremy Dude",
      unread_messages: true,
      type: "direct_message",
      id: "dhuinj",
    },
  ],
};

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const matchPath = useMatch('/channel/:id');

  const query = useQuery<Result, {}>("sidebar", () =>
    Promise.resolve(sample_data)
  );

  const renderItem = useCallback((item: Data) => {
    const url = `/channel/${item.id}`;
    const isActive = matchPath && matchPath.pathname === url;

    return (
      <Box horizontal padding="10px" key={item.name} backgroundColor={isActive ? "red" : undefined}>
        <Link flex={1} to={`/channel/${item.id}`}>
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
        </Link>
      </Box>
    );
  }, [matchPath]);

  useEffect(() => {
      if (query.data?.channels && !matchPath) {
        navigate(`/channel/${query.data.channels[0].id}`)
      }
  }, [query.data?.channels]);

  return (
    <Box vertical flex={1}>
      <Accordion title="Channels">
        <List data={query.data?.channels ?? []} renderItem={renderItem} />
      </Accordion>
      <Accordion title="Direct Messages">
        <List
          data={query.data?.direct_messages ?? []}
          renderItem={renderItem}
        />
      </Accordion>
    </Box>
  );
};

export default Sidebar;
