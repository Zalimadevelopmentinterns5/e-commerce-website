const tenantsModel = require("../models/tenantsmodel");

exports.getAllTenants = async (req, res) => {
    try {
        const tenants = await tenantsModel.find();
        res.status(200).json(tenants);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTenantById = async (req, res) => {
    const { id } = req.params;
    try {
        const tenant = await tenantsModel.findById(id);
        if (!tenant) {
            return res.status(404).json({ error: "Tenant not found" });
        }   
        res.status(200).json(tenant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTenant = async (req, res) => {
    const { name, email, password, address, phone } = req.body;
    try {
        const newTenant = await tenantsModel.create({
            name,
            email,
            password,
            address,
            phone
        });
        res.status(201).json(newTenant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTenant = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTenant = await tenantsModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedTenant) {
            return res.status(404).json({ error: "Tenant not found" });
        }
        res.status(200).json(updatedTenant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTenant = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTenant = await tenantsModel.findByIdAndDelete(id);
        if (!deletedTenant) {
            return res.status(404).json({ error: "Tenant not found" });

        }
        res.status(200).json(deletedTenant);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
