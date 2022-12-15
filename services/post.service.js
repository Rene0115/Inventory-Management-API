/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import postModel from '../models/post.model.js';

class PostService {
  async createPost(data) {
    const post = await postModel.create(data);
    return post;
  }

  async findAndDeletePostById(id) {
    const postId = await postModel.findByIdAndDelete(id);
    return postId;
  }

  async getPostById(id) {
    const post = await postModel.findOne({ _id: id });
    return post;
  }
}

export default new PostService();
