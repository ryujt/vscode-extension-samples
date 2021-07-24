import * as vscode from 'vscode';
import * as bc from './basic-codes';

export function activate(context: vscode.ExtensionContext) {
	const ruleBasicCode = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const snippetCompletion = new vscode.CompletionItem('RG Basic Code');
			snippetCompletion.insertText = new vscode.SnippetString(bc.basicCode);
			snippetCompletion.documentation = new vscode.MarkdownString('Inserts a basic codes for RealGrid.');

			return [
				snippetCompletion,
			];
		}		
	};
	const providerBasicCode = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleBasicCode
	);

	context.subscriptions.push(providerBasicCode);
}
