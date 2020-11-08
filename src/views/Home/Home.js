import React, { useEffect } from 'react'
import urls from "../../axios/config"
import axios from "axios"
import { Button } from '@material-ui/core';

function Home({history}) {

    async function userInfo() {
        try {
            let token = localStorage.getItem('token');
            let conf = {
                headers: {
                    Authorization: `auth-token ${token}`
                }
            }
            let res = await axios.get(urls.BASE + '/user', conf);
            console.log('home', res);
        } catch (error) {
            console.log(error);
        }
    }
    const upload = () => {
        history.push('/upload');
    }

    useEffect(() => {
        userInfo();
    }, [])


    return (
        <div>
            <h1>
                This is Home
            </h1>
            <Button onClick={upload} >Upload</Button>
        </div>
    )
}

export default Home
