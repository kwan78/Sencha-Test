Ext.define("MyApp.view.Contact",{
	extend: 'Ext.form.Panel',
	xtype: 'contactform',

	config: {
		title: 'Contact',
		iconCls: 'user',

		items: [
		{
			xtype: 'fieldset',
			title: 'Contact Us',
			instructions: '(email is not required)',

			items: [
				{
				xtype: 'textfield',
				name: 'name',
				label: 'Name',
				},
				{
				xtype: 'emailfield',
				name: 'email',
				label: 'Email'
				},
				{
				xtype: 'textareafield',
				name: 'message',
				label: 'Message'
			}
		]
	}]

}
}
);
