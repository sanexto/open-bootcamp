import React, { useEffect, useState } from 'react';

import { getRandomJoke } from '../services/chuckService';

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

const Joke = () => {

    const [joke, setJoke] = useState(null);
    const [likeCount, setLikeCount] = useState(localStorage.getItem('likeCount') ?? 0);
    const [unlikeCount, setUnlikeCount] = useState(localStorage.getItem('unlikeCount') ?? 0);

    useEffect(() => {
        generateJoke();
    }, []);

    const generateJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200)
                    setJoke(response.data);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            });
    };

    const setCount = (key, counter, setCounter) => {
        localStorage.setItem(key, ++counter);
        setCounter(localStorage.getItem(key));
        generateJoke();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4,
            }}
        >
            {joke && (
                <>
                    <Box>
                        <Card
                            sx={{
                                width: 400,
                                margin: 'auto',
                            }}
                        >
                            <CardContent>
                                <Typography variant='body1' textAlign='justify'>
                                    {joke.value}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button startIcon={<ThumbUpRoundedIcon />} onClick={() => setCount('likeCount', likeCount, setLikeCount)}>
                                    <Typography variant='body2'>
                                        {likeCount}
                                    </Typography>
                                </Button>
                                <Button startIcon={<ThumbDownRoundedIcon />} onClick={() => setCount('unlikeCount', unlikeCount, setUnlikeCount)}>
                                    <Typography variant='body2'>
                                        {unlikeCount}
                                    </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            pt: 2,
                        }}
                    >
                        <Button variant='contained' onClick={generateJoke}>
                            Generate
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );

}

export default Joke;
