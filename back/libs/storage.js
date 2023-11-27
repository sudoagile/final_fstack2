const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, './storage/imgs');
    },
    filename: function(req, file, cb){
        const originalExtension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${originalExtension}`);
    }
});

// Filtrar solo imágenes
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('No es una imagen'), false);
    }
};

// Establecer límites de tamaño de archivo (ejemplo: 5MB)
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // 5MB
});

module.exports = upload;
