/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import commentModel from '../models/comment.model.js';

class CommentServices {
  async postComment(data) {
    const comment = await commentModel.create(data);
    return comment;
  }

  async findAndDeleteCommentById(id) {
    const postId = await commentModel.findByIdAndDelete(id);
    return postId;
  }
}

export default new CommentServices();
