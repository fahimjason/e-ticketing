import axios from 'axios';

const buildClient = ({ req }) => {
    if (typeof window === "undefined") {
        // We are on the server! 
        // requests should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local/...
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });

    } else {
        // We must be on browser!
        return axios.create({
            baseURL: '/'
        });
    }
};

export default buildClient;