import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const ruleRealGrid = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (linePrefix.endsWith('RealGrid.')) {
				return undefined;
			}

			return [
				new vscode.CompletionItem('RealGrid', vscode.CompletionItemKind.Module),
			];
		}
	}; 
	const providerRealGrid = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleRealGrid, '.'
	);

	const ruleCompletion = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('RealGrid.')) {
				return undefined;
			}

			return [
				new vscode.CompletionItem('GridView', vscode.CompletionItemKind.Class),
				new vscode.CompletionItem('TreeView', vscode.CompletionItemKind.Class),				
			];
		}
	}; 
	const providerCompletion = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleCompletion, '.'
	);

	context.subscriptions.push(providerRealGrid, providerCompletion);
}