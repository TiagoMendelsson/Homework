const AMR = require ("AMR.json")

module.export = class AMRRepository {
    static async save (AMR) {
        try {
            const {id, name, battery, status} = AMR
            let query = new AMR ({id:id, name:name, battery:battery, status:status});
        } catch (error) {
            console.error(err)
            throw err
        }
    }
    static async list () {
        try {
            const AMRs = await AMR.find ().exec ()
        } catch (err) {
            throw new Error ("No AMRs found")
        }
    }

    static async delete (id) {
       const res = await AMR.findById(AMR(id))
       return res
    }

    static async update (id, AMR) {
        const {id,name, battery, status} = AMR
        const AMRUpdate = await AMR.findById(AMR(id))
        if (AMRUpdate) {
            const result = await AMR.updated( {id:id,name:name,battery:battery,status:status})
            return result;
        }
    }
}