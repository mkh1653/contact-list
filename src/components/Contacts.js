import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";

const Contact = ({ contacts }) => {
  console.log(contacts)
  return (
    <Box>
      <List>
        {contacts.map((contact) => {
          return (
            <ListItem key={contact.id}>
              <ListItemButton sx={{ textAlign: "right" }}>
                <ListItemAvatar>
                  <Avatar src={contact.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.number}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Contact;
