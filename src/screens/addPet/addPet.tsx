import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Label,
  ListContainer,
  ItemContainer,
  ItemImage,
  ItemName,
  ItemDescription,
  ItemDescriptionText,
  TextContainer,
} from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";

const images = {
  image1: require("../../assets/images/Icon.jpg"),
  image2: require("../../assets/images/Icon.jpg"),
  image3: require("../../assets/images/Icon.jpg"),
};

const mock = [
  { id: "1", name: "Barney", image: images.image1 },
  {
    id: "2",
    name: "Loha",
    image: images.image2,
    description: "Último banho dia 10/10/2024",
  },
  { id: "3", name: "Spike", image: images.image3 },
  {
    id: "4",
    name: "Hercules",
    image: images.image3,
  },
  {
    id: "5",
    name: "Furry",
    description: "Última vacina dia 05/03/2023",
    image: images.image3,
  },
];

export function AddPetScreen() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <Container>
      <Label>Selecione:</Label>

      <ListContainer>
        <FlatList
          data={mock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemContainer>
              <ItemImage source={item.image} />
              <TextContainer>
                <ItemName>{item.name}</ItemName>
                {item.description && (
                  <ItemDescription>
                    <ItemDescriptionText>
                      {item.description}
                    </ItemDescriptionText>
                  </ItemDescription>
                )}
              </TextContainer>
              <Icon name="chevron-right" size={24} color="#333" />
            </ItemContainer>
          )}
          contentContainerStyle={{ padding: 16 }}
        />
      </ListContainer>
    </Container>
  );
}
