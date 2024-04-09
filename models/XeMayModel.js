const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const XeMayModel = new Scheme(
    {
        ten_xe_ph44315: { type: String, required: true},
        mau_sac_ph44315: { type: String, required: true},
        gia_ban_ph44315: { type: String, required: true, default: 0},
        mo_ta_ph44315: { type: String, required: false},
        hinh_anh_ph44315: { type: String, required: false},
    },
    {
        timestamps: true,
        // collection: 'xemay'
    }
)

module.exports = mongoose.model('xemay', XeMayModel)