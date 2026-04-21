import axios from 'axios'

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: {
        ...req.headers,
        host: 'aurapan.40.127.156.53.nip.io',
      },
      withCredentials: true,
    })
  } else {
    return axios.create({
      baseURL: '/',
    })
  }
}
