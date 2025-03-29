import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = 8000;

app.use(cors());

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

const rooms: any = {};

io.on("connection", (socket) => {
  // joins the room on connection or creates room if it doesn't exist
  socket.on("join room", (roomID: any) => {
    if (rooms[roomID]) {
      rooms[roomID].push(socket.id);
    } else {
      rooms[roomID] = [socket.id];
    }

    console.log(rooms[roomID]);

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

  socket.on("send-msg", (payload: any) => {
    const otherUser = rooms[payload.roomID].find((id: any) => id !== socket.id);
    if (otherUser) {
      socket.to(otherUser).emit("msg-receive", { msg: payload.msg });
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
