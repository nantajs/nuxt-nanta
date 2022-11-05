<template>
  <NantaForm v-bind="getFormProps" :actionColOptions="{ span: 24 }" @register="registerForm" @submit="handleSubmit"
    @reset="handleReset" />
</template>
  
<script lang="ts" setup>
import { useForm, FormProps, Recordable } from "@nanta/ui";
import { schemes } from "../table/data";
import { computed } from 'vue'
const [
  registerForm,
  { setFieldsValue, updateSchema, resetFields, getFieldsValue, validateFields },
] = useForm({
  labelWidth: 120,
  schemas: schemes,
  actionColOptions: {
    span: 24,
  },
});

const customizeResetFn = (): Promise<void> => {
  console.log("here is a customize resetFn called!");
  setFieldsValue({
    age: 0,
    email: "nanta@sancaiwulian.com",
    name: "Nanta",
  });
  return new Promise((resolve, reject) => {
    try {
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const formProps: FormProps = {
  resetFn: customizeResetFn,
  colon: true,
};

const getFormProps = computed((): Recordable => ({ ...formProps }));

const handleSubmit = (values: any) => {
  console.log("values", values);
  console.log("handleSubmit btn clicked!");
};

const handleReset = () => {
  console.log("handleReset but click");
};
</script>
  