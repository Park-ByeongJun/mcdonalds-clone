function Board() {
    const user = {
        name : 'Hedy Lamarr',
        imageUrl : 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg'
    }

    return (
        <>
            <h1>게시판</h1>
            <img src={user.imageUrl} alt={user.name} />

        </>
    )
}

export default Board;