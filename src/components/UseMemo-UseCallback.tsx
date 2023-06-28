import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'

export default {
    title: 'useMemo'
}

export const IndependentCountingWithUseMemo = () => {
    const [a, setA] = useState(7);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => { // useMemo - callback function; counts inside the for loop and memoizes it until 'a' changes
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i;
        }
        return resultA;
    }, [a]); // a is the same until changed


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <hr />
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
        <div>
            Result A: {resultA}
        </div>
        <div>
            Result B: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret);
export const HelpsReactMemo = () => {

    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['John', 'Smith', 'Samantha', 'Anna', 'Bob']);

    const filteredUsers = useMemo(() => {
            let filteredUsers = users.filter(u => u.toLowerCase().indexOf('a') > -1);
            return filteredUsers;
        },
        [users]);

    const addUser =() => {
        const newUsers = [...users, 'Sarah']
        setUsers(newUsers);
    }

    return <div>
        <button onClick={() => setCount(count + 1)}>+ {count}</button>
        <button onClick={addUser}>add user</button>
        <Users users={filteredUsers} />
    </div>
}




export const UseCallbackAction = () => {

    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(['JS', 'TS', 'React', 'Redux', 'Python']);

    const filteredBooks = useMemo(() => {
            let filteredBooks = books.filter(b => b.toLowerCase().indexOf('a') > -1);
            return filteredBooks;
        },
        [books]);

    const memoizedAddNewBook = useMemo(()=> {
        return () => {
            const newBooks = [...books, 'Java']
            setBooks(newBooks);
        }
    }, [books])

    const memoizedAddNewBook2 = useCallback(()=> {
            const newBooks = [...books, 'Java']
            setBooks(newBooks);
    }, [books])

    return <div>
        <button onClick={() => setCount(count + 1)}>+ {count}</button>
        <Book books={filteredBooks} addNewBook={memoizedAddNewBook2} />
    </div>
}

const Books = (props: { books: Array<string>; addNewBook: ()=> void }) => {
    return <div>
        <button onClick={()=> props.addNewBook()}>add book</button>
        { props.books.map((b, i) => <div key={i}>{b}</div>) }
    </div>
}
const Book = React.memo(Books);
