import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const GiftList = () => {
  return (
    <List>
      <ListItem>
        <ListIcon as={StarIcon} color="yellow.400" /> Regalo 1
      </ListItem>
      <ListItem>
        <ListIcon as={StarIcon} color="yellow.400" /> Regalo 2
      </ListItem>
      <ListItem>
        <ListIcon as={StarIcon} color="yellow.400" /> Regalo 3
      </ListItem>
      <ListItem>
        <ListIcon as={StarIcon} color="yellow.400" /> Regalo 4
      </ListItem>
    </List>
  );
};

export default GiftList;
