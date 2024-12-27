import { ProgressBar } from 'react-bootstrap';

function MyProgressBar () {
     const now = 60;
    return(

      < ProgressBar now = {now} label = {`${now}%`}/>


    )
}

export default MyProgressBar ;