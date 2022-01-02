import React from 'react'

interface Props {
    text: string,
}

const Title = ({ text}: Props) => {

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Title
