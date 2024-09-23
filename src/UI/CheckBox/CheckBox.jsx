import styled, {css} from "styled-components";
import checkImg from '../../images/icon-check.png';
import { COLORS } from "../../constants";

const StyledCheckBox = styled.input`
    display: none;

    &:after {
        content: '';
        width: 50px;
        height: 50px;
        background-color: red;
    }
    .active {
        background-image: url(checkImg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 15px;
    }
`;

const CheckBox = ({active}) => {
  return (
    <StyledCheckBox 
        type="checkbox"
        onChange={()=> {}}
        checked={active}
        className={active && 'active'}
    />
  )
}
 
export default CheckBox
