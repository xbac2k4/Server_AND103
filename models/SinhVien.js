const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const SinhVienModel = new Scheme(
    {
        ma_sinh_vien_ph44315: { type: String, required: true},
        ten_ph44315: { type: String, required: true},
        gioi_tinh_ph44315: { type: String, enum: ['Nam', 'Nữ', 'Khác'], required: true},
        ngay_sinh_ph44315: { type: Date, required: true},
        khoa_hoc_ph44315: { type: Number, required: true},
        lop_ph44315: { type: String, required: false},
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('sinhvien', SinhVienModel)