const AMRService = require ('./AMRService');

module.export = class AMRConsumer {
    
    static async SaveAMR (req, res) {
        try {
            const {id, name, battery, status} = req.body
            const SavedAMR = await AMRService.save(id,name,battery,status)
            res.status(200).json(SavedAMR)
        } catch (err) {
            res.status(500).send({message:`${err.message}`})
        } 
    }

    static async DeleteAMR (req, res) {
        try {
            const {id} = req.body
            const DeleteAMR = await AMRService.delete (id)
            res.status(200).json(DeleteAMR)
        } catch (err) {
            res.status(500).send({message:`${err.message}`})
        }
    }

    static async updateAMR (req,res) {
        try { 
            const id = req.params.id
            const {name, battery, status} = req.body
            const UpdatedAMR = await AMRService.update(id,name,battery,status)
            res.status(200).json(UpdatedAMR)
        } catch ( err) {
            res.status(500).send({message:`${err.message}`})
        }
    }
    
    static async listAMR (res) {
        try { 
            const AMR = await AMRService.list()
            res.status(200).json(AMR)
        } catch (err) {
            res.status(500).send({message:`${err.message}`})
        }
    }
}