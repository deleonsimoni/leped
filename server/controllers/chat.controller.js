const Chat = require('../models/chat.model');

const paginate = require("jw-paginate");

module.exports = {
  getChatUser,
  getChatAdmin,
  insertChat,
  updateChat,
  getChatByID
}

async function getChatByID(idChat) {
  return await Chat
    .findById(idChat)
    .populate({
      path: 'chat',
      populate: {
        path: 'publisher.user',
        model: 'User',
        select: 'socialname image email'
      }
    });
}

async function getChatAdmin(req) {
  const pageSize = 10;
  const page = req.query.page || 1;

  let chat = await Chat
    .find()
    .select('author icReply createAt')
    .populate({
      path: 'author',
      populate: {
        path: 'user',
        model: 'User',
        select: 'email image'
      }
    })
    .sort({
      createdAt: -1,
      icReply: false
    })
    .skip(pageSize * page - pageSize)
    .limit(pageSize);

  const total = await Chat.count();

  const pager = paginate(total, page, pageSize);

  return {
    chat,
    pager,
  };
}

async function getChatUser(idChat) {
  return await Chat
    .findOne({ 'author.user': idChat })
    .populate({
      path: 'chat',
      populate: {
        path: 'publisher.user',
        model: 'User',
        select: 'socialname image email'
      }
    })

}

async function insertChat(mensagem, user) {
  let chat = {};
  chat.author = {
    user: user._id
  };

  chat.chat = [{
    content: mensagem,
    publisher: {
      user: user._id
    }
  }];

  return await new Chat(chat).save();
}

async function updateChat(idChat, mensagem, user) {

  const chat = {
    content: mensagem,
    publisher: {
      user: user._id
    }
  };

  return await Chat.findOneAndUpdate({
    _id: idChat
  }, {
    icReply: user.roles.includes('admin'),
    $addToSet: {
      chat: chat
    }
  }, {
    new: true
  });

}

