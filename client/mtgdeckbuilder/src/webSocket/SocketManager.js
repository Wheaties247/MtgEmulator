const io = require('./index.js').io
const {VERIFY_USER, USER_CONNECTED, LOGOUT, CARD_SENT, CARD_RECIEVED, MY_STATE} = require('../Events.js');
const {createUser, createMessage, createGame} = require('../Factories')
let connectedUsers= {};

module.exports = (socket) => {
	//connect to socket here
    console.log('Socket id ===> :',socket.id);
    socket.on(VERIFY_USER, (user, cb)=>{
    	if(isUser(connectedUsers, user)){
    		cb({isUser:true, user:null})
    	}else{
    		cb({isUser:false, user:createUser({name:user})})
    	}
    })
    socket.on(USER_CONNECTED, (userInfo=>{
    	connectedUsers = addUser(connectedUsers, userInfo)
    	socket.user = userInfo;
    	console.log('USER_CONNECTED',connectedUsers, userInfo);
    	io.emit(USER_CONNECTED, userInfo)
    }))
    //send state to all when state is sent to socket
    // socket.on(MY_STATE, (mystate=>{
    // 	socket.broadcast.emit(MY_STATE, mystate)
    // }))

    socket.on(CARD_SENT, (card)=>{
    	console.log('SENT CARD TO BACK END', card);
    	io.emit(CARD_RECIEVED, card);
    })
};

function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user.name] = user
	return newList
}
function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}
function isUser(userList, username){
	return username in userList
}