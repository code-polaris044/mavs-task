import authService from '../../services/auth/AuthService.js';
import express from 'express';

const router = express.Router();

/**
 * ユーザー新規登録
 */
router.get('/createUser', async (req, res, next) => {
  try {
    // リクエストボディから必要な情報を取得
    const { username, email, password } = req.body;

    // ユーザーサービスのインスタンスを作成
    const userService = new UserService();

    // ユーザー新規登録処理
    const newUser = await userService.createUser(username, email, password);

    const body = {};
    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json(body);
  }
});
/**
 *
 */

export default router;
