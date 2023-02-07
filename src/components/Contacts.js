import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TodayIcon from "@mui/icons-material/Today";

const Contact = ({ contacts }) => {
  const router = useRouter();
  // console.log(contacts);
  return (
    <Box>
      <List>
        {contacts.length > 0 &&
          contacts.map((contact) => {
            return (
              <ListItem key={contact.id}>
                <ListItemButton onClick={() => router.push(`/${contact.id}`)}>
                  <ListItemAvatar>
                    <Avatar src={contact.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='start'>
                        <div>
                          <span>
                            <PhoneEnabledIcon
                              fontSize='2'
                              sx={{
                                verticalAlign: "middle",
                                marginRight: "4px",
                              }}
                            />
                          </span>
                          <span>{contact.number}</span>
                        </div>
                        <div>
                          <span>
                            <TodayIcon
                              fontSize='2'
                              sx={{
                                verticalAlign: "middle",
                                marginRight: "4px",
                              }}
                            />
                          </span>
                          <span>{contact.birthDate}</span>
                        </div>
                      </Stack>
                    }
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
