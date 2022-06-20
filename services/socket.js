import { io } from "socket.io-client";
import {HOST } from "@env";
import AsyncStorage from '@react-native-async-storage/async-storage';

const socket =  io(HOST, {autoConnect:false}) 

// socket.on("session", ({ sessionID, userID }) => {
//     console.log('session')
//     // attach the session ID to the next reconnection attempts
//     // socket.auth = { sessionID };
//     // store it in the localStorage
//     // localStorage.setItem("sessionID", sessionID);
//     // save the ID of the user
//     // socket.userID = userID;
// });

exports.socket = socket
