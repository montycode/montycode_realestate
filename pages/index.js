import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, imgUrl, buttonText, linkName }) => {
  return(
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imgUrl} width={500} height={300} alt='Banner' />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1} <br /> {title2}</Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" >{desc1} <br /> {desc2}</Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <div>
      <h1>Hello World</h1>
      <Banner 
        purpose="Renta una Casa"
        title1="Casas en renta para"
        title2="todos"
        desc1="Explora Departamentos, Villas, Casas"
        desc2="y más..."
        buttonText="Explorar"
        linkName="/search?purpose=for-rent"
        imgUrl="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
      />
      <Flex flexWrap="wrap">
        {/* Obtener propiedades y presentarlas... */}
      </Flex>
      <Banner 
        purpose="Compra una Casa"
        title1="Casas en renta para"
        title2="todos"
        desc1="Explora Departamentos, Villas, Casas"
        desc2="y más..."
        buttonText="Explorar"
        linkName="/search?purpose=for-rent"
        imgUrl="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
      />
      <Flex flexWrap="wrap">
        {/* Obtener propiedades y presentarlas... */}
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&porpuse=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&porpuse=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}