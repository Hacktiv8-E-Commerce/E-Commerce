import React from "react"
import { Button, Stack, } from "react-bootstrap"
import Avatar from 'react-avatar';

export default function Btnlogintrue({ name }) {
    return (
        <Button variant="outline-light" className="shadow-none" style={{ color: 'black', border: 'none' }}>
            <Stack direction="horizontal" gap={3}>
                <Avatar src="/assets/vkontakte.jpg" size="40" round={true} className="my-auto" />
                <p className="my-auto">{name}</p>
            </Stack>
        </Button>
    )
}