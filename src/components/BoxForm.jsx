import React, {useState} from 'react';

const BoxForm = () => {

    const[formInfo, setFormInfo]= useState({
        color:"",
        width:""
    })

    const [listOfBoxes, setListOfBoxes]=useState([])

    const changeHandler=(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
    })
    }

    const addBox = (e)=>{
        e.preventDefault();
        console.log(formInfo)
        setListOfBoxes([...listOfBoxes,formInfo ])
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={(e)=>addBox(e)} className="form-group">
                <div className="form-group">
                    <label>Color:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="color" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Width/Height:</label>
                    <input onChange= {(e)=>changeHandler(e)} type="int" name="width" className="form-control" />
                </div>
                <input type="submit" value="Add" className ="btn btn-primary mt-1"/>
            </form>
            <div className="d-flex flex-wrap">
            {
                listOfBoxes.map((box)=>{
                    return (
                        <div className= "boxeys mt-3 mb-3 me-3" style = {{backgroundColor: box.color, width: `${box.width}px`, height: `${box.width}px`}}>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};


export default BoxForm;