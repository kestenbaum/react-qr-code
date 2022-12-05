import React, {useEffect, useState} from 'react';
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import QRCode from "react-qr-code";

export const QrGenerator = () => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        inputValue.indexOf('http://') >= 0 || inputValue.indexOf('https://') >= 0
            ? setError(false)
            : setError(true);

        inputValue === '' && setError(true)
    }, [inputValue])

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: '20px',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>

                <Typography variant="h6" component="h6">
                    QrGenerator
                </Typography>
                {error && <Alert severity="error">Please write link</Alert>}
                <TextField
                    id="outlined-basic"
                    label="Write your link"
                    variant="outlined"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <Box sx={{display:'flex', justifyContent: 'center'}}>
                    {
                        error === false
                            ? <QRCode value={inputValue}/>
                            : <></>
                    }
                </Box>
            </Box>
        </Container>
    );
};
