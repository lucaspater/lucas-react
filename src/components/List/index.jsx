

const List = () => {

    const numbers = [1, 2, 3, 4]

    return(

        <ul>
            {
                numbers.map(item => {
                    return(
                    <li>{item}</li>
                    )
                })
            }

        </ul>
    )
}

export default List