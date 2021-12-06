// the same code is available in the App.js in todo folder
import React, { useState } from 'react'
import './Todo.css';
import { AddTodo, RemoveToDo, DeleteTodo } from '../actions/Index'
import todo from '../todo.png';
import { useSelector, useDispatch } from 'react-redux';


const Todo = () => {
    const [InputData, setInputData] = useState('')
    const list = useSelector((state) => state.Reducer.list)
    const Dispatch = useDispatch()
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo_logo" />
                        {/* <i class="fas fa-clipboard-list ToDoIco"></i> */}
                        <figcaption>Add Your List Here </figcaption>
                    </figure>

                    <div className="addItems">

                        <input type="text" placeholder=" Add Your Items..."
                            value={InputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fas fa-plus-square add-btn" onClick={() => { Dispatch(AddTodo(InputData), setInputData("")) }}> </i>

                    </div>

                    {/* clear all button  */}

                    {/* To show the data entered  */}
                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3> {elem.data} </h3>
                                        <div className="todo-btn">
                                            <i className="fas fa-trash add-btn" title="Delete Todo" onClick={() => { Dispatch(DeleteTodo(elem.id),) }}> </i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>


                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                            onClick={() => Dispatch(RemoveToDo())}
                        ><span> Remove All </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;