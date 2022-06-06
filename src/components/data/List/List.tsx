import React from 'react';
import Text from '../../general/Text';
import Box from '../../layout/Box';
import * as Styled from './List.styled';

type ListProps<Item extends Record<string, unknown>> = {
    renderItem: (item: Item, index: number) => JSX.Element;
    data: Item[];
    loading?: boolean;
};

function List<Item extends Record<string, unknown>>({ renderItem, data, loading }: ListProps<Item>) {

    if (loading) {
        return (
            <Box flex={1} alignItems="center" justifyContent="center">
                <Text color="#ffffff">Loading...</Text>
            </Box>
        )
    }
    return (
        <Styled.List>
            {data.map(renderItem)}
        </Styled.List>
    );
}

export default List;
