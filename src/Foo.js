function Foo(props){
    return (
        <>
        <h2>{props.title}</h2>
        <ul>
            <li>{props.one}</li>
            <li>{props.two}</li>
            <li>{props.three}</li>
            <li>{props.four}</li>
            <li>{props.five}</li>
        </ul>
        </>
    )
}

export default Foo;