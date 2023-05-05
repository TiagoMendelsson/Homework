const AMRRepository = require("./AMRRepository")

module.exports = class AMRService {
    static async save (id, name, battery, status) {
        return AMRRepository.save(
            {
                id,
                name,
                battery,
                status
            }
        )

    }

    static async list () {
        return AMRRepository.list() 
    }

    static async  delete(id) {
        return AMRRepository.delete(id)
    }

    static async update (id,name,battery,status) {
        return AMRRepository.update(
            
            {
                id,
               name,
               battery,
               status
            }
        )
    }
}