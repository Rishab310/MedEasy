import Customer from './customerPage';
import Seller from './ownerPage';

<<<<<<< HEAD
const isLoggedIn="customer";
=======
const isLoggedIn="owner";
>>>>>>> jatin
function Profile() {

    if(isLoggedIn==="owner"){
      return (
        <>
<<<<<<< HEAD
        <Customer/>
=======
        <Seller/>
>>>>>>> jatin
        </>
      );
    }
    if(isLoggedIn==="customer"){
      return (
        <>
<<<<<<< HEAD
        <Seller/>
=======
        <Customer/>
>>>>>>> jatin
        </>
      );
    }
}

export default Profile;