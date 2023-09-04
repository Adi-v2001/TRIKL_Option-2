import InputControl from "./InputControl";
import styles from "../CSS/create.module.css";
import {useState} from 'react';
import axios from 'axios';

const Delete = () =>{

    const [values, setValues] = useState({
        name:""
    });

    const handleSubmit = async()=>{

        try{
            const data = await axios.delete(`http://localhost:8080/trikl/${values.name}`);
            console.log(data);
            alert("Data deleted");
        }catch(err){
            alert("An error occured!");
            console.log(err);
        }
        
    }

    return(
        <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Delete Data</h1>
        <InputControl
          label="Name"
          placeholder="Enter thing's name to be deleted"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }));
          }}
        />

        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </div>
    </div>
    );
}

export default Delete;