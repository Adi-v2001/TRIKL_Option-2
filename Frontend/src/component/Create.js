import InputControl from "./InputControl";
import styles from "../CSS/create.module.css";
import {useState} from 'react';
import axios from 'axios';

const Create = () =>{

    const [values, setValues] = useState({
        name: "",
        image: "",
    });

    const handleSubmit = async()=>{
        try{
            const data = await axios.post("http://localhost:8080/trikl",values);
            alert("New Data Created");
            console.log(data);
        }
        catch(err){
            alert("An error occured");
            console.log(err);
        }
    }

    return(
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Create Data</h1>
        <InputControl
          label="name"
          placeholder="Enter your thing name"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }));
          }}
        />
        <InputControl
          label="image"
          placeholder="Enter image url of your thing"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, image: event.target.value }));
          }}
        />

        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
    );
}

export default Create;