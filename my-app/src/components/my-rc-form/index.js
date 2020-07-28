import React, { Component } from 'react';

export default function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {}; // 存储校验规则
    }

    handlerChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    getFieldDecorator = (field, option) => (InputCmp) => {
      this.options[field] = option;
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: this.handlerChange,
      });
    };
    getFieldsValue = () => {
      return this.state;
    };
    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };
    /****************************暗号: 西撒哈拉**********************************/
    // 校验
    validateFields = (callback) => {
      let err = [];
      console.log('options', this.options, this.state);
      for (let feild in this.options) {
        !this.state[feild] && err.push({[feild]: 'err'});
      }
      if (err.length === 0) {
        // 校验成功
        callback(null, this.state);
      } else {
        callback(err, this.state);
      }
    };

    getForm() {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          getFieldsValue: this.getFieldsValue,
          setFieldsValue: this.setFieldsValue,
          validateFields: this.validateFields,
        },
      };
    }


    render() {
      return <Cmp {...this.props} {...this.getForm()} />;
    }
  };
}
