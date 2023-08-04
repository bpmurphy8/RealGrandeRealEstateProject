import { useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate();
    let clickHandler = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className="row bg-warning">
                <div className="col-sm-3">
                    <img className="img-thumbnail w-25" src='logo.png' alt='logo here'/>
                </div>
                <div className="col-sm-7 mt-5"><h3>Making world a better place.. Houses to Homes</h3></div>
                <div className="col-sm-2 mt-5">
                    <button type="button" onClick={clickHandler} className="btn btn-primary"> Login</button>
                </div>
            </div>
        </div>
    );
}
//     return ( 
//         <div className="row bg-warning">
//             <div className="col-sm-3"> 
//                 <img className="img-thumbnail w-25" src='{logo}' alt="logo here"/></div>
//             <div className="col-sm-7 mt-5">
//                 <h3>Making world a better place. Houses to Homes</h3>
//             <div className="col-sm-2 mt-5"><button type="button" onClick={clickHandler} class="btn btn-primary">Login</button></div>
//                 </div>
//         </div>
//      );
// }
 
export default Header;