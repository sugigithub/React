import styled from "styled-components";
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dbdbdb;
  bottom: -14px;
  ::after {
    content: "";
    display: block;
    width: 0%;
    border-bottom: ${(props) => `2px solid ${props.theme.primaryColor}`};
    transition: 0.5s;
    bottom: -15px;
  }
`;
export const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #f6f6f6;
  z-index: 1;
  display: ${(props) => (props.show ? "block" : "none")};
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  max-height: 180px;
  overflow-y: scroll;
  & + div {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: ${(props) => (props.submit ? "2px solid #dbdbdb" : "none")};
  outline: none;
  position: relative;
  font-size: 20px;
  border-radius: 3px;
  padding-left: ${(props) => (props.submit ? "10px" : "0px")};
  color: ${(props) => props.theme.primaryColor};
  & + div {
    display: ${(props) => (props.submit ? "none" : "block")};
  }
  ::placeholder {
    font-size: 16px;
    color: #d4d4d4;
    line-height: 1.2;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    :focus + div {
      ::after {
        width: 100%;
      }
    }
    border-bottom: ${(props) => (props.submit ? "2px solid #dbdbdb" : "none")};
    border-color: ${(props) =>
      props.submit ? props.theme.primaryColor : "none"};
  }
`;
export const FieldWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
export const Label = styled.label`
  font-size: 18px;
  color: #999;
  line-height: 1.8;
  font-weight: 700;
  /* position: relative; */
`;

export const ShowHide = styled.p`
  position: absolute;
  top: 35px;
  left: 85%;
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`;
export const Datalist = styled.datalist`
  display: block;
`;
export const TextArea = styled.textarea`
  height: 125px;
  border: 2px solid #dbdbdb;
  width: 100%;
  outline: none;
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  font-family: inherit;
  resize: none;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
  ::placeholder {
    font-size: 16px;
    color: #d4d4d4;
    line-height: 1.2;
  }
  & + div {
    display: none;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    border-color: ${(props) => props.theme.primaryColor};
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
  }
`;
export const ListItem = styled.li`
  height: 30px;
  border-bottom: 1px solid #dbdbdb;
  padding-left: 5px;
  padding: 7px 0px 0px 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }
`;
export const DropArrow = styled.i`
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: inherit;
`;
export const IconWrapper = styled.div`
  color: ${(props) => props.theme.primaryColor};
`;
export const PreviewImg = styled.img`
  width: 160px;
  height: 100px;
  object-fit: contain;
`;

export const FileInput = styled.input`
  color: transparent;
  outline: none;
  width: 75px;
  ::-webkit-file-upload-button {
    visibility: hidden;
    outline: none;
  }
  ::before {
    content: "Upload";
    display: inline-block;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 3px;
    padding: 12px;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    color: white;
    margin: 10px 0px;
  }
  :hover::before {
    border-color: black;
  }
  :active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
  & + div {
    display: none;
  }
`;

export const PreviewBar = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid white;
`;

export const PreviewText = styled.p`
  padding: 10px;
  font-size: 16px;
`;

export const IngInput = styled.input`
  border: 2px solid #dbdbdb;
  outline: none;
  position: relative;
  font-size: 20px;
  border-radius: 3px;
  padding-left: 10px;
  margin: 15px 0px;
  height: 37px;
  width: ${(props) => props.inpLen};
  color: ${(props) => props.theme.primaryColor};
  ::placeholder {
    font-size: 16px;
    color: #d4d4d4;
    line-height: 1.2;
  }

  :focus {
    ::placeholder {
      color: transparent;
    }
    border-color: ${(props) => props.theme.primaryColor};
  }
`;
export const IngIcon = styled.i`
  height: 100%;
  color: inherit;
  cursor: inherit;
`;

export const IngIconWrapper = styled.div`
  width: 5%;
  text-align: center;
  background-color: #eeeeee;
  cursor: ${(props) => (props.delete ? "pointer" : "move")};
  :hover {
    background-color: ${(props) => (props.delete ? "red" : "#eeeeee")};
    color: ${(props) => (props.delete ? "white" : "unset")};
  }
`;
export const NewIng = styled.button`
  height: 45px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.primaryColor};
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 0px 10px;
  display: block;
  cursor: pointer;
  & + div {
    display: none;
  }
`;
