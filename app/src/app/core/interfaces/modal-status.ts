import { RequesterComponent } from "src/app/shared/interfaces/requester-component";

export interface ModalStatus {
  canOpen: boolean,
  requester?: RequesterComponent
}
