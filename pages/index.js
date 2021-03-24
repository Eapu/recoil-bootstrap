import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {
  atom,
  useRecoilState,
  useResetRecoilState,
  selector,
  useRecoilValue,
} from 'recoil';

const countAtom = atom({
  key: 'count-atom',
  default: 10,
});

const fontSizeSelector = selector({
  key: 'font-size-selector',
  get: ({ get }) => {
    const count = get(countAtom);
    const fontSize = count * 4;
    return fontSize;
  },
});

const Index = (props) => {
  const [count, setCount] = useRecoilState(countAtom);
  const resetCount = useResetRecoilState(countAtom);
  const fontSize = useRecoilValue(fontSizeSelector);

  const countValue = useRecoilValue(countAtom);
  const percentage = useRecoilValue(countAtom)

  return (
    <Container fluid>
          <ProgressBar now={percentage} label={`${percentage}% completed`} />

      <br></br>
      <h2>The count value is : {count} </h2>
      <h3>The font size of potty is : {fontSize} px </h3>

      <Button onClick={() => setCount(count + 1)}>Increase count</Button>
      <Button onClick={resetCount}>reset count</Button>
      
      <Row className="justify-content-md-center">
    
        <p style={{ fontSize: fontSize }}>👾</p>
 
      </Row>
      </Container>

  );
}



export default Index;

