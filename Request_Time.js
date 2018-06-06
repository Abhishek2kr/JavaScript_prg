/*function fun() {
  console.log('hi');
  setTimeout(() => {
    console.log('how are you');
  }, 10000);
  console.log('hi 2');
}

fun();
*/
// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();


// POST

const xhr1 = new XMLHttpRequest();
const url1 = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr1.responseType = 'json';
xhr1.onreadystatechange = function() {
  if (xhr1.readyState === XMLHttpRequest.DONE) {
    console.log(xhr1.response);
  }
};
xhr1.open('POST', url1);
xhr1.send(data);