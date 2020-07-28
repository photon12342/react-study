import React, { Component } from 'react';
import FieldContext from './FieldContext';

export default class Feild extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    const {registerEntity} = this.context
    this.cancelRegister =  registerEntity(this)
  }

  componentWillUnmount() {
    // 取消注册
    if(this.cancelRegister) {
      this.cancelRegister()
    }
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const { name } = this.props;
    const { setFeildValue, getFeildValue } = this.context;
    return {
      value: getFeildValue(name),
      onChange: (e) => {
        const newValue = e.target.value;
        setFeildValue({
          [name]: newValue
        })
        console.log(newValue);
      },
    };
  };
  render() {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled());

    return returnChildNode;
  }
}
