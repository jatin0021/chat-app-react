
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Friends Chat</span>
            <span className="title">Sign in</span>
            <form>
                {/* <input type="text" placeholder='enter name' /> */}
                <input type="email" placeholder='enter email' />
                <input type="password" placeholder='set password' />
               
                <button>Sign in</button>
            </form>
            <p>you do not have an account? Register</p>
        </div>
    </div>
  )
}

export default Login