import articleService from '../../services/articles/ArticleService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';
// import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
// const id = uuidv4();
// console.log(id);

/**
 * メモ新規登録
 */
router.post('/createArticle', async (req, res, next) => {
  //本当はauthenticateできちんとtokenを設定したい
  // router.post('/createArticle', authenticate, async (req, res, next) => {
  try {
    const { title, content, token } = req.body;
    console.log('/createArticle', title, content);
    const body = {
      token: token,
      title: title,
      content: content,
    };
    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
