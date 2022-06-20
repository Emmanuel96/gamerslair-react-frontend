import { connect, io } from "socket.io-client";
import {HOST } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const socket =  io(HOST, {autoConnect:false}) 

socket.on('new-event', ()=>console.log('new-event'))

socket.on("session", async ({ sessionID}) => {
    console.log(sessionID)
    // attach the session ID to the next reconnection attempts
    socket.auth = { sessionID };
    try {
        await AsyncStorage.setItem('@socket_session_id', sessionID)          
    }catch (e) {
        console.log('unable to store socket session')
        logger.error(e)
    }});

exports.socket = socket
