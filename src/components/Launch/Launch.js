
const Launch = ({launch})=>{
    const {mission_name,launch_year,links} = launch;

    return(
        <div>
            <div><b>Name: </b>{mission_name}</div>
            <div><b>Launch Year: </b>{launch_year}</div>
            <img src={links.mission_patch_small} />
        </div>
    );
}
export default Launch;