import styled, { ThemeProvider } from "styled-components"
import { theme } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './redux/store';
import { decrement, increment, incrementByAmount } from "./redux/slice/counterSlice";

const Button = styled.button`
  color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.dark};
  background: ${props => props.theme.dark};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  
  &:hover {
    cursor: pointer;
  }
`;

export function App() {
  
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log({count})

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => dispatch(increment())}
      >
        +1
      </Button>

      <Button
        onClick={() => dispatch(decrement())}
      >
        -1
      </Button>

      <Button
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </Button>
    </ThemeProvider>
  )
}