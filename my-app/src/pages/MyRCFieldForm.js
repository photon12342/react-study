import React, {Component, useEffect} from "react";
// import Form, {Field} from "rc-field-form";
import Form, {Field} from "../components/my-rc-field-form";
import Input from "../components/Input";

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

// function MyRCFieldForm() {
//   const [form] = Form.useForm()

//   function onFinish(val) {
//     console.log("onFinish", val); //sy-log
//   };
//   function onFinishFailed(val) {
//     console.log("onFinishFailed", val); //sy-log
//   };
  
//   useEffect(() => {
//     form.setFeildsValue({username: 'default'})
//     console.log(form, 'form')
//   })

//   return ( 
//     <div>
//       <h3>MyRCFieldForm</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" rules={[nameRules]}>
//           <Input placeholder="input UR Username" />
//         </Field>
//         <Field name="password" rules={[passworRules]}>
//           <Input placeholder="input UR Password" />
//         </Field>
//         <button>Submit</button>
//       </Form>
//     </div>
//   );
// }


class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.setFeildsValue({username: 'zdkk'})
  }

  onFinish = val => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };

  render() { 
    return ( 
      <div>
        <h3>MyRCFieldForm</h3>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="input UR Username" />
          </Field>
          <Field name="password" rules={[passworRules]}>
            <Input placeholder="input UR Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
 
export default MyRCFieldForm;
