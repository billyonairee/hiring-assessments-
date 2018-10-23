## Authentication
Explain why each system fails, and how to guard against that failure:
- Plaintext passwords
  클라이언트에 사용자 이름과 암호를 전송하고 서버는 그 데이터베이스에 있는 데이터를 비교한다. 일반적인 패스워드는 일반 텍스트를 보내므로 
  암호화 되지 않은 데이터가 노출되기 쉽다.

- Encrypted passwords
  plaintext 와는 다르게 SHA-1 과 같은 알고리즘으로 암호화 되어있지만 외부에서 같은 알고리즘으로 풀다보면 이것또한 
  노출의 위험도를 여전히 가지고 있다.

- Hashed passwords
  Encrypted passwords에 추가적으로 외부인은 알수 없는 솔트된 특정한 패스워드의 문자열을 데이터에 추가하여 알고리즘을 돌려 
  해시 패스워드를 만들고 만들어진 데이터는 웹 사이트에 입력하면 동일한 해시를 다시 수행하고 선택한 암호의 해시 값을 확인하여 중요한
  암호 자체를 저장하지 않고도 암호의 유효성을 확인한다. 이러한 방법도 노출될 위험도를 가지고 있기는 하지만 위에 두가지 보다는 월등히 낮다.

