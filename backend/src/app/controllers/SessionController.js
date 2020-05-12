import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(/^[0-9]*$/)
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Dados inválidos' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      res.status(401).json({ error: 'Senha inválida' });
    }

    const { id, name, admin } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        admin,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
