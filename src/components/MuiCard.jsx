import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

/**
 * [Card 컴포넌트]
 *
 *
 *
 */

export const MuiCard = () => {
  return (
    <Box width="500px" height="500px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The library for web and native user interfaces
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">SHARE</Button>
          <Button size="small">LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
