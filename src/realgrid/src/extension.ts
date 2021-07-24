import * as vscode from 'vscode';
import * as bc from './basic-codes';

export function activate(context: vscode.ExtensionContext) {
	const ruleBasicCode = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const realGridCompletion = new vscode.CompletionItem('RealGrid');

			const snippetCompletion = new vscode.CompletionItem('RG Basic Code');
			snippetCompletion.insertText = new vscode.SnippetString(bc.basicCode);
			snippetCompletion.documentation = new vscode.MarkdownString('Inserts a basic codes for RealGrid.');

			return [
				realGridCompletion,
				snippetCompletion,
			];
		}		
	};
	const providerBasicCode = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleBasicCode
	);

	const ruleCompletion = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('RealGrid.')) {
				return undefined;
			}

			return [
				new vscode.CompletionItem('LocalDataProvider', vscode.CompletionItemKind.Method),
				new vscode.CompletionItem('LocalTreeDataProvider', vscode.CompletionItemKind.Method),
				new vscode.CompletionItem('GridView', vscode.CompletionItemKind.Method),
				new vscode.CompletionItem('TreeView', vscode.CompletionItemKind.Method),				
			];
		}
	}; 
	const providerCompletion = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleCompletion, '.'
	);

	context.subscriptions.push(
		providerBasicCode, 
		providerCompletion
	);
}
