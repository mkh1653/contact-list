import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TodayIcon from "@mui/icons-material/Today";

const Contact = ({ contacts }) => {
  const router = useRouter();
  
  return (
    <Box>
      <List>
        {contacts.length > 0 &&
          contacts.map((contact) => {
            return (
              <ListItem key={contact.id} disableGutters>
                <ListItemButton onClick={() => router.push(`/${contact.id}`)}>
                  <ListItemAvatar>
                    <Avatar src={contact.image} />
                  </ListItemAvatar>
                  <Stack sx={{ width: "100%" }}>
                    <Typography variant='subtitle1'>{contact.name}</Typography>
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
                        <Typography variant='body2' component='span'>
                          {contact.number}
                        </Typography>
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
                        <Typography variant='body2' component='span'>
                          {contact.birthDate}
                        </Typography>
                      </div>
                    </Stack>
                  </Stack>
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

export default Contact;
