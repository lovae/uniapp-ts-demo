interface IAddFormResult<T> {

	//提交是否成功
	beSubmitOK: boolean;

	//提交失败时，提示的信息
	submitErrorInfo: string;

	//提交成功之后，生成的id
	id: string;

	newItem: T;

}

export { IAddFormResult }
