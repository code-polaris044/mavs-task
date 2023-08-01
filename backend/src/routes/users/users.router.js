import authService from '../../services/auth/AuthService.js';
import express from 'express';

const router = express.Router();

/**
 * ユーザー新規登録
 */
router.post('/createUser', async (req, res, next) => {
  try {
    const body = {
      // 仮
      // name: 'nema',
      // email: 'email',
    };
    res.status(200).json(body);
    console.log(body);
  } catch (error) {
    console.error(error);
    res.status(500).json(body);
  }
});

export default router;
