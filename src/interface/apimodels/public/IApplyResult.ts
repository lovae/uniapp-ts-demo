interface IApplyResult {

	beApplyOk: boolean;          //是否申请成功

	failedMessage: string;      //申请失败时，填充该失败信息

	nextApplyTime: string;      //下一次可申请时间

}

export { IApplyResult }