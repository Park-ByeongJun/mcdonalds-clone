import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EventEventDetail() {

    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get("/data/events.json")
        .then((res) => {
            const foundEvent = res.data.find(
                (item) => item.id === Number(id)            
            );
            setEvent(foundEvent);
        })
        .catch((err) => {
            console.log("Event Detail Error : " , err);
        })
    });

    if(!event) {
        return <div>로딩중....</div>
    }

    return (
        <>
            <div>
                <h1>이벤트 상세</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><h1>{event.title}</h1></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={event.image} alt="" /></td>
                        </tr>
                        <tr>
                            <td>{event.content}</td>
                        </tr>
                    </tbody>
                </table>
           
        </>
    );
}

export default EventEventDetail;