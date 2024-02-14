const minCaracteres = (min?: number) => `O campo deve ter pelo menos ${!!min ? min : 6} caracteres`;
const maxCaracteres = (max?: number) => `O campo deve ter no maximo ${!!max ? max : 20} caracteres`;

const message = {
  fields: {
    required: "Campo obrigatório",
    email: "Email inválido",
    min: minCaracteres,
    max: maxCaracteres,
  },
  alert: {
    loginSuccess: "Login efetuado com sucesso!",
    loginInvalid: "Email ou senha inválidos",
    loginError: "Erro ao efetuar login",
    failedRequest: "Falha na requisição",
    isEditing: "Cadastro está sendo editado",
  },
};

export const { fields, alert } = message;
