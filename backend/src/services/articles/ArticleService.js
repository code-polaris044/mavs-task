import db from '../../models/index.js';

class ArticleService {
  /**
   * メモ情報登録
   * @param {string} title メモタイトル
   * @param {string} content メモコンテンツ
   * @returns {Object} 登録されたメモ情報
   */
  async createMemo(title, content) {
    console.log('createMemo', title, content);
    try {
      // articlesテーブルに新しいメモを登録
      const newMemo = await db.Articles.create({
        title: title,
        content: content,
      });

      // 登録されたメモ情報を返す
      return newMemo;
    } catch (error) {
      // エラーハンドリング
      console.error('メモ登録エラー:', error);
      throw error;
    }
  }

  /**
   * 記事一覧取得
   * @param user_id
   * @return ランダム値
   */
  getArticleList(user_id) {
    return [{}];
  }
  /**
   * 記事情報取得
   * @param user_id
   * @return ランダム値
   */
  getArticle(user_id, article_id) {
    return {};
  }
}

export default ArticleService;
