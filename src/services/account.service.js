import axios from '@/axios';
import authHeader from './auth-header';

const ENDPOINT = '/accounts';

class AccountService {
  async getAccounts() {
    return await axios.get(ENDPOINT, { headers: authHeader() });
  }

  async getAccount(username) {
    return await axios.get(`${ENDPOINT}/${username}`, {
      headers: authHeader(),
    });
  }

  async updateAccount(userId, editProfileRequest) {
    return await axios.put(`${ENDPOINT}/${userId}`, editProfileRequest, {
      headers: authHeader(),
    });
  }
}

export default new AccountService();
