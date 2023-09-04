import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../CSS/get.module.css';

const Get = () =>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:8080/trikl");
            console.log(res.data);
            setData(res.data);
        }
        fetchData();
    },[]);

    return(

        <div style={{ marginTop: "50px" }}>
        <div className={styles['card-container']}>
          {data.map((item) => (
            <div key={item._id} className={styles.card}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Get;