import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const rooms: any = {};

io.on("connection", (socket) => {
  // joins the room on connection or creates room if it doesn't exist
  socket.on("join room", (roomID: any) => {
    if (rooms[roomID]) {
      rooms[roomID].push(socket.id);
    } else {
      rooms[roomID] = [socket.id];
    }

    // notifies users when joining the room
    const otherUser = rooms[roomID].find((id: any) => id !== socket.id);
    if (otherUser) {
      socket.emit("other user", otherUser);
      socket.to(otherUser).emit("user joined", socket.id);
    }
  });

  socket.on("offer", (payload: any) => {
    io.to(payload.target).emit("offer", payload);
  });

  socket.on("answer", (payload: any) => {
    io.to(payload.target).emit("answer", payload);
  });

  socket.on("ice-candidate", (incoming: any) => {
    io.to(incoming.target).emit("ice-candidate", incoming.candidate);
  });
});

app.listen(() => {
  console.log(`Server is running`);
});
