const uuidv4 = require('uuid/v4');

//create user
const createUser = ({name = ""} = {})=>(
{
	id:uuidv4(),
	name
})
//create message
const createMessage = ({message = "", sender = ""} = {})=>(
{	
	id:uuidv4(),
	message,
	sender
})

//create game
const createGame = ({messages = [], name = "community", users = []} = {})=>({
	id:uuidv4(),
	name,
	messages,
	users
})
module.exports = {
	createUser,
	createMessage,
	createGame
}