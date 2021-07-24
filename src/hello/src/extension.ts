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

    // 규칙을 정의한 객체를 만들기
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

    // 규칙을 프로바이더에 등록하기 (적용될 소스의 타입을 결정)
    const providerCompletion = vscode.languages.registerCompletionItemProvider(
		['plaintext', 'html', 'javascript'], 
		ruleCompletion, '.'
	);

    // 컨텍스트의 subscriptions 객체에 프로바이더를 push
    context.subscriptions.push(providerRealGrid, providerCompletion);
}
