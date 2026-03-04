import type { Route } from './+types/index';
import { DatePicker } from 'antd';

export function meta(_args: Route.MetaArgs) {
  return [{ title: 'Register' }];
}
export default function RegisterIndexRoute() {
  return (
    <>
      <h1>Register Page</h1>
      <DatePicker />
    </>
  );
}
