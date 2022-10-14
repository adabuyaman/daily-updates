import PageTemplate from "../../components/PageTemplate/PageTemplate";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../config/firebase";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { AuthErrorCodes } from "firebase/auth";
import WithGoogleButton from "../../components/Buttons/WithGoogleButton/WithGoogleButton";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginError = (errorCode) => {
        switch (errorCode) {
            case AuthErrorCodes.USER_DELETED:
                return "There are no user with the provided email, please try again";
            default:
                return "Something went wrong";
        }
    }

    const handleLogin = async () => {
        const loginError = await signInWithEmailAndPassword(email, password);
        setErrorMessage(handleLoginError(loginError.code));
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading, navigate]);

    return (
        <PageTemplate>
            {
                loading ?
                    <Loading />
                    :
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="loginEmail" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="loginEmail" onChange={handleChangeEmail} value={email} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="loginPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="loginPassword" onChange={handleChangePassword} value={password} />
                                </div>
                                <button type="button" onClick={handleLogin} className={`${errorMessage ? 'btn-danger' : 'btn-primary'} btn me-2`}>Login</button>
                                <WithGoogleButton onClick={signInWithGoogle} />
                                {/* <button type="button" onClick={signInWithGoogle} className=" mb-3 btn btn-outline-primary">Login with Google</button> */}
                            </form>
                        </div>

                    </div>
            }
        </PageTemplate>
    );

}

export default LoginPage;