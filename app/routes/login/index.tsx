import type { Route } from './+types/index';

export function meta(_args: Route.MetaArgs) {
  return [{ title: 'Login' }];
}

export default function LoginIndexRoute() {
  return <>Login Page</>;
}
