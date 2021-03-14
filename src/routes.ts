import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { findMedicoController } from "./useCases/FindMedico";
import { listaEspecialidadeMedicaController } from "./useCases/ListEspecialidadeMedica";
import { readMedicoController } from "./useCases/ReadMedico";
import { saveMedicoController } from "./useCases/SaveMedico";
import { softDeleteController } from "./useCases/SoftDeleteMedico";
import { updateMedicoController } from "./useCases/UpdateMedico";

const routes = Router()

routes.post('/medico', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required().max(120),
        telefoneFixo: Joi.string().required(),
        telefoneCelular: Joi.string().required(),
        crm: Joi.string().required().pattern(/[0-9]{2}[\.][0-9]{3}[\.][0-9]{2}/),
        cep: Joi.string().required().pattern(/[0-9]{8}/),
        complemento: Joi.string(),
        especialidadeMedica: Joi.array().items(Joi.string().required()).required()
    })
}), (request, response) => {
    return saveMedicoController.handle(request, response)
})

routes.put('/medico', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required().max(120),
        telefoneFixo: Joi.string().required(),
        telefoneCelular: Joi.string().required(),
        crm: Joi.string().required().pattern(/[0-9]{2}[\.][0-9]{3}[\.][0-9]{2}/),
        endereco: Joi.object().keys({
            cep: Joi.string().required().pattern(/[0-9]{5}[\-][0-9]{3}/),
            logradouro: Joi.string().required(),
            complemento: Joi.string(),
            bairro: Joi.string().required(),
            uf: Joi.string().required().length(2),
            cidade: Joi.string().required()
        }),
        especialidadeMedica: Joi.array().items(Joi.string().required()).required()
    })
}), (request, response) => {
    return updateMedicoController.handle(request, response)
})

routes.get('/medico/:crm', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        crm: Joi.string().required().pattern(/[0-9]{2}[\.][0-9]{3}[\.][0-9]{2}/)
    })
}),(request, response) => {
    return readMedicoController.handle(request, response)
})

routes.delete('/medico/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), (request, response) => {
    return softDeleteController.handle(request, response)
})

routes.get('/search', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        searchValue: Joi.string().required()
    })
}),(request, response) => {
    return findMedicoController.handle(request, response)
})

routes.get('/listaespecialidade', (request, response) => {
    return listaEspecialidadeMedicaController.handle(request, response)
})

export { routes }