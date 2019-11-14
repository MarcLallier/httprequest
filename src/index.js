import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
//put interceptor in index jsaxios.defaults.headers.common['AUTHORIZATION'] = 'AUTH TOKEN'
//axios.defaults.headers.post['Content-Type'] = 'application/json'

//mettre l'interceptor toujour sur index.js le fichier le plus haut
axios.interceptors.request.use(request => {
  console.log(request)
  //Edit the request
  return request // toujours retourner request ou la config request sinon elle est bloquée
}, error => {
   console.log(error,'errooor')
   return Promise.reject(error)
}
)

axios.interceptors.request.use(response => {
  console.log(response)
  //Edit the request
  return response // toujours retourner request ou la config request sinon elle est bloquée
}, error => {
   console.log(error,'errooor')
   return Promise.reject(error)
}
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
