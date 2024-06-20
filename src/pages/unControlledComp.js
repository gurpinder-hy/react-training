
import { useRef } from "react";
import { useForm } from "react-hook-form"

const UnControlledComp = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        if (emailRef.current && passwordRef.current) {
            console.log("currentValues", emailRef.current.value, passwordRef.current.value)
        }
    }

    return <>
        <div className="container">
            <form onSubmit={(e) => (onSubmit(e))}>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            ref={emailRef}
                            name="email"
                            type="email"
                        />
                        <div className="underline"></div>
                        <label>Email</label>
                    </div>
                    <div className="input-data">
                        <input
                            ref={passwordRef}
                            name="password"
                        />
                        <div className="underline"></div>
                        <label>Password</label>
                    </div>
                </div>
                <div className="input-data textarea">
                    <br />
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>;
};

export default UnControlledComp