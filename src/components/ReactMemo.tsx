import React, { useState } from 'react'

export default {
    title: 'React.memo demo',
}

const MessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret);
export const Example1 = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Name1', 'Name2', 'Name3']);
    const addUser =() => {
        const newUsers = [...users, 'Name4']
        setUsers(newUsers);
    }
    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <MessageCounter count={count} />
        <Users users={users} />
    </div>
}