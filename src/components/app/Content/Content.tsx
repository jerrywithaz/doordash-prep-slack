import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../data/List';
import Box from '../../layout/Box';
import { Routes, Route } from 'react-router-dom';
import Channel from '../../../pages/Channel';

const Content: React.FC = () => {
    const params = useParams();

    console.log(params);

    const renderItem = useCallback(() => {
        return (
            <Box>

            </Box>
        )
    }, []);

    return (
        <Box vertical flex={1}>
            <Routes>
                <Route path="/channel/:id" element={<Channel />}/>
            </Routes>
            <List data={[]} renderItem={renderItem} />
        </Box>
    )
}

export default Content;
