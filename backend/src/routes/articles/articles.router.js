import ArticleService from '../../services/articles/ArticleService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';

const router = express.Router();
const articleService = new ArticleService();

/**
 * メモ新規登録
 */
router.post('/createArticle', async (req, res, next) => {
  //本当はauthenticateできちんとtokenを設定したい
  // router.post('/createArticle', authenticate, async (req, res, next) => {
  try {
    // const { title, content, token } = req.body;
    const { title, content } = req.body;
    console.log('createArticle', title, content);
    const body = {
      // token: token,
      title: title,
      content: content,
    };
    await articleService.createMemo(title, content);
    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
