import React from 'react';
import {sha256} from 'js-sha256';

// const api='https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay'

const Payment = () => {

  const Pay = () => {

    const mt = 'MT'+Math.floor(Math.random()*(10**15)).toString();

    const muid = 'MUID'+Math.floor(Math.random()*(10**5)).toString();

    const ep = '/pg/v1/pay';

    const saltkey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';

    const reqBody = {
      "merchantId": "FINISHLINEONLINE",
      "merchantTransactionId": mt,
      "merchantUserId": muid,
      "amount": 100,
      "redirectUrl": "https://127.0.0.1:3000",
      "redirectMode": "POST",
      "callbackUrl": "https://127.0.0.1:3000",
      "mobileNumber": "9999999999",
      "paymentInstrument": {
        "type": "PAY_PAGE"
      }
    }

    const base64 = 'ewogICAgICAibWVyY2hhbnRJZCI6ICJGSU5JU0hMSU5FT05MSU5FIiwKICAgICAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6IG10LAogICAgICAibWVyY2hhbnRVc2VySWQiOiBtdWlkLAogICAgICAiYW1vdW50IjogMTAwLAogICAgICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly8xMjcuMC4wLjE6MzAwMCIsCiAgICAgICJyZWRpcmVjdE1vZGUiOiAiUE9TVCIsCiAgICAgICJjYWxsYmFja1VybCI6ICJodHRwczovLzEyNy4wLjAuMTozMDAwIiwKICAgICAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAgICAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgICAgICJ0eXBlIjogIlBBWV9QQUdFIgogICAgICB9CiAgICB9CiAgICAgIH0='

    const b64 = window.btoa(
      reqBody
    );

    const xv = sha256(b64+ep+saltkey).toString()+'###1';
    const xv2 ='696e8d55b84d3a59ee75fedb4f7e83f0b467b7378e1a23c0d8e4d61cbd30e2bd'+'###1';
    const req1 = 'ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvcmVkaXJlY3QtdXJsIiwKICAicmVkaXJlY3RNb2RlIjogIlBPU1QiLAogICJjYWxsYmFja1VybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS9jYWxsYmFjay11cmwiLAogICJtb2JpbGVOdW1iZXIiOiAiOTk5OTk5OTk5OSIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9'
    const xv3='2cd3a2cd04ff5b453df11e91f97b29fae10fe22522a29c1ae6b7fad41478d8b5###1';

    const userRequest = {
      request: b64
    }

    console.log(b64, xv);

    // const options = {
    //     method: 'POST',
    //     redirect:'follow',
    //     headers: {
    //       accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'X-VERIFY': '2cd3a2cd04ff5b453df11e91f97b29fae10fe22522a29c1ae6b7fad41478d8b5###1',
    //     },
    //     body: JSON.stringify({
    //       request: 'ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvcmVkaXJlY3QtdXJsIiwKICAicmVkaXJlY3RNb2RlIjogIlBPU1QiLAogICJjYWxsYmFja1VybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS9jYWxsYmFjay11cmwiLAogICJtb2JpbGVOdW1iZXIiOiAiOTk5OTk5OTk5OSIsCiAgInBheW1lbnRJbnN0cnVtZW50IjogewogICAgInR5cGUiOiAiUEFZX1BBR0UiCiAgfQp9'
    //     })
    //   };
      
    //   fetch('apis/pg-sandbox/pg/v1/pay', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         const newURL = response.data.instrumentResponse.redirectInfo.url;
    //         window.location.replace(newURL,302)
    //     })
    //     .catch(err => console.error(err));

        const options = {
          method: 'POST',
          redirect:'follow',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': xv,
          },
          body: JSON.stringify(userRequest)
        };
        
        fetch('apis/pg-sandbox/pg/v1/pay', options)
          .then(response => response.json())
          .then(response => {
              console.log(response)
              // const newURL = response.data.instrumentResponse.redirectInfo.url;
              // window.location.replace(newURL,302)
          })
          .catch(err => console.error(err));    
  }  

  return (
    <div>
        <button onClick={Pay}>Payment</button>
    </div>
  )
}

export default Payment