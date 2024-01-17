import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { useTrendingMovies } from "../../Hooks/Movies";

function Home() {
  const trending = useTrendingMovies();
  console.log(trending);

  return (
    <Box mx={[10, 15, 20]}>
      <SimpleGrid columns={[3, 5, 7]} spacingX="40px" spacingY="20px">
        {trending.map((item) => {
          return (
            <div key={item.id}>
              <Box w={[100, 150, 200]}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  borderRadius={15}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  alt="Dan Abramov"
                />
                <Text noOfLines={1}>{item.title}</Text>
              </Box>
            </div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
