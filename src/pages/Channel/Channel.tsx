import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/data/List";
import Text from "../../components/general/Text";
import Box from "../../components/layout/Box";
import useQuery from "../../hooks/useQuery";
import { Message } from "../../types";

const sample_data: Message[] = [
  {
    id: "1",
    content: "Hey, are you online?",
    date: new Date().toISOString(),
    user: { id: "1", name: "John Smith", photo: "https://" },
  },
];

const Channel: React.FC = () => {
  const params = useParams();
  const query = useQuery<Message[], {}>(`channel/${params.id}`, () =>
    Promise.resolve(sample_data)
  );

  const renderItem = useCallback((item: Message) => {
    return (
      <Box horizontal padding={10} key={item.id}>
        <Box
          width={40}
          height={40}
          backgroundColor="gray"
          margin="0px 10px 0px 0px"
        />
        <Box vertical flex={1}>
            <Box horizontal>
                <Text color="#ffffff" marginRight={10} bold>{item.user.name}</Text>
                <Text color="#ffffff">{new Date(item.date).toLocaleTimeString()}</Text>
            </Box>
          <Text color="#ffffff">{item.content}</Text>
        </Box>
      </Box>
    );
  }, []);

  return (
    <Box vertical flex={1}>
      <List data={query.data ?? []} renderItem={renderItem} />
    </Box>
  );
};

export default Channel;
