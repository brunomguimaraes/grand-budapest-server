import { Model } from 'objection'
import { Maybe } from '../__generated__/generated-types'

class Customer extends Model{
    static tableName = 'customers';
    id! : number;
    full_name!: Maybe<string>;
    email!: string;
    password!: string;
    phone!: Maybe<string>;
    created_at?:string;

    static jsonSchema = {
      type:'object',
      required:['full_name', 'email', 'password', 'phone'],

      properties:{
        id: { type:'integer'},
        full_name:{type :'string', min:1, max :255},
        email:{type :'string', min:1, max :255},
        password:{type :'string', min:1, max :255},
        phone:{type :'string', min:1, max :255},
        created_at:{type :'string', min:1, max :255}
      }
    }
}

export default Customer