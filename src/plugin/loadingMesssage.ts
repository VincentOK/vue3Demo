import { Toast } from 'vant';
export function ToastLoading(message: string): void {
  Toast.loading({
    message: message,
    forbidClick: true,
  });
}
