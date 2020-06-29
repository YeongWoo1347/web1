var sentense = "";

function clickFunc(self) {
  sentense = document.getElementById('sentense').value;

  if (isNaN(self.innerText) == true) {
    // 숫자인지 아닌지 판별 true = 문자, false = 숫자
    if (self.innerText == "clear") {
      document.getElementById('sentense').value = "";
      document.getElementById('result').value = "";
      console.log("sentense cleared.");
    } else if (self.innerText == "<") {
      sentense = sentense.substr(0, sentense.length - 1);
      document.getElementById('sentense').value = sentense;
      console.log("sentense deleted.");
    } else if (self.innerText == "(" || self.innerText == ")") {
      document.getElementById('sentense').value += self.innerText;
      if (is_pair(document.getElementById('sentense').value) == false) {
        document.getElementById('bracket').innerText = ")"
      } else {
        document.getElementById('bracket').innerText = "("
      }
    } else if (self.innerText == "=") {
      //연산 결과 보여주기
      calSentense(sentense);
    }
    else {
      //연산자가 로직에 맞는지 판단하는 함수.
      opInsert(self.innerText);
    }
  } else {
    // 숫자
    document.getElementById('sentense').value += self.innerText;
  }
}

function calSentense(sentense){
  if (is_pair(sentense)==true){
    try{
        console.log(eval(sentense))
        document.getElementById('result').value = eval(sentense);
    } catch(e){
      alert('연산자를 확인해보세요')
    }
  } else {
    alert('괄호를 확인해보세요')
  }
}

function opInsert(selfValue) {
  document.getElementById('sentense').value += selfValue;
}

function is_pair(s) {
  var arr = s.split('');
  var zero = 0;
  for (var i in arr) {
    if (arr[i] === '(') zero += 1;
    else if (arr[i] === ')') zero -= 1;
    if (zero < 0) return false;
  }
  return zero === 0;
}
