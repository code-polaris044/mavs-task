import authService from '../../services/auth/AuthService.js';
import express from 'express';

const router = express.Router();

/**
 * ユーザー新規登録
 */
router.post('/createUser', async (req, res, next) => {
  try {
    let res = {};

    const body = {};
    res.json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json(body);
  }
});
/**
 *
 */

export default router;
