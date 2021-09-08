import { basename } from 'path';
import * as vscode from 'vscode';
import * as bc from './basic-codes';

export function activate(context: vscode.ExtensionContext) {
	const ruleBasicCode = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			return bc.getCompletionItems();
		}		
	};
	const providerBasicCode = vscode.languages.registerCompletionItemProvider(
		['html', 'javascript'], 
		ruleBasicCode
	);

	const ruleCompletion = {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			const linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (linePrefix.endsWith('.')) {
				return bc.getDotCompletionItem(linePrefix);
			}
			return undefined;
		}
	}; 
	const providerCompletion = vscode.languages.registerCompletionItemProvider(
		['html', 'javascript'], 
		ruleCompletion, '.'
	);

	context.subscriptions.push(
		providerBasicCode, 
		providerCompletion
	);
}
