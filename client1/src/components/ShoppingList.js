import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {v1 as uuid} from "uuid";                //to create fake ids for developing

class ShoppingList extends Component {

    //built in state object in React
    //The state object is where you store property values that belongs to the component
    //When the state object changes the component re-renders
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Water'}
        ]
    }

    //To render HTML in a web page
    render() {
        //const {items} = this.state.items
        const items = this.state.items;     //pulling out items from this.state
        console.log(items);
        return(
            <Container>
            <Button 
                color="secondary" 
                size="lg"
                onClick = {() => {
                    const name = prompt('Enter Item:')
                    /*
                    //***** ARROW FUNCTION IN JS
                            hello = val => "Hello " + val;      //val is the parameter
                    if(name){
                        this.setState(state => ({       //setState -> to rerender
                            items: [...state.items, {id: uuid(), name}]     //adds the new item to items states
                        }))
                    }
                    */
                   //my way
                    if(name){
                        this.setState({
                            items: [...items, {id: uuid(), name}]
                        }, () => {
                            console.log('callback value', this.state);      //to see the values in console
                        })
                    }
                }}
            >Add Item
            </Button>

            
            <ListGroup>
            <TransitionGroup className="Shopping-List">
                {items.map(({ id,name }) => (
                    <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="fade"
                    >
                    <ListGroupItem>
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={() => {
                                this.setState(state => ({
                                    items: state.items.filter(item => item.id !== id)       //finds the relevent item and delete it
                                }))
                            }
                                
                            }
                            >
                            &times;
                        </Button>
                        {name}
                    </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ListGroup>
            </Container>
        ) 
    }
}



export default ShoppingList;