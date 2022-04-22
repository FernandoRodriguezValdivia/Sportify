import {
  Box,
  Center,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Button
} from "@chakra-ui/react";
import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hour from '../Hour'
import './style.css'

function Canchita({ location }) {
  const id = useParams()
  const { state } = location;
  const [value, onChange] = useState(new Date());

  const isDisabled = ({activeStartDate, date, view }) => {
    return date.getDay() === 1 }
  if (!state) {
    window.location = "/";
  }
  return (
    <>
      <Box>
        <Box p={8} d="flex" alignItems="center">
          <Box ml={4}>
            <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
              <GridItem colSpan={2}>
                <Center>
                  <Image src={state.image} w={48}></Image>
                </Center>
              </GridItem>
              <GridItem colSpan={3}>
                <Stack spacing={4}>
                  <Box>
                    <Heading>Price: ${state.price}</Heading>
                    <Tag mt={2}>{state.category}</Tag>
                  </Box>
                  <Text>{state.description}</Text>
                </Stack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Box>
        <Box w="80vw" display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"center"} margin={"auto"}>
            <Calendar minDate={new Date()} tileDisabled={isDisabled} onChange={onChange} value={value} />
            <Box>
              <Hour 
              day={value.toLocaleDateString().split('/')[0]}
              month={value.toLocaleDateString().split('/')[1]}
              year={value.toLocaleDateString().split('/')[2]}
              soccerFieldId={id}
              />
            </Box>
        </Box>
          
      </Box>
    </>
  );
}

export default Canchita;
