function User(props){
    return(
        <>
            <h2>Name: {props.firstName} {props.surname} </h2>
            <h3>Age: {props.age}</h3>
        </>
    );
}

export default User;