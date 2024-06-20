import { useForm } from "react-hook-form"

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return <>
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            name="email"
                            type="email"
                            {...register('email', {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                        />
                        <div className="underline"></div>
                        <label>Email</label>
                        {errors.email && errors.email.type === 'required' && <p>Email Required</p>}
                        {errors.email && errors.email.type === 'pattern' && <p>Invalid Email</p>}
                    </div>
                    <div className="input-data">
                        <input
                            name="password"
                            {...register('password', {
                                required: true,
                                maxLength: 20,
                                minLength: 8
                            })}
                        />
                        <div className="underline"></div>
                        <label>Password</label>
                        {errors.email && errors.email.type === 'required' && <p>Password Required</p>}
                        {errors.email && errors.email.type === 'minLength' && <p>Invalid Password</p>}
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

export default ReactHookForm;