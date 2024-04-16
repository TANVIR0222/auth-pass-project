import PropTypes from "prop-types"; // ES6
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthPrvider = ({children}) => {
    const authInfo = {name : 'tanvir islam'}
    return (
        <AuthContext.Provider value={authInfo}>{children}
            
        </AuthContext.Provider>
    );
};

export default AuthPrvider;

AuthPrvider.propTypes = {
  children: PropTypes.node,
};
