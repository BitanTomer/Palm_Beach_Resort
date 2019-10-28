import React from 'react';
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import {RoomConsumer} from "../context"
import Loading from "./Loading";
import Room from "./Room";

function RoomContainer() {
    return(
        <RoomConsumer>{
            value =>{
            const {loading, sortedRooms, rooms} = value;
                if(loading){
                    return <Loading />;
                }

                return (
                    <div>
                        <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>
    )
}

export default RoomContainer;

