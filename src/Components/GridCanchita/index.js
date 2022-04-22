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

const data = [
  {
    "id": 1,
    "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 },
    "days": ["Lunes","Martes","Miércoles","Jueves"],
    "schema": ["8:00","16:00"]
  },
  {
    "id": 2,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 3,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 4,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
    {
    "id": 5,
    "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 6,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 7,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 8,
   "title": "Canchita Pepe San Miguel",
    "price": 50.00,
    "description": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.y",
    "category": "Calle Monterrey 258 7° Nivel C.C Caminos del Inca - Surco, Lima.",
    "image": "http://www.lajugadaperu.com/img/nosotros%20la%20jugada.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  }
]

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
          <Link
            to={{
              pathname: `/canchita/${canchita.id}`,
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
            <Button colorScheme='teal' size='xs' ml={'55%'}>
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

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setGridItem(data);
      });
  }, []);

  return (
    <Box p={20}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={0}>
          {gridItem.map((item) => {
            return <GridCanchitaItem key={item.id} canchita={item} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default GridCanchita;
