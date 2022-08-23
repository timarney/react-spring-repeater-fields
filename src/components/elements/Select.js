import { useSelect } from "downshift";
import styled from "styled-components";

const DropDownContainer = styled.div`
    width: 200px;
    position:absolute;
    top:0px;
    right:0px;
`;

const DropDownHeader = styled.button`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background-color:#FFF;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.12);
  width:100%;
  line-height:24px;
  font-size:16px;
`;

const DropDownList = styled.ul`
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  padding: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  margin:0px;
  margin-top:10px;
  list-style: none;
  background-color:#FFF;
`;

const DropDownListItem = styled.li`
  display:flex;
  align-content:flex-start;
  background: ${props => (props.ishighlighted ? "#f7f9ff" : "")};
  cursor: pointer;
  padding-left: 20px;
  padding-right: 26px;
  padding-bottom: 8px;
  padding-top: 8px;
`;

const DropDownListIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-right: 10px;
    padding-top: 2px;
    text-align: left;
    height: 24px;
    overflow: hidden;
    width: 24px;
    display: inline-block;
    position: relative;
`;

const DropDownListLabel = styled.div`
  margin-left:10px;
  color: #202124;
  line-height:24px;
`;

export const DropDown = ({ items, selectedItem, onChange }) => {
    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps
    } = useSelect({ items, selectedItem, onSelectedItemChange: onChange });
    return (
        <DropDownContainer style={{ zIndex: isOpen ? 20000 : 1 }}>
            <DropDownHeader {...getToggleButtonProps()}>
                {selectedItem &&
                    <>
                        <DropDownListIcon>{selectedItem.icon}</DropDownListIcon>
                        <DropDownListLabel>{selectedItem.value}</DropDownListLabel>
                    </>
                }
            </DropDownHeader>
            <DropDownList {...getMenuProps()} style={{ display: isOpen ? "block" : "none" }}>
                {isOpen &&
                    items.map((item, index) => (
                        <div key={item.id}>
                            <DropDownListItem
                                ishighlighted={highlightedIndex === index}
                                key={`${item.id}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item.icon && <DropDownListIcon>{item.icon}</DropDownListIcon>}
                                <DropDownListLabel>{item.value}</DropDownListLabel>
                            </DropDownListItem>
                            {item.prepend && item.prepend}
                        </div>
                    ))
                }
            </DropDownList>
            <div tabIndex="0" />
        </DropDownContainer>
    );
};

export const Select = ({ options, selectedItem, onChange }) => {
    return <DropDown
        items={options}
        selectedItem={selectedItem}
        onChange={onChange}
    />
};