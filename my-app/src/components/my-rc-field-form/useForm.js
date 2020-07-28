import React, { useRef } from 'react';

class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
  }

  registerEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter(
        (item) => item !== entity,
      );
      delete this.store[entity.props.name];
    };
  };

  setCallBack = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  setFeildValue = () => {};

  setFeildsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    console.log('this', this.store);
    this.fieldEntities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          entity.onStoreChange();
        }
      });
    });
  };

  getFeildValue = (name) => {
    return this.store[name];
  };
  getFieldsValue = (name) => {
    return this.store;
  };

  validate = () => {
    let err = [];
    // todo
    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;
      let value = this.getFeildValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === '')) {
        // 出错
        err.push({
          [name]: rules.message,
          value,
        });
      }
    });
    return err;
  };
  submit = () => {
    console.log('this.', this.fieldEntities); //sy-log
    let err = this.validate();
    // 在这⾥里里校验 成功的话 执⾏行行onFinish ，失败执⾏行行onFinishFailed
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      // 成功的话 执⾏行行onFinish
      onFinish(this.getFieldsValue());
    } else if (err.length > 0) {
      // ，失败执⾏行行onFinishFailed
      onFinishFailed(err);
    }
  };

  getForm() {
    return {
      setFeildsValue: this.setFeildsValue,
      setFeildValue: this.setFeildValue,
      getFeildValue: this.getFeildValue,
      getFeildsValue: this.getFeildsValue,
      registerEntity: this.registerEntity,
      setCallBack: this.setCallBack,
      submit: this.submit,
    };
  }
}
// 自定义hook
export default function useForm(form) {
  const formRef = useRef();
  if (!formRef.current) {
    if(form) {
      formRef.current = form
    }else{
      // new 一个
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }

  }
  return [formRef.current];
}
