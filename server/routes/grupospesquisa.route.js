const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const grupospesquisaCtrl = require('../controllers/grupospesquisa.controller');
const requireAdmin = require('../middleware/require-admin');
const fileUpload = require('express-fileupload');

const router = express.Router();
module.exports = router;


router.get('/quemSomos', asyncHandler(getQuemSomosgp));
router.get('/pesquisasgp', asyncHandler(getPesquisasgp));
router.get('/participantesgp', asyncHandler(getParticipantesgp));
router.get('/galeriagp', asyncHandler(getGaleriagp));
router.get('/tesesgp', asyncHandler(getTesesgp));
router.get('/artigosgp', asyncHandler(getArtigosgp));
router.get('/livrosgp', asyncHandler(getLivrosgp));
router.get('/capitulosgp', asyncHandler(getCapitulosgp));


router.post('/quemSomosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertQuemSomosgp));

router.put('/quemSomosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateQuemSomosgp));

router.delete('/quemSomosgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteQuemSomosgp));

router.post('/pesquisasgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertPesquisasgp));

router.put('/pesquisasgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updatePesquisasgp));

router.delete('/pesquisasgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deletePesquisasgp));

router.post('/participantesgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertParticipantesgp));

router.put('/participantesgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateParticipantesgp));

router.delete('/participantesgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteParticipantesgp));

router.post('/galeriagp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertGaleriagp));

router.put('/galeriagp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateGaleriagp));

router.delete('/galeriagp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteGaleriagp));

router.post('/artigosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertArtigosgp));

router.put('/artigosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateArtigosgp));

router.delete('/artigosgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteArtigosgp));

router.post('/livrosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertLivrosgp));

router.put('/livrosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateLivrosgp));

router.delete('/livros/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteLivrosgp));

router.post('/capitulosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertCapitulosgp));

router.put('/capitulosgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateCapitulosgp));

router.delete('/capitulosgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteCapitulosgp));

router.post('/tesesgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertTesesgp));

router.put('/tesesgp', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateTesesgp));

router.delete('/tesesgp/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteTesesgp));



async function getQuemSomosgp(req, res) {
    let response = await grupospesquisaCtrl.getQuemSomosgp();
    res.json(response);
}

async function updateQuemSomosgp(req, res) {
    let response = await grupospesquisaCtrl.updateQuemSomosgp(req, req.user._id);
    res.json(response);
}

async function insertQuemSomosgp(req, res) {
    let response = await grupospesquisaCtrl.insertQuemSomosgp(req, req.user._id);
    res.json(response);
}

async function deleteQuemSomosgp(req, res) {
    let response = await grupospesquisaCtrl.deleteQuemSomosgp(req.params.id);
    res.json(response);
}

async function getParticipantesgp(req, res) {
    let response = await grupospesquisaCtrl.getParticipantesgp();
    res.json(response);
}

async function updateParticipantesgp(req, res) {
    let response = await grupospesquisaCtrl.updateParticipantesgp(req, req.user._id);
    res.json(response);
}

async function insertParticipantesgp(req, res) {
    let response = await grupospesquisaCtrl.insertParticipantesgp(req, req.user._id);
    res.json(response);
}

async function deleteParticipantesgp(req, res) {
    let response = await grupospesquisaCtrl.deleteParticipantesgp(req.params.id);
    res.json(response);
}


async function getArtigogps(req, res) {
    let response = await grupospesquisaCtrl.getArtigosgp();
    res.json(response);
}

async function updateArtigosgp(req, res) {
    let response = await grupospesquisaCtrl.updateArtigosgp(req, req.user._id);
    res.json(response);
}

async function insertArtigosgp(req, res) {
    let response = await grupospesquisaCtrl.insertArtigosgp(req, req.user._id);
    res.json(response);
}

async function deleteArtigosgp(req, res) {
    let response = await grupospesquisaCtrl.deleteArtigosgp(req.params.id);
    res.json(response);
}


async function getGaleriagp(req, res) {
    let response = await grupospesquisaCtrl.getGaleriagp();
    res.json(response);
}

async function updateGaleriagp(req, res) {
    let response = await grupospesquisaCtrl.updateGaleriagp(req.body, req.user._id);
    res.json(response);
}

async function insertGaleriagp(req, res) {
    let response = await grupospesquisaCtrl.insertGaleriagp(req.body, req.user._id);
    res.json(response);
}

async function deleteGaleriagp(req, res) {
    let response = await grupospesquisaCtrl.deleteGaleriagp(req.params.id);
    res.json(response);
}



async function getPesquisasgp(req, res) {
    let response = await grupospesquisaCtrlCtrl.getPesquisasgp();
    res.json(response);
}

async function updatePesquisasgp(req, res) {
    let response = await grupospesquisaCtrl.updatePesquisasgp(req, req.user._id);
    res.json(response);
}

async function insertPesquisasgp(req, res) {
    let response = await grupospesquisaCtrl.insertPesquisasgp(req, req.user._id);
    res.json(response);
}

async function deletePesquisasgp(req, res) {
    let response = await grupospesquisaCtrl.deletePesquisasgp(req.params.id);
    res.json(response);
}



async function getTesesgp(req, res) {
    let response = await grupospesquisaCtrl.getTesesgp();
    res.json(response);
}

async function updateTesesgp(req, res) {
    let response = await grupospesquisaCtrl.updateTesesgp(req, req.user._id);
    res.json(response);
}

async function insertTesesgp(req, res) {
    let response = await grupospesquisaCtrl.insertTesesgp(req, req.user._id);
    res.json(response);
}

async function deleteTesesgp(req, res) {
    let response = await grupospesquisaCtrl.deleteTesesgp(req.params.id);
    res.json(response);
}

async function getCapitulosgp(req, res) {
    let response = await grupospesquisaCtrl.getCapitulosgp();
    res.json(response);
}

async function updateCapitulosgp(req, res) {
    let response = await grupospesquisaCtrl.updateCapitulosgp(req, req.user._id);
    res.json(response);
}

async function insertCapitulosgp(req, res) {
    let response = await grupospesquisaCtrl.insertCapitulosgp(req, req.user._id);
    res.json(response);
}

async function deleteCapitulosgp(req, res) {
    let response = await grupospesquisaCtrl.deleteCapitulosgp(req.params.id);
    res.json(response);
}

async function getLivrosgp(req, res) {
    let response = await grupospesquisaCtrl.getLivrosgp();
    res.json(response);
}

async function updateLivrosgp(req, res) {
    let response = await grupospesquisaCtrl.updateLivrosgp(req, req.user._id);
    res.json(response);
}

async function insertLivrosgp(req, res) {
    let response = await grupospesquisaCtrl.insertLivrosgp(req, req.user._id);
    res.json(response);
}

async function deleteLivrosgp(req, res) {
    let response = await grupospesquisaCtrl.deleteLivrosgp(req.params.id);
    res.json(response);
}