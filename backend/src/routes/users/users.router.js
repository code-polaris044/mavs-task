import authService from '../../services/auth/AuthService.js';
import express from 'express';

const router = express.Router();

/**
 * ユーザー新規登録
 */
router.post('/createUser', async (req, res, next) => {
  try {
    // フロントエンドからのリクエストデータを取得
    const { name, email, password } = req.body; //リクエストデータを分割代入
    // 返却用データを生成
    const body = {
      email: email,
      name: name,
      password: password,
    };

    // 登録したユーザー情報をフロントエンドに返す
    res.status(200).json(body);
    // res.status(200).json(body);
    console.log(body);
  } catch (error) {
    console.error(error);
    res.status(500).json(body);
  }
});

export default router;
