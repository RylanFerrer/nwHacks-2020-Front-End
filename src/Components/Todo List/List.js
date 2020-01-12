import React,{useState} from 'react'
import HeaderComponent from '../ComponentHeader'

export default function List() {
    const [listItems,setListitems] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        setListitems([...listItems, event.target.item.value])
        event.target.item.value = ''
    }
    return (
        <div className = "list">
            <HeaderComponent name = "Tasks"/>
            <form onSubmit = {event => handleSubmit(event)}>
                <input placeholder = "Create New Task" className = "list__input"name = "item"></input>
                <button className = "list__submit"type = "submit">+</button>
            </form>
            <div className = "list__container">
                {listItems.map((item,index) => {
                    return (
                        <div className = "list__item" key = {index}>
                            <button className = "list__item-delete" onClick = {() => setListitems(listItems.filter((tem) => tem !== item)) }></button>
                            <h5 className = "list__item-task">{item}</h5>
                        
                        </div>
                    )
                })}
            </div>
           
           
        </div>
    )
}
