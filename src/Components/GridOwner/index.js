import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    SimpleGrid,
    Spacer,
    Stack,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';


  const GridCanchitaItem = ({ canchita }) => {
    return (
      <div className='gridCanchitas'>
        <Box
          p={4}
          borderRadius='lg'
          borderWidth='2px'
          _hover={{
            background: 'white',
            color: 'teal.500',
            'box-shadow': '0 0 5px 5px #ddd',
          }}
        >
          <Box>
            <Center>
                <Image mt={1} src={canchita.image} w={'95%'} h={'95%'}></Image>
            </Center>
          </Box>
          <Box></Box>
          <Heading mt={4} noOfLines={1} size='xs' fontWeight='Bold'>
            {canchita.name}
          </Heading>
          <Spacer />
          <Box>
            <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
              {canchita.direction}
            </Heading>
          </Box>
          <Stack>
            <Box>
              <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
                Desde S/{canchita.price}
              </Heading>
              <Button colorScheme='teal' size='xs' ml={'55%'}>
                Ver horarios
              </Button>
            </Box>
          </Stack>
        </Box>
      </div>
    );
  };
  
  

  function GridOwner({url = 'http://localhost:3001/api/soccerField'}) {
    const [gridItem, setGridItem] = useState([]);
  
    useEffect(() => {
      axios
        .get(url,{ headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }})
        .then(({ data }) => {
          setGridItem(data);
        });
    }, []);
  
    return (
      <Box p={20}>
          <Button>
            Cerrar sesión
          </Button>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={0}>
              {gridItem.map((item) => {
                return <GridCanchitaItem key={item.id} canchita={item} />;
              })}
            </SimpleGrid>
          </Box>
        <Box p={4}>
          <Link to={'/registercanchita'}>Agregar canchita</Link>
        </Box>
      </Box>

    );
  }
  
  export default GridOwner;