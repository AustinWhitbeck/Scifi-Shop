import { Typography } from '@mui/material'


interface Props {
    text: string
}

const PageTitle = ({ text }: Props) => {
    return (
        <Typography>
            {text}
        </Typography>
    )
}

export default PageTitle
