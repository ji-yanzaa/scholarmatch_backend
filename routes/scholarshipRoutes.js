const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarshipController');
const { verifyToken, isAdmin} = require('../middelware/authMiddelware');

// Mendapatkan semua beasiswa
router.get('/', scholarshipController.getAll);

// Mendapatkan detail beasiswa berdasarkan ID
router.get('/:id', scholarshipController.getOne);

// Menambahkan beasiswa baru
router.post('/', verifyToken, isAdmin, scholarshipController.create);

// Memperbarui beasiswa berdasarkan ID
router.put('/:id',verifyToken, isAdmin, scholarshipController.update);

// Menghapus beasiswa berdasarkan ID
router.delete('/:id',verifyToken, isAdmin, scholarshipController.delete);

module.exports = router;