import ArticleService from '../../services/articles/ArticleService.js';
import AuthService from '../../services/auth/AuthService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';

const router = express.Router();
const articleService = new ArticleService();
const authService = new AuthService();
/**
 * メモ新規登録
 */
router.post('/createArticle', async (req, res, next) => {
  //本当はauthenticateできちんとtokenを設定したい
  // router.post('/createArticle', authenticate, async (req, res, next) => {
  try {
    const authorizationHeader = req.headers['authorization'];
    console.log('メモトークン', req.headers['authorization']);

    const token = authorizationHeader.replace('Bearer ', ''); // Bearerを削除してトークンの部分のみを取得
    console.log('Bearerなしトークン:', token);

    const decoded = authService.checkToken(token);
    console.log('トークン分解', decoded);
    const id = decoded.id;
    console.log('createArticle', id);
    const { title, content } = req.body;
    console.log('createArticle', title, content, id);
    const body = {
      id: id,
      title: title,
      content: content,
    };
    await articleService.createMemo(title, content, id);
    console.log('レス', body);
    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
