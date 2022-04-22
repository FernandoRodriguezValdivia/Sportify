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
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import spinner from '../../images/loading.gif'

const GridCanchitaItem = ({ canchita }) => {
  const history = useHistory()
  const go = () => {
    history.push({
      pathname: `/canchita/${canchita._id}`,
      state: canchita,
    })
  }
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
          <Link
            to={{
              pathname: `/canchita/${canchita._id}`,
              state: canchita,
            }}
          >
            <Center>
              <Image mt={1} src={canchita.image} w={'95%'} h={'95%'}></Image>
            </Center>
          </Link>
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
        </Box><Spacer />
        <Box>
          <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
            {`Horario: ${canchita.start}:00 h hasta ${canchita.end}:00 h`}
          </Heading>
        </Box>
        <Stack>
          <Box>
            <Heading mt={4} noOfLines={1} size='xs' fontWeight='Normal'>
              Desde S/{canchita.price}
            </Heading>
            <Button colorScheme='teal' size='xs' ml={'55%'} onClick={go}>
              Ver horarios
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

function GridCanchita({url = 'http://localhost:3001/api/soccerField/all'}) {
  const [gridItem, setGridItem] = useState([]);
  const [loading, setLoading] = useState()
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then(({ data }) => {
        setGridItem(data);
        setLoading(false)
      });
  }, []);

  return (
    <Box p={20}>
      {loading? 
            <Center>
            <img src={spinner} alt='cargando' style={{width: '50px'}}></img>
            </Center>
            :
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={0}>
          {gridItem.map((item) => {
            return <GridCanchitaItem key={item._id} canchita={item} />;
          })}
        </SimpleGrid>
      </Box>
      }
    </Box>
  );
}

export default GridCanchita;
