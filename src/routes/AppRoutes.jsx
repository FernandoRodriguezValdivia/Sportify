import NavBar from '../Components/NavBar/NavBar';
import GridCanchita from '../Components/GridCanchita';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canchita from '../Components/Canchita';
import SelecRegister from '../Components/SelecRegister';
import SelecLogin from '../Components/SelecLogin';
import RegisterUser from '../Components/RegisterUser';
import RegisterOwner from '../Components/RegisterOwner';
import LoginUser from '../Components/LoginUser';
import LoginOwner from '../Components/LoginOwner';
import RegistrarCanchita from '../Components/RegistrarCanchita';
import GridOwner from '../Components/GridOwner';
import Reserva from '../Components/Reserva';

function AppRoutes() {
    return (
        <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={(props) => <GridCanchita />} />
        <Route
          path='/canchita/:id'
          component={(props) => <Canchita {...props} />}
        />
        <Route path='/login/user' component={() => <LoginUser />} />
        <Route path='/login/owner' component={() => <LoginOwner />} />

        <Route path='/register/user' component={() => <RegisterUser />} />
        <Route path='/register/owner' component={() => <RegisterOwner />} />
        <Route path='/login' component={() => <SelecLogin />} />

        <Route path='/register' component={() => <SelecRegister />} />
        <Route path='/registercanchita' component={()=><RegistrarCanchita />}/>
        <Route path='/gridowner' component={()=><GridOwner />}/>
        <Route path='/reserva' component={()=><Reserva/>}/>        

        <Route>404 Page </Route>
      </Switch>
    </Router>
    );
  }
  
  export default AppRoutes;

    