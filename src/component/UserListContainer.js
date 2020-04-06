import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../redux/user/userAction';

const UserListContainer = (props) => {

    const users = props.users;
    const fetchUsers = props.fetchUsers;

    useEffect(() => {
        fetchUsers();
    },[])

    return(
        <div>
           <h2>Users List:</h2>
            <ul>
                { 
                    users.loading ? <li>Loading...</li> :
                    users && users.error ? 
                        <li>{users.error}</li> : 
                        users.users && users.users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        users : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListContainer);