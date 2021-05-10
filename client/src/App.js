import React  from 'react'

import { Container} from '@material-ui/core'
import Navabar from './components/Navbar/Navabar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './Auth/Auth';



const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navabar />
                <Switch>
                 <Route exact component={ Home } path="/" />
                 <Route exact component={ Auth } path="/auth" />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
export default App;