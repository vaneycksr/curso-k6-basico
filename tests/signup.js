import http from 'k6/http';
import { sleep, check } from 'k6';

import uuid from './libs/uuid.js'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {

  const url = 'http://localhost:3333/signup'

  const payload = JSON.stringify({email: `${uuid.v4().substring(24)}@qa.academy.com.br`, password: 'qwe123'})

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  const res = http.post(url, payload, headers);

  console.log(res.body);
  
  check(res, {
    'status should be 201': (r) => r.status === 200
  })

  sleep(1);
}
