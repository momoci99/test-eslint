import styled from "styled-components";

const Wrapper = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  &:hover {
    background: #333;
    color: #fff;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
