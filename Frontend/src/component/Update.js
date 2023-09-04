import InputControl from "./InputControl";
import styles from "../CSS/create.module.css";
import {useState} from 'react';
import axios from 'axios';

const Update = () =>{
    const [update, setUpdate] = useState({
        name_before: "",
    })
    const [values, setValues] = useState({
        name:"",
        image: ""
    });

    const handleSubmit = async()=>{
      try{
        const data = await axios.patch(`http://localhost:8080/trikl/${update.name_before}`,values);
        console.log(data);
        alert("Data updated");
      }catch(err){
        alert("An error occured!");
        console.log(err);
      }
    }

    return(
        <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Update Data</h1>
        <InputControl
          label="Name_Update"
          placeholder="Enter thing's name to be updated"
          onChange={(event) => {
            setUpdate((prev) => ({ ...prev, name_before: event.target.value }));
          }}
          required
        />
        <InputControl
          label="name"
          placeholder="Enter your updated thing name"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }));
          }}
          required
        />
        <InputControl
          label="image"
          placeholder="Enter updated image url of your thing"
          onChange={(event) => {
            setValues((prev) => ({ ...prev, image: event.target.value }));
          }}
          required
        />

        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
    );
}

export default Update;