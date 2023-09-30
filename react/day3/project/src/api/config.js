import axios from 'axios'
const axiosInst = axios.create({
    baseURL : "https://api.noroff.dev/api/v1"
});
export default axiosInst;