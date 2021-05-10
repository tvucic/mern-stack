import { React, useState, useEffect } from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts'
import useStyles from '../..//styles.js';
import { useDispatch } from 'react-redux';

function Home() {

    const [currentId, setCurrentId] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [setCurrentId, dispatch]);

    return (
        <Grow in>
        <Container>
            <Grid container className={ classes.mainContainer } justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={ setCurrentId } />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={ currentId } setCurrentId={ setCurrentId } />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home
