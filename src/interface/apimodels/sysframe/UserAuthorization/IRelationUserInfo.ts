
interface IRelationUserInfo {

  /// <summary>
  /// 是否主岗
  /// </summary>
  BeMainDuty: boolean,

  /// <summary>
  /// 身份ID，RelationID加密版
  /// </summary>
  RelationID: string,

  /// <summary>
  /// 主体ID，ActorID加密版
  /// </summary>
  ActorID: string,

  /// <summary>
  /// 身份对应的单位的全称
  /// </summary>
  DeptFullPathName: string,

  /// <summary>
  /// 身份对应的单位的显示名称
  /// </summary>
  DeptDisplayName: string,

  /// <summary>
  /// 当前身份对应的用户的名称
  /// </summary>
  UserName: string

}

export { IRelationUserInfo }
