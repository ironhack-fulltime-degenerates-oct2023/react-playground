import reactLogo from "../assets/react.svg";


function MyContent(){

    const amount = 42;

    const user = {
        firstName: "Alice",
        surname: "Smith"
    }

    const totalId = "total-amount";

    const renderTitle = () => {
        return <h1>This is the title</h1>
    }

    return(
        <>
            {renderTitle()}

            <img src={reactLogo}  />

            <h2>Name: {user.firstName} {user.surname}</h2>
            <h2>{user.firstName.toUpperCase()}</h2>

            
            {/* Display total.... */}
            <h2 id={totalId} className="subtitle">Total: {amount * 2}</h2>

        </>
    );
}

export default MyContent;