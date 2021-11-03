import React from "react";
import Avatar from "react-avatar";
import { Button, Stack } from "react-bootstrap";

function Profile(props) {
  return (
    <Button
      variant="outline-danger"
      className="shadow-none"
      style={props.style}
    >
      <Stack direction="horizontal" gap={3}>
        <Avatar src={props.pic} size="40" round={true} className="my-auto" />

        <p className="my-auto">{props.name}</p>
      </Stack>
    </Button>
  );
}

export default Profile;
