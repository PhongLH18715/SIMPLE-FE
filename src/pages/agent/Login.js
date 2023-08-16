import React from 'react'

export default function Login() {
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-7" >
                        <div style={{
                            backgroundImage: 'url(https://i.ibb.co/t2tbbh6/pexels-luis-quintero-2471234.jpg)',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            alignItems:'center',
                            justifyContent: 'center'
                        }} className='d-flex'>
<h2 style={{fontSize: '100px',
    fontFamily: 'cursive',
    color: 'cyan'}}>Nextshop</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                        <div className='p-5'>
                            
                            <h3>Sign in</h3>
                            <form action="#!">
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-5">
                                    <input name="login" id="login" className="btn login-btn btn-dark" style={{fontWeight:'bold'}} type="button" defaultValue="Login" />
                                    <a href="#!" className="forgot-password-link">Password?</a>
                                </div>
                            </form>
                            <p>Need an account? <a href="#!">Signup here</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
