import React  from 'react';
import QRCode from "react-qr-code";
import {Alert, Box, Container, TextField, Typography} from "@mui/material";
import useCheckedError from "../hooks/useCheckedError";

export const QrGenerator = () => {
    const {error, checkedUrl, inputValue, setInputValue} = useCheckedError()

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

                {checkedUrl.length > 0 && <Alert severity="warning">{checkedUrl}</Alert>}

                <TextField
                    id="outlined-basic"
                    label="Write your link"
                    variant="outlined"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />

                <Box sx={{display:'flex', justifyContent: 'center'}}>
                    {error === false && <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                    <Alert severity="success">Greet!</Alert>
                                    <QRCode value={inputValue}/>
                                </Box>
                    }
                </Box>
            </Box>
        </Container>
    );
};
