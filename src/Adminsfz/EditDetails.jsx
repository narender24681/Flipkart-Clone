import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Card, Image, Text } from "@chakra-ui/react";

export default function EditDetails() {
  const { id } = useParams();
  //   console.log("data id is :- ", id);

  const [movieDetailes, setMovieDetails] = useState({});
  const { electronics } = useSelector((store) => store.adminsReduer);
  //   console.log(electronics);

  // -----------must------------
  useEffect(() => {
    const movieDetailes = electronics.find((ele) => ele.id === +id);
    movieDetailes && setMovieDetails(movieDetailes);
  }, []);
  //   // -----------must------------
  //   console.log(movieDetailes);

  return (
    <div style={{ margin: "15px auto" }}>
      <Card>
        <div
          style={{
            display: "flex",
            gap: "5px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Image w={"48%"} src={movieDetailes.image1} />
          <Image w={"48%"} src={movieDetailes.image2} />
        </div>

        <div style={{ textAlign: "start", padding: "5%" }}>
          <Text fontSize={"1.8rem"} color={"red"}>
            {movieDetailes.brand}
          </Text>
          <Text fontSize={"1.2rem"}>₹ {movieDetailes.price} </Text>
          <Text fontSize={"1.2rem"}>{movieDetailes.category} </Text>
          <Text fontSize={"1.2rem"}>{movieDetailes.name} </Text>
          <Text fontSize={"1.2rem"}>{movieDetailes.title} </Text>
        </div>
      </Card>
    </div>
  );
}
