export default function Login(props) {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target);
        console.log(props.UI)
    }

    function handleChange(e) {
        console.log(e.target);
        console.dir(e.target);
        console.log(e.target.name);
        // check if the target name is username or password and updates the approdpriate userInfo state based on the result of the operation
        (e.target.name == "username") ? props.setUI({...props.UI, username: e.target.value}) : props.setUI({...props.UI, password: e.target.value})
        // props.setUI({...props.UI, "e.target.name": e.target.value})
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChange} />
                <input type="text" name="password" onChange={handleChange} />
                <button name="submit">SUBMIT</button>
            </form>
        </div>
    );
}
