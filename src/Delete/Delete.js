import React from 'react';
import logo from '../logo.png';
import { Navbar, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo,
            "data": []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log(' Inside view  Tweet')
        console.log(localStorage.getItem('userLoginId'))
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.get('http://localhost:9500/v1/Tweet/getTweetByUser/' + localStorage.getItem('userLoginId'),

            {
                headers: headers

            })
            .then(response => {
                console.log("Viewed tweet successfully");
                this.setState({ data: JSON.parse(JSON.stringify(response.data)) })
                console.log(this.state.data)
                // console.log(this.state.data[0].likesCount);

            }, error => {
                console.error(error);
            })

    }



    handleSubmit= tweetId => e => {
        console.log("Inside add post handle submit functin")
        e.preventDefault();

        this.deletePost(tweetId)
    }

    deletePost = (tweetId) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log('delete  Tweet')
        // let headers = new Headers();

        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.delete('http://localhost:9500/v1/Tweet/' + tweetId,

            {
                headers: headers
            })
            .then(response => {
                console.log("deleted tweet successfully");
                console.log(response.data)
                // localStorage.setItem('tweetId',response.data.tweetId)
                // console.log(response);
                this.props.history.push("/home");
            }, error => {
                console.error(error);
            })
    }



    render() {
        // const imageURL = logo;
        return (
            <>
                <div className="header">

                    <Navbar className="color-nav" fixed="top"    >
                        <h className="tweet">tweet</h> &nbsp;
                    <img style={{ width: "45px", height: "45px" }}
                            src={this.state.imageURL}
                            alt="" />
                        <Navbar.Brand className="view-link1" href="/post" > View </Navbar.Brand>
                        <Navbar.Brand className="viewall-link1" href="/view" > ViewAll </Navbar.Brand>
                        <Button href="/">Logout</Button> {' '}


                    </Navbar>
                </div>

                <div id="uipost">
                {this.state.data.map(element => {
                        return <Form onSubmit={this.handleSubmit(element.tweetId)}>


                        </Form>

                    })}
                </div>



                <div>
                    <Navbar fixed="bottom" bg="dark" className="footer" >
                        Copyright @ 2021
                  </Navbar>
                </div>
            </>
        );
    }
}
export default Edit;