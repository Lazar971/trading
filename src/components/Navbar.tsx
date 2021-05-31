import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

interface Props {
    loggedIn: boolean,
    onLogin: () => void
}

export default function Navbar(props: Props) {
    return (
        <Menu color='grey' className='sharp-border' borderless inverted fluid >
            <Menu.Item header >
                Navbar
            </Menu.Item>
            <Menu.Item as={Link} to='/' >
                Home
            </Menu.Item>
            {
                props.loggedIn ? (
                    <Menu.Item as={Link} to='/profile' >
                        Profile
                    </Menu.Item>
                ) : (
                    <Menu.Menu className='padded' position='right'>
                        <Button fluid primary onClick={props.onLogin} >Login</Button>
                    </Menu.Menu>
                )
            }
        </Menu>
    )
}
