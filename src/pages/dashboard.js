import React from "react";
import Header from '../components/header'
import Promo from '../components/promo'
import Items from '../components/items'
import { Stack } from 'react-bootstrap'

function Dashboard() {
    return (
        <>
            <Header />
            <Stack gap={4} >
                <Promo />
                <Items />
            </Stack>
        </>
    )
}

export default Dashboard