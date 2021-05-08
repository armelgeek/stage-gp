import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const ContainerLogin = styled.div `
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  height:100%;
`;
export const FormElement = styled(Form.Element)
`
  padding: 25px 40px 35px;
  width:400px;
`;

export const FormHeading = styled.div `
  padding-bottom: 5px;
  text-transform:uppercase;
  text-align:center;
  ${font.size(21)}
`;
export const Divider = styled.div `
  margin-top: 10px;
  border-top: 1px solid ${color.borderLightest};
`;

export const Actions = styled.div `
margin-top:10px;
`;

export const ActionButton = styled(Button)
`
width:100%;
display:block;
`;