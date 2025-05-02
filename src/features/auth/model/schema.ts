import { z } from 'zod';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const ERROR_MESSAGES = {
  EMAIL: 'Некорректный адрес электронной почты',
  PASSWORD: {
    NONEMPTY: '',
    MIN: 'Пароль должен быть длиной от 8 символов',
    REGEX: 'Пароль должен иметь заглавную и строчную буквы, а также цифру',
  },
  CONFIRM: 'Пароли должны совпадать',
};

export const loginSchema = z.object({
  email: z.string().email(ERROR_MESSAGES.EMAIL),
  password: z.string().nonempty(ERROR_MESSAGES.PASSWORD.NONEMPTY),
});

export const registerSchema = loginSchema
  .extend({
    password: z
      .string()
      .min(8, ERROR_MESSAGES.PASSWORD.MIN)
      .regex(PASSWORD_REGEX, ERROR_MESSAGES.PASSWORD.REGEX),
    confirm: z.string(),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: ERROR_MESSAGES.CONFIRM,
    path: ['confirm'],
  });
