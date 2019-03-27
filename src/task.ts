import {ClientTypes, SocketManager} from "./socket";

const schedule = require('node-schedule');


export default function startTask(app: any) {
    const manager: SocketManager = app.io.manager;
    const job = schedule.scheduleJob('*/5 * * * * *', async () => {
        const clients = manager.getClientList();
        clients.forEach(client => {
            if (client.clientType !== ClientTypes.wework) {
                return false
            }
            // const message = {id: 1970325075060956, message: "[微笑] 报时：" + dayjs().format("YYYY-MM-DD HH:mm:ss")}
            // client.socket.emit("wk.send.text_message", message, (res) => {
            //     console.log("发送消息成功", res.success)
            // });
            // client.socket.emit("wk.get_conversation_list", {}, (data) => {
            //     //console.log("ACK:", JSON.parse(data), data)
            // });
            // client.socket.emit("wk.get_conversation_by_id", {id: 1970325075060956}, (data) => {
            //     //console.log("get_conversation_by_id:", JSON.parse(data))
            // });

            // client.socket.emit('wk.get_login_user', {}, (user) => {
            //     user = JSON.parse(user);
            //     console.log(user.nickname, user.username);
            // });

            //发送一条广播，让客户端自己来注册自己的客户端信息
            //
        });
    });
}
