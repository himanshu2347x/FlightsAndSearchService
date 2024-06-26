const { AirportService } = require('../services/index');
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const result = await airportService.create(req.body);
        res.status().json({
            data:result,
            success: true,
            message:Successful
            
        })
    } catch (error) {
        
    }
}
const destroy = async (req, res) => {
    try {
        const 
    } catch (error) {
        
    }
}