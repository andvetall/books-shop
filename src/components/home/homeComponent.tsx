import React from 'react'
import "./homeComponent.css"
import ImgMediaCard from "./imageMediaCart"
import {DebounceInput} from 'react-debounce-input';
import  Search  from "@material-ui/icons/Search"



export default class HomeComponent extends React.Component <any, any> {
    state: any = {
        books: [],
        value: ''
    }
    componentDidMount(){
        fetch("http://localhost:3000/books").then(
            response => response.json()
        ).then(
            booksList => this.setState(this.state.books = booksList)
        )
    }
    render(){
        return(
            <div>
                <p>Try to find a book you need</p>
                <div
                    style={{
                        margin: "20px"
                    }}
                >
                    <Search/>
                    <DebounceInput
                        style={{
                            borderTop: "none",
                            borderBottom: "solid 1px",
                            borderLeft: "none",
                            borderRight: "none",
                            width: "250px",
                            outline: "0",
                            padding: "5px"
                        }}
                        minLength={2}
                        debounceTimeout={300}
                        onChange={event => this.setState({value: event.target.value})} />
                </div>
                <div className="home-wrapper">
                    {this.state.books.map(
                        (book: any) => {
                            if(book.title.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) ) {
                                return <ImgMediaCard
                                key = {book.id}
                                description = {book.description}
                                title = {book.title}
                                img = {book.img}
                                price = {`${book.price} USD`}
                                id = {book.id}
                            >
                            </ImgMediaCard>
                            }
                             
                        }
                    )}
                </div>
            </div>
        )
    }
    
}
