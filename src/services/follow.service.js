import axios from '@/axios';
import authHeader from './auth-header';

const ENDPOINT = '/follow';

class FollowService {
  async follow(userId) {
    let request = {
      userId: userId,
    };
    return await axios.post(ENDPOINT, request, { headers: authHeader() });
  }

  async getUnfollowedUsers() {
    return await axios.get(ENDPOINT, { headers: authHeader() });
  }

  async getFollowCount(userId) {
    return await axios.get(ENDPOINT + `/followcount${userId}`, {
      headers: authHeader(),
    });
  }
}

export default new FollowService();
