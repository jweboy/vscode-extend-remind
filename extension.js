// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposables = [];
	const greetings = '🤞🤞🤞 给爸爸请安…… ';

	vscode.workspace.onDidChangeConfiguration(() => {}, null, disposables);

	// Initial message
	if(disposables.length) {
		vscode.window.showInformationMessage(greetings);
	}

	// Exec cmd message
	let disposable = vscode.commands.registerCommand('extension.greetings', function () {
		vscode.window.showInformationMessage(greetings);
	});


	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
