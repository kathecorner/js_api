function callApi(){
  return ;
}

async function callServer(url, data){
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
      'clientKey': 'test_RKKBP5GHOFFUFJJMJHOJAG7ZIIJKBMI6',
      'x-api-key': 'AQEyhmfxL4PJahZCw0m/n3Q5qf3VaY9UCJ1+XWZe9W27jmlZiv4PD4jhfNMofnLr2K5i8/0QwV1bDb7kfNy1WIxIIkxgBw==-lUKXT9IQ5GZ6d6RH4nnuOG4Bu//eJZxvoAOknIIddv4=-<anpTLkW{]ZgGy,7'
    },
    body: JSON.stringify(data)
  });
  console.log(await response.json());
  return response;
}

function searchApi(){
  const url = 'https://checkout-test.adyen.com/v67/payments';
  loadJSON(url, show, 'jsonp');
}


const jsondata = {
  "reference": "complete_order_12072022_04",
  "amount": {
    "value": 1000,
    "currency": "JPY"
  },
  "paymentMethod": {
    "type": "scheme",
    "number": "5212345678901234",
    "expiryMonth": "03",
    "expiryYear": "2030",
    "holderName": "John Smith",
    "cvc": "737"
  },
  "merchantAccount": "KenjiW",
  "shopperInteraction": "Ecommerce"
}
//callServer("https://httpbin.org/delay/2").then(response => {
callServer("https://checkout-test.adyen.com/v67/payments", jsondata).then(response => {
  console.log(response);
});

//searchAPI();
