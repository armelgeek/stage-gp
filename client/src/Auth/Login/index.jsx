import React from 'react';
import { useHistory } from 'react-router-dom';
import {ContainerLogin,
    FormElement,
    FormHeading,
    Divider,
    Actions,
    ActionButton,
} from './Styles';
import api from 'shared/utils/api';
import { Form } from 'shared/components';
const Login = () => {

    const checkLogin = async (...args) => {
        try {
          const { authToken } = await api.post('/login');
          storeAuthToken(authToken);
          const history = useHistory();
          history.push('/');
        } catch (error) {
        }
      };
return <ContainerLogin>
    <Form
      enableReinitialize
      initialValues={{
          email: '',
          password: ''
      }}
      validations={{
        email: [Form.is.required(),Form.is.email()],
        password: Form.is.required() ,
      }}
      onSubmit={async (values, form) => {
        try{
            await checkLogin(...values);
        } catch (error) {
        //    Form.handleAPIError(error, form);
        }
      }}
    >
            <FormElement>
                <FormHeading>Se connecter</FormHeading>
                <Divider/>
                <Form.Field.Input
                  name="email"
                  label="Adresse e-mail"
                />
                 <Form.Field.Input
                  name="password"
                  label="Mot de passe"
                />
                <Actions>
                    <ActionButton type="submit" variant="primary" >
                       Connexion
                   </ActionButton>
                </Actions>
            </FormElement>
    </Form>
       </ContainerLogin>;
};
export default Login;