import ReactToastifyAdaptor, { ToastService } from "./ToastService";

class CheckinToastService {
  constructor(private toastService: ToastService) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export const CheckinToast = new CheckinToastService(new ReactToastifyAdaptor());
