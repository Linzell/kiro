import { v4 as uuidv4 } from 'uuid';

interface NotificationInterface {
  Id: string;
  ImgUrl: string;
  Title: string;
  Description: string;
  Date: Date;
}

/**
 * Notification class
 * @class Notification
 * @constructor
 * ```TS
 * constructor(
 * id: string,
 * imgUrl: string,
 * title: string,
 * description: string,
 * date: Date,
 * )
 * ```
 */
class Notification {
  private notificationInterface: NotificationInterface;

  constructor(
    id: string,
    imgUrl: string,
    title: string,
    description: string,
    date: Date,
  ) {
    this.notificationInterface = {
      Id: id || uuidv4(),
      ImgUrl: imgUrl,
      Title: title,
      Description: description,
      Date: date,
    };
  }

  get id() {
    return this.notificationInterface.Id;
  }

  set id(id: string) {
    this.notificationInterface.Id = id;
  }

  get imgUrl() {
    return this.notificationInterface.ImgUrl;
  }

  set imgUrl(imgUrl: string) {
    this.notificationInterface.ImgUrl = imgUrl;
  }

  get title() {
    return this.notificationInterface.Title;
  }

  set title(title: string) {
    this.notificationInterface.Title = title;
  }

  get description() {
    return this.notificationInterface.Description;
  }

  set description(description: string) {
    this.notificationInterface.Description = description;
  }

  get date() {
    return this.notificationInterface.Date;
  }

  set date(date: Date) {
    this.notificationInterface.Date = date;
  }
}

export default Notification;
