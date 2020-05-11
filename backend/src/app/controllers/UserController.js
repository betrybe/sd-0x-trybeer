import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required().min(12),
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(/^[0-9]*$/)
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, email, admin } = await User.create(req.body);

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

  async update(req, res) {
    const schema = Yup.object({
      name: Yup.string().required().min(12),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validação falhou' });
    }

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    const { email } = req.body;

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'Este e-mail já está sendo utilizado.' });
      }
    }

    await user.update(req.body);

    const { id, name, admin } = await User.findByPk(req.userId);

    return res.json({
      user: {
        id,
        name,
        email,
        admin,
      },
    });
  }
}

export default new UserController();
