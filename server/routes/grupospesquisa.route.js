const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const grupospesquisaCtrl = require('../controllers/grupospesquisa.controller');
const gruposcapituloCtrl = require('../controllers/gruposcapitulo.controller');
const requireAdmin = require('../middleware/require-admin');
const fileUpload = require('express-fileupload');

const router = express.Router();
module.exports = router;


router.get('/grupos-pesquisa/quem-somos-grupo', asyncHandler(getQuemSomosgp));
router.get('/grupos-pesquisa/pesquisas', asyncHandler(getPesquisasgp));
router.get('/grupos-pesquisa/teses', asyncHandler(getTesesgp));
router.get('/grupos-pesquisa/artigos', asyncHandler(getArtigosgp));
router.get('/grupos-pesquisa/livros', asyncHandler(getLivrosgp));
router.get('/grupos-pesquisa/capitulos', asyncHandler(getCapitulosgp));


router.post('/grupos-pesquisa/quem-somos-grupo', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertQuemSomosgp));

router.put('/grupos-pesquisa/quem-somos-grupo', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateQuemSomosgp));

router.delete('/grupos-pesquisa/quem-somos-grupo/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteQuemSomosgp));

router.post('/grupos-pesquisa/pesquisas', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertPesquisasgp));

router.put('/grupos-pesquisa/pesquisas', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updatePesquisasgp));

router.delete('/grupos-pesquisa/pesquisas:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deletePesquisasgp));

router.post('/grupos-pesquisa/artigos', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertArtigosgp));

router.put('/grupos-pesquisa/artigos', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateArtigosgp));

router.delete('/grupos-pesquisa/artigos/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteArtigosgp));

router.post('/grupos-pesquisa/livros', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertLivrosgp));

router.put('/grupos-pesquisa/livros', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateLivrosgp));

router.delete('/grupos-pesquisa/livros/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteLivrosgp));

router.post('/grupos-pesquisa/capitulos', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertCapitulosgp));

router.put('/grupos-pesquisa/capitulos', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateCapitulosgp));

router.delete('/grupos-pesquisa/capitulos/:id', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(deleteCapitulosgp));

router.post('/grupos-pesquisa/teses', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(insertTesesgp));

router.put('/grupos-pesquisa/teses', [passport.authenticate('jwt', {
    session: false
}), requireAdmin, fileUpload()], asyncHandler(updateTesesgp));

router.delete('/grupos-pesquisa/teses/:id', [passport.authenticate('jwt', {
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



async function getPesquisasgp(req, res) {
    let response = await grupospesquisaCtrl.getPesquisasgp();
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
    let response = await gruposcapituloCtrl.getCapitulosgp();
    res.json(response);
}

async function updateCapitulosgp(req, res) {
    let response = await gruposcapituloCtrl.updateCapitulosgp(req, req.user._id);
    res.json(response);
}

async function insertCapitulosgp(req, res) {
    let response = await gruposcapituloCtrl.insertCapitulosgp(req, req.user._id);
    res.json(response);
}

async function deleteCapitulosgp(req, res) {
    let response = await gruposcapituloCtrl.deleteCapitulosgp(req.params.id);
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