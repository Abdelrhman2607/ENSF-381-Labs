import users from './users.js'
import React from 'react'

function User({ id, first_name, user_group }) {
    return (
        <article>
            <h3>{first_name}</h3>
            <p>User Group: {user_group}</p>
            <p>ID: {id}</p>
        </article>
    );
}

function UserList() {
    const userComponents = users.map(user => <User id={user.id} first_name={user.first_name} user_group={user.user_group} />)
    return (
        userComponents
    );
}

export default UserList;