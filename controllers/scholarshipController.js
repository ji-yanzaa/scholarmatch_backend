const { Scholarship } = require('../models');

// GET semua beasiswa
exports.getAll = async (req, res) => {
  try {
    const scholarships = await Scholarship.findAll();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET beasiswa berdasarkan ID
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const scholarship = await Scholarship.findByPk(id);
    
    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST tambah beasiswa
exports.create = async (req, res) => {
  try {
    const {
      name,
      provider,
      deadline,
      description,
      requirements,
      documents,
      benefits,
      status
    } = req.body;

    const scholarship = await Scholarship.create({
      name,
      provider,
      deadline,
      description,
      requirements,
      documents,
      benefits,
      status
    });

    res.status(201).json(scholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update beasiswa
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const scholarship = await Scholarship.findByPk(id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await scholarship.update(req.body);
    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE beasiswa
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const scholarship = await Scholarship.findByPk(id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await scholarship.destroy();
    res.json({ message: 'Beasiswa berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};