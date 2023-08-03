import UserService from '../../services/users/UserService.js';
import express from 'express';

const router = express.Router();
const userService = new UserService();
/**
 * ユーザー新規登録
 */
router.post('/createUser', async (req, res, next) => {
  try {
    // フロントエンドからのリクエストデータを取得
    console.log(req.body);
    const { username, email, password } = req.body; //リクエストデータを分割代入

    // 返却用データを生成
    const body = {
      username: username,
      email: email,
      password: password,
    };
    console.log(body);
    await userService.createUser(username, email, password);
    // 登録したユーザー情報をフロントエンドに返す
    res.status(200).json(body);
    console.log(body);
  } catch (error) {
    console.error(error);
    res.status(500).json(body);
  }
});

export default router;
