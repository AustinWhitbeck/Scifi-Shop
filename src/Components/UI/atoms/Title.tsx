import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    text: string,
}

const Title = ({ text }: Props) => {
  

    return (
        <Typography variant={"h2"}>
            {text}
        </Typography>
    )
}

export default Title
