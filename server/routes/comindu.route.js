const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const cominduCtrl = require('../controllers/comindu.controller');
const requireAdmin = require('../middleware/require-admin');
const fileUpload = require('express-fileupload');

const router = express.Router();
module.exports = router;

router.get('/tags', asyncHandler(getTags));
router.get('/comunidades', asyncHandler(getComunidades));
router.get('/comunidadesById/:comunidade', asyncHandler(getComunidadesById));
router.get('/comunidade/:comunidade/chats/:post', asyncHandler(getChats));

router.get('/user/getInscricoes', passport.authenticate('jwt', {
    session: false
}), asyncHandler(getUserInscricoes));

router.post('/comunidade/:comunidade/postChat/:post/chat', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(postChat));

router.post('/comunidade', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertComunidade));
router.post('/subscribe/:comunidade', passport.authenticate('jwt', {
    session: false
}), asyncHandler(subscribeComunidade));
router.post('/unsubscribe/:comunidade', passport.authenticate('jwt', {
    session: false
}), asyncHandler(unsubscribeComunidade));
router.post('/postSend/:comunidade', passport.authenticate('jwt', {
    session: false
}), asyncHandler(postSend));



async function postChat(req, res) {
    let response = await cominduCtrl.postChat(req.params.comunidade, req.params.post, req.user._id, req.body);
    res.json(response);
}

async function getChats(req, res) {
    let response = await cominduCtrl.getChats(req.params.comunidade, req.params.post);
    res.json(response);
}

async function postSend(req, res) {
    let response = await cominduCtrl.postSend(req.params.comunidade, req.user._id, req.body);
    res.json(response);
}
async function subscribeComunidade(req, res) {
    let response = await cominduCtrl.subscribeComunidade(req.params.comunidade, req.user._id);
    res.json(response);
}
async function unsubscribeComunidade(req, res) {
    let response = await cominduCtrl.unsubscribeComunidade(req.params.comunidade, req.user._id);
    res.json(response);
}
async function getComunidadesById(req, res) {
    let response = await cominduCtrl.getComunidadesById(req.params.comunidade);
    res.json(response);
}
async function getUserInscricoes(req, res) {
    let response = await cominduCtrl.getUserInscricoes(req.user._id);
    res.json(response);
}

async function getTags(req, res) {
    let response = await cominduCtrl.getTags();
    res.json(response);
}

async function getComunidades(req, res) {
    let response = await cominduCtrl.getComunidades();
    res.json(response);
}

async function insertComunidade(req, res) {
    let response = await cominduCtrl.insertComunidade(req, req.user._id);
    res.json(response);
}
