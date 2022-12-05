import React, {useState} from 'react';
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import QRCode from "react-qr-code";

export const QrGenerator = () => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(null)

    const generateQrCode = (value) => {
        value.indexOf('http://') >= 0 || value.indexOf('https://') >= 0
            ? setError(false)
            : setError(true);
        return value;
    }

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
                <Button
                    onClick={() => generateQrCode(inputValue)}
                    variant="outlined"
                >
                    Generate Qr-Code
                </Button>
                <Box sx={{display:'flex', justifyContent: 'center'}}>
                    {error === false && <QRCode value={inputValue}/>}
                </Box>
            </Box>
        </Container>
    );
};
