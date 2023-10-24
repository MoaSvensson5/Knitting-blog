export class Post {
  public id: number;
  public title: string;
  public thumbnailUrl: string;
  public body: string;
  public creationDate: Date;
  public likes: number;
  public dislikes: number;
  public comments: string[];

  constructor(
    title: string,
    thumbnailUrl: string,
    body: string,
  ) {
    this.id = 0;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.body = body;
    this.creationDate = new Date();
    this.likes = 0;
    this.dislikes = 0;
    this.comments = [];
  }
}
