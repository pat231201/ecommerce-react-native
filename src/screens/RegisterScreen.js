import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleRegister = () => {
    const user = {
      username: name,
      email: email,
      password: password,
    };
    axios
      .post('http://192.168.29.112:4000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => {
        Alert.alert(
          'Registeration Failed',
          'An error occured during registration',
        );
        console.log('Registration error occured', err.message);
      });
  };
  return (
    <SafeAreaProvider
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <View>
        <Image
          style={{width: 150, height: 100}}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABdFBMVEX///8AAAAGCAf8/Pz//P///f7/+v/9////9/8GBwn5+fn6///+//37/v//9f+xsbHs7u3/8P/AwMAABwXk5OTR09LY2Niqqqr0///Gx8f/7//MFmG4U336//vMzc2hE1O4ZYrMfaD3xN/coLxsbGzbFmnKHWu3GV7SHGqrGl3suti2L2fKHmhNTU382euBgYH/6P+3WYefn583Nzfr//8dHR1hYWErKys7OzsSFBOVlZW8faHNGW321e+/GmjDG2LJYpOxZJD/2fPHapKqa4VGR0d1dXXbwdC7hp3Pn7fszuCgTXbmmMC+cZeoWXyWWXTWssixQHb5h8Lu3unUjLPefrXZbafMVpOQNF7Ubp+gJmTAdafBQXv9ndeVUnfvr83RSIXXytecA0mniZfMqruvfpbBe5iqmaHBs7qVboDtncyaAFbMo7esP22VIlm8l6z6xuivM22SKFbhoMPFU327XH/7v+fbgqiARV/krcrdD2KXYXWTFJmuAAAb9klEQVR4nO1bC1fbVrqVo2eOLGE5hggZ8zJYFhhjiIFAQGaAEOKGBArttFxm0jttmGlTmHJJmuvpn7/7O5Jfsk2STjKz7iztdCUgndc+53sfVRBixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDF+P1RVkGUZ/+BvGb/850E3ZElkImNMUZiu/7uX8xkgKZLKZMXUJN3WFenfvZzPADA0JPPJwdO6ySTpP5GhbRvmk7kvnh2ePn/hKP+JUmrb5tHzn45/+vbL+Yk5yf53L+czQDrZOd3e/mrp6z9+fbWj/T9n2NcVaAfffPvV2X99fX321R+OTNJDteUzen8YPE7n+wEN3u+K2i0GTD0AsmToTNEUXVEkWVIMSVbwmxy+rByenX/pfX3u+3/6s6MImmbosiYpBF3nLZVkLpdT4VRkOanrkmwzTTM1DY1MU7M0jQaTTU1WdQM/Mtu2oxYrx8ovynKuW8vhfnVRcSxLo3FYTtH0qm2GPW2bSRhYkwTZdGgyRYTjvo2hoZ08mZt7+fIl/TU3d/SkHjZn1s3S2fHZ+XcF/+tH/y0/OThtIp/Pn97knz59ejS9VXY0OWfn4D51Aeupv3p0ePjo0cXF1KMmTvON6S0HrkdXFUWObLysPP3LKXao+8B0VTC/f/XqgrpfzGEzFawz7Klo5g+vLg4vMMXh4avv/2pK8m0MsVlM+tuP30y4Ndf1aq539c1vP4QvbfPPf/ryq5+2vYJ/fPPE/OFibMJzXb9WcyeuJl4TfN/zricbJwocJiZRBU05+fnRJZrRm6szwuvXnosuY6dbGnyPaUT0WXPGsvOOFGFo65L188E3E/M+DVTXJMhBNTxnSdOePD28wopL/uvnf/+bIt16hlgWdsjaeTZfmi0WiyXvdAfyGDLU8tff+de/jpUKXxyVLUGr3Fy5Jb/gL+2Ut7a2pl+eztcKfsH1vslbkm5ICAzsalW3Kqdusbi56f9U2SJM3+x6NbSan3Ig2FGGypw76+al7pPFGYKHs/XG3SxuFkqXOwakW1eb9CHrztZbtzjrvquYEsQCceUtDCGpkmFrN+hQLHjvKopdDYfKKVtXhWLp+btsKZ8yNMm2lUf+7Ozs5pIlyWCjK1Z9yfOL2ZKLxRuyouYMcNQ1Z6m0ubnpvqSwVpJkQ9uZ8vzCbO2LE8kwIn5VG6uVam8sNbosVTUM6ZfrAgbazC5ZVVvTQhZiEnPL0s6xX9iuoBEI3saQRpNlu2qXLwvFTf9sR7FJp4KhROfQzZYuf3K/27FsSctVjV9wOrPFSc2WFVmEkclZNxOl2dmie2qlBEVMYkNhsLSGv+lvunNkhgiG4jzDBs66Y5Yudlsaedot+iV3TklGGYKGbU5BYvzNrHtoGaomNV/KIiYxG543p1RzMgwAAuhBDHl7w0AfZ6kGIb2u6NUka75ixtax600dTH11vjtNZpNZZ75fLE1qugKphHWUbPOGRLJwvaXrisztKkSi7m76RXeafjR0nbGq7Zy6fmm2loex7p7+W3Qv1rbNLoZkaTCQbTcw0GaxVHOfKXbz8LFlSRkyW5mY39FziowZsJbBDPmAgiwqh25pNjtmgW5zsiQMrTM355wcXXnu6yMxJ8raWKFQzE5qZBdlfvqKM5ktFkq1G0VVhCTXFVUoz5c2i94cbyGT4uis4pVKxeyl07Sa6JpjTK54bonUv67AKdhG+JJ7Ojig5LT31eR8kfbgpY7pJQEKSvSphTU2ZolJOfDSA6W0SRHyNRUylFsMc7KKvf/iwinnD95t/8hykMBdsCGGzQ2FI23U6NmuIrclDQyLxFAQ+a82lmVuZ0Fxvi62ZMfOiTktf/aVXyz6/oGlMIhz90KTyfrrZ1uXPsxW4arMkiJJZNPsytrSkimLH5i2EsN3biHKEDs255Ymph1NNy2T5ZBKTWW7GYqSvuWWCtnspQaGzZ7dDCVYAtt8V6vB+B01FUZVk3CjzuUXO7vZkl+63pFsUVGNboYCGFrTZ6VNmOzjMk/Fk81IRjY/AUOZGGaPK3/VqhB+RlIaZcgku3JOknsbQ1mQbemUM5xunpKK08/pRxN5ba5Wmy/WTqUqjHG3oU0KW69vGExKYRMWZxdeE5ZZ/ycYRqU0qRgwsRMN6fs62U0hlxSkKENBssvnJTAcu+0MwVDDGUJKy80V6bqmqOaeV65a5y4E9RozK5H1JpNbr/NoCP+KQ/RPKwgTpWaA9ynOkBhqL/KaepRX5GQOf6CttageGiSlpdqupA7SQ2y7ZJjH0EN/SdNDRcQZylL9f6a0qnHjFqg1ltvDcNq7sXMKnFahUCh5Nxasc+5TSikiaa2M+Ll+IKiS2JchguI8bKlfuzGMtsXuZkgxmLTlwWt6L5VqiyHs8MXVL/C/O36xUPDHHMNWo5Zm2nuWy2mK87wEa1acqOOck7+PoSz2YQjF1iVNMqTKC802lCbDYm1SsXPkg8jrK5WxUrHmzpdBo5XOlMnCuy8pyoZxqOYk03lU+0dx4tCy7ZAhAn67PD9pGaIu7WLb4D6RuUTCUxVnCPeu6OVrBFzF0lnZsGUxSUENYlwwTH4owyT8wDvXjzAUWmv5s1XVOxmaDFtvGwaMj3PjFWdLbh57ILUiMmJY8uDC4JyTSbg97elZoejuliGwIQndNrX864ZpK7I+jXD+H7VHpiJ2z6wK0xN5RUqynNGg0CdbW6oYLJmUERwiqCGGyQ8sriT5GQ5gmDPMvYrdZFjanAVDifIzkNSdxutNiN9uRUKoqDejajAsFbw56pEUk5pp5ZEITOQrptFiqEK9Li8rmq0ptrkEd1O73pJy3TOHDHOiKGEjoR5F99sKwmbEbIinAoYffIa3MFSZdlA3WJMhxG9SQyCMvVe0yrMzRN4UeCMJA+U2Q5zhrwpthKk5R88n0KYsMWa3HLZgKHOvb0BP02x7zi0i/j6VBzFkKkJUN1sExVOEb8jDETB+OoaiLT09ko0OhksVx8IuOr88Q/rvu8dzJLMqXFWHlM7OZs+3OY5fe99927B0FYGt3VI1WTEnz7ZSBrYpV62c1+CrziuR5XKGkpJLSmq1WtnOwhoXJl5ayPchL/qnZCgf/YzkqGVLS/53bwjXSHQ3/aV8RaliXwXVaM1GZwiGSxzHx262sH3Q2KpYmmG04lJz6+rQVGwZ6U9VyVN06ja0SJoYMhQkwa5qO2/IZ7jerxYyNBmJxydjKNvq0QHy84BhFvI3/8elpbdvvnN9ZG/f7WgId0QKNvRWDQbeolRyfzItjvLW6Tmy/OvDaUfWhRbDRxPTCgwNNFyErYQ7cC+d7pmbDCl+h+rVr0qz8Evn01JVl5LJ38tQNwYwlFsMYdEcKIJz6iE79fM64lWJM5Q7Gfrwh3isSJRDWXmkXf7ZjWbnKLmlELpy+cbRFVsCQ2j0O4QtJW8a7lykhDbCEDKNbTDm3FkE4bXtip0LGYriB9tSFbkFMTR1Q4gyxNB7LSmFLnCPr+gIm31QnC/DG0R2kvSwQB4/GYwuqXLDJZ/3FAaJtoIl1cZfvqw4juUE+NXfJDckQBx0PcowHNUwg/KIN2VBpUWLPL78exj2nCEx1LoZKrqsqto0QuJi7a1ZZZEUu8WQO7icCKNaQdxb9K/qWpKKXyJzzmvzl8BxCM+Hv3PLYlLXW5IcYago5qGLbLvgPjMxJjEUP56hpfaT0j4MoXSq9ggJf7aWR3xzK8MkGJqVS1hCd8yisoNNu7O0tzc5ufeHENueD+N0ocGhtGK3CENNr/JKBNzTS02VP5phELU5htrL0DgCQ6GboY3kp1q5LtZq2fktaZCUcoYUliJ6OyU5rU3DX+i24RxebcmOhWRBI2ADlmqz2drljma3jjDKEOZMqV9mZ4ul2vW0xm3pRzKkM3TUXluqS0cHEMs+DLWbmusVs9tWd+YaYahT1UVEjInQMnuqipJoK79cTToK1FlHQsGrIYjLEPx5Nw4SkWYWFmGoS6amTLtImH3/uCJ9NMNnrjubvbSkPgyNnw8UNcoQ7XKKtQuXAUcWiSi7GQq8XpysgGGhOKkkYTut04mGqWnYJ6hdDtGfXYVi1rJIt5HmNoPNCMMcVejN/ARmLHiTlY9iiIOTbigPvXJg9jtXC9ON4P/vP2uGqvIMmOpJsKUIMIUkE+T6fHaz4F+XRUoMOnOLgGHwGQBSAUERTq6Lvl/cNnOKZFTOjh0V8VhO4b4O4mfDUNZmZ705SVDEXAdDucVQ1e0c05QDb3Z20/feVbaXLPkD7nTCoSThibu5WZzYQV7aLqWoKrbYlswf6yYzZF0mhkWKvFumRcvDuvm1Q4uq0q24dIcYui9BjkrHxFCVBHh1vzC7q4Gh3nAPuleAHG1nvlbcrL3VVEQ6wUNZmvbyOc3uYpE0D0uz8FKFL/+4VFGN9xXZmlyg/eV5MPQaCDE7GQK25PyvJTFJDRiWiKHebKNUjqkaONFwmNG+VgrPkBhKUB+JjknY4np4oedM2Rhzt7pXoBi6dUjFAq+uSs38OikQQyXCUNsZIz/s+/NgqH8gQzJvFjLZUm1Xq1aVVtVSVaH0tja3xwthyAsUklJi2MoQtDkITcmd3zGRJLdjmpChQMEORST4Gw0xQcPWNbnuvon4FyqYkHvN1g6VdtlUmHudFyIMBcGkAiN0GhmAan8gQxIwkrdScX6nWtWEJsMkL4lbr46MqqGBoaTs0hkuma0gmyrvtVmw3nU67gbL81kwbJAegiJ5C6aYjxBz1a7LyC+cQ68RWbWCUNoZ86EDXsVu6gAiIW9Ki35BYCDv8krFzWJh7MPPkBgqlataiS4glGa9hYrLTFa0Jz86EmYlhuZuMazItRga5Ut44cLEnKYb4X2AXPcQI7s32BEiaSOBMKxfkEkWvLyZY0rDe+1EViahlXLjUXX71GytQNv1Lx0l4ooMugYBRWKo6x/4iYhEUig1JmqIl3+1mvcWFCAipC//dgKXbBhgqGi7lBZdVlqnpRuicjTBby52TBb4GVWZQ4RWKo2ZmiTjtG0VKdLOMfIub9JiOfOXs80JLbIy7nt2wNDHQFqTYfm8QJeH3U3pntW68ApF/2MYGrYi2Q7Cms3C/LQU3tfrehIaZP6G9FczDRsSoZiXYDh7XW/tMnQvaT4Hw9na2wq8IvUUlSlIQ6noPTGhvLqqwrVXnuOJu71j5HL1ebq1UTo+CqBdQSwn75zBm2/6F1Zz9AZaXkha92KpKGZbS/5HMQwngTfNzm6e/UQOXZeQriKPr7+oh1VPyVDpkgwMa7tlBadKBS9kTLpBcUY2605umXRVbzovfb9AF39XU9MVy6k4lbmpM69Wu8zDB1o3Z0gr/eNfqb/duomiSNe6uUaGUfDPln4xFYOZ1vQ8VNw7rWCjyKO27nSw12b5eQERmC5+oB6GELXy4bXneW9fbjkwf5p58uT773EynKFyUm/sejWENCAzlj+q87tt6CbS77yHcKTmXZ7O1ctHTycnXFAsUUvXuz4/n/f+4k1cLuV3rJOj03m3kKULx/mpRt2UWnUPm500dt0aXsEcuWcXjfp0Y+qqlv3HPzDZ0ZMTuscX2gyxtmmvNuYIotifyqBTTDHtpDG1dH31zYtX33//6tWrH054jEPDyH/97fnYm+2l7e2x7bdv37747QcNpwDd1Ku20th9Ozb2Zuzti73pH/f2DicndwmTu4eHhxcXU1PPGvUTkzHlbz/u7U4e7u4e7h5O7u39oMFJhZJq63/fm6QO6IVOe3uNA4yzd4FR0PTHJx1NiaGBZOVm4jkisNxANv0gK+SbNXNra6s+NzddL5vQIJgKvlGGqlmVSsWxLNM0LcuxEHzpJM0y3XdreOg4kCfk9JpGX67Q9xMYTKMbMYHSXptCHpln/ZAPhGtGO9cVDPrmRTHItFG+wSsDJgJtWeNDY2Gq3sFQN1TDOX1haR/5qZaaA0cJm0U3sFgrBjIMKZQD6CEUT6HLUVBSVbp6JW+BltgXQeclYoP+0Zuw6aMbmDD8S7wMWFa7agsqN9JobAituoei2NVqlTrTR60SjaMbCtSRLJVOU8mtOiTtGQZXKidY5McxxLAiliJSiGPbNB9RCV9K9BGmwb8sohibiBAjaCL/2EiSRMYE/lII7n5lMYyqaQhsC6I64mvwLbANjS6SWoFzIAmmaAc7BP70H18Hh84v6VoUKd9ipmR/LEPyGhQkJ5Md+tsy6cENNlcHHmjiLzLW2ASsg67WxeTGiMSf07cBRtBcb/WHRKp0cCQe3W+E5hdcnU/k9mddvV9aUHWLaXZVGvzJZCo9mh6NYHgkRSqfw2GIw/Q2ne5pE4AFaStlRmEGggCPiSOJVZV0NojYU92d00L4gg52PJwe/6RT4Q9hs8iU+DXNMunO5eJnJlPmTNIupqhHOuw73mY4/PhOohfra/ujlBGKwvLMgz7vmxhWWe+micJiIpFqnYyYWljrHHq1064vP2y9WE3fMlGA9GjXUIkHCx3Tp1ZXWi9WNjqXIww/TNwBEotDafwZ2lgIOK+MwnjSCGw/cRdI7Le3d2gRo6HLuNrHDYkpDLDYlDTSSiG1wKe4c+dxprspui8m1jHSsiCM0IiJh8vBLEN37tGa0ny6jYd8uiFaDbbvLl/Pgwxff3MFmC9Ns2CvuiYRscbMCn8z3HzGhh7wyRYhcPRHWKAxE+muxQ2hU2JU6OdolxN37q2k2ixEkWXW+RQrKRqukyFThX0MtCEwFQwTj1vihW0KOXGMPk7Qb9R9KKBIfVjXWCpbQ6N1vg/t56QQwkbIsKXgqRn+ZDFsme7DUBjBMQ73LR6s0druE7Xm5AwnFQzYg6SYgbyksIoR7H57ZV0MMYu4muC/ibSDnOGMwFIdA4EIg0atjUR2net8usmw/U0qtuzOvcQ43yU11Y+hOjyA4Sgf7TFrR1LY3mCKdG9rrGctsS9whndYawERhrAJqQcBQwy6ytcDgYhUklJQrozAehkK41GGDMunR6v8EFWjH0MGjejLcAE6c48kuDUV7FEw3mgfhkzdwHPOcFltUuzDEJI0FO5XisspJKKbIcnvCDmA6BSqOBJlCLEi3UysZ4Lp+jDElCOJ8R49ZJh+gYvpaltNxMCMwDLxTwS7eySF+4kRajOSaK9Njeoh5mNNKRUhJnh5lzamvQAmQvDuh9NF0ctQhCTQs5GBDAmJ8egTkVzFSKB0mU5DO5K4d48Y8v+/KIKAIfY5sN39GWLktaFAtfHXPp9hjfHDDRniCFcHpRiZPgwX38cQY631nCEd4UOig777wkcwFBln2Db9UYYYbGEotMSYZY0vbx9y0tITdmc90yuhTYaJbobAPncYg6UU04jpjBj1+Ow+rYq7vwTrGO4DGKZGxdsYCuLyaLgFEP90IlTsNqcZtGZ9IpCAYfcZkrZyl/iYH0OEIWZhbMBQovgQJxG63uWOF++V0m70Y9iNQMbWU3zNtNFDONGB6JVSFjy6H07XyZA8eI/TaWEUjliUAzu11rELn5phcASQ00APEbasrw84vy6Grf58ixILgeXtYcjWR4QBw81AsLlTvnNnvVOuPzVDMVD20MVCrGYSo7dUMkKGLbskcg8JEQjCnw6G1ICpmd4lBd0w0ir/McVHXGhb7k/OUAwjsZVUEsEMZHTjtlpN8wxxYjyKJH+DEKoZE3UxpFASDqGfq+ezcqeeDM35MGuaok+uh5gusGczKiML/oANEqtOhsGyxQzC98TjtNAOobosTQqvBzBkCNb4qauBi51p2drPwDBw49SGqasIZsT3nuH+MmFjcQE53AaUkrXdbxAkDQH3N2bWE+v9GZKs3A92kvGI4V6glJ+Joci1Hc1SmHdZiMajvQw7MuH11eXRTJB7tS3N3dbrOwMYisKD9ZQYMgwcRisT/RwMWVNOM/ceDrLtnQwToymOTHqZp/WPh1QxWG54hsvD4+Pj6Y0HgxkOU75FXZIiZTK0bZ/L0tAkTAyPZiXRG3r0YzisMqqNkzQPU76ZWBkJRLtDD2mcocSd/gzJVYQ9RBXrbnvUz8WQpUNVVAcFMxGGQVxL6ZwaBG3j4XQdlgamNN3X0ogtVxH+Hnj9D2TY883s+xmqFKUGqXpK/bAz7PD4IkT8Lo4/E6yoO2qDFen1h9xVPJ5pYx8M7/IMRwwZ3vu0DDlwiPcS91Lva9YnagtzxsWgSNkV0zBxtJchudGeqhwxXA0cccBw9JN6i3+CIVem8Px7GEIX+8Q0osjDis4nGIEM8IhgfADDf/kZCtygcEvRw5AKomEixv1J8BOZ7kzXQiEG3I1yKc1wPezHkMGtjUSd9WdnSGiKaS9Dvq4g2RZTaTEwY+AzI3RX90iX7ybupmjUFGc41IchJduZf/kZBg+Daks/hmGEhIMbWglokUymu8IKkUIc6hc4jERQYuzH8OFaT8D1L2VIR9TDMMyAmbAwExRXEJJGYl/Y49QKHWLgMFaQ7ASGK8pQbFqjz8dQbFYx2qUuIBNKqTigisHvNUaoDs1PdKMrpQ+xEXYMa0eJB/T/HfUu8n4/hndpdz7dGSaC/LD1/wEFZeIEL13fwlCdIRfHC3wriUzPuDQwOvJayBD5V7RpT9LEKgz252cYVHXahSBVDUtRKRjLQQzJzieCMIgqef1GDqrTVGhiYelGjF7mjMNC9cTNn5phYDZJ3oIknlbfFFI+e5NhqGecFb/rSazz3xl70Hcx6ijvuU8miNdF1lIdxojPJj6kI+zpqDYZ3pYTdTC8/VsMMd28h2GBt8eK1VWuNylOJri3aN71cLWjmx5KlGnxLAVDCp/WS5CEl7x+hkwTr4TPiJSS80s7CoMYet7vdwdpBM70/vu+IhkKJG1Q7a+JoDKXyPA7UaoVquJMsOPBBIHVf8BC585te+o+j6yX+VFsJNpZRCdYKKar/Dp5nVNMNYMEWlNqJrHYLzdnRnDftXpbaYKwwRPtYfF2huOJIAd5MBrKc2roceJeIjHDAhnJrARXkvvha5YZWV5NJMKbCLp9paWv9LE0AlunhXJeojBC95yJB+nWYlh6LbEh9k0LUg+DrLvfbVXn+A/5LdDqLSctZsaX+QUpP8W1hdX9/dWFdQqbZ8Z5ITozvEyrvEM3IesLq8DCA14OCLqwzPjGSpiHLo90ajzdi44uNNut4WWSLfOeDxfTI5nMSHpxDXR5085uWNLI8P2HYb/E/ijasqg60s1tJjM81Gy2gBFT/VV2vM91+crj/eVxripMuO0WH1jrvnxf6xiZicvdbUniWHq148lCuke66NOB3mnGe67MGNnxCAaU4QceLrSOvSevFISomnQM16v8YsBnJH1/cXFxY2g0IPSeEYNnPQvpp3iDLhqISmtlYTzNUwaR35pHxhbFDhrcKrY7M9bFMBigffnFmBit+LGeHeZNmNjsGBRwRbGnIe1fYNMDvj1Dx4gRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMz4D/A8Lvsp+++1IBAAAAAElFTkSuQmCC',
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#041E42',
            }}>
            Register your account
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                marginTop: 30,
                backgroundColor: '#D0D0D0',
                paddingVertical: 5,
                borderRadius: 5,
              }}>
              {/* <MaterialIcons name="email" size={24} color="black" /> */}
              <TextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="enter your name"
                style={{
                  color: 'gray',
                  marginVertical: 10,
                  width: 300,
                  fontSize: 16,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginTop: 30,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            {/* <MaterialIcons name="email" size={24} color="black" /> */}
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="enter your e-mail"
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: 16,
              }}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              marginTop: 30,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            {/* <MaterialIcons name="email" size={24} color="black" /> */}
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              placeholder="enter your password"
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: 16,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Keep me logged in</Text>
          <Text style={{color: '#007FFF', fontWeight: '500'}}>
            Forgot password
          </Text>
        </View>
        <View style={{marginTop: 80}} />
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: '#FEBE10',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 6,
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Register
          </Text>
        </Pressable>
        <Pressable
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Already have an account? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
    // </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
