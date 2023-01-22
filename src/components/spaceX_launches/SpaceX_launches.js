import {useEffect, useState} from "react";
import axios from "axios";
import Launch from "../Launch/Launch";

const SpaceX_launches = () => {

    const [launches,setLaunches] = useState([]);

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/')
            .then(value => value.data)
            .then(launches => {
                let arr = [];
                for (let launch of launches){
                    if(launch.launch_year!=2020){
                        arr.push(launch);
                    }
                }
                setLaunches([...arr]);
            })
    },[]);
    return(
        <div>{launches.map(launch=> <Launch key={launch.mission_name} launch={launch} />)}</div>
    );
}
export default SpaceX_launches;