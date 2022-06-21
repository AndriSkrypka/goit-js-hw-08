import throttle from 'lodash.throttle';

const STORAGE_KEY = 'freedback-form-state';
const localValue = {
  email: '',
  message: '',
};
