import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding: 20px;
`;

export const StyledPicker = styled(Picker)`
  height: 50px;
  width: 80%;
  color: #333;
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #333;
  margin-bottom: -50px;
`;

export const ListContainer = styled.View`
  width: 100%;
  margin-top: 150px;
  border-radius: 12px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: #fff;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 12px;
  width: 362px;
  height: auto;
  justify-content: space-between;
`;

export const ItemImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ItemName = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const ItemDescription = styled.View`
  margin-top: 4px;
`;

export const ItemDescriptionText = styled.Text`
  font-size: 16px;
  color: #666;
`;
