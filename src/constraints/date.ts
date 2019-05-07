import {DateSchema, Reference, Schema} from "joi";
import {typeConstraintDecorator, constraintDecorator} from "../core";

export function DateSchema(schemaBuilder?: (schema: DateSchema) => DateSchema) : PropertyDecorator {
    return typeConstraintDecorator([Date, String], (Joi) => {
        let schema = Joi.date();
        if (schemaBuilder) {
            schema = schemaBuilder(schema);
        }
        return schema;
    });
}

export function Iso() : PropertyDecorator {
    return constraintDecorator([Date, String], (schema : Schema) => {
        return (schema as DateSchema).iso();
    });
}

export function Max(limit : number | 'now' | string | Date | Reference) : PropertyDecorator {
    return constraintDecorator([Date, String], (schema : Schema) => {
        return (schema as DateSchema).max(<any>limit);
    });
}

export function Min(limit : number | 'now' | string | Date | Reference) : PropertyDecorator {
    return constraintDecorator([Date, String], (schema : Schema) => {
        return (schema as DateSchema).min(<any>limit);
    });
}

export function Timestamp(type? : 'unix' | 'javascript') : PropertyDecorator {
    return constraintDecorator([Date, String], (schema : Schema) => {
        return (schema as DateSchema).timestamp(type);
    });
}
