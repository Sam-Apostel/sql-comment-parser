export function parse(sql: string): { query: string; comments: Record<string, string> } {
	const trimmedSql = sql.trim().replace(/;\s*$/, '');
	const start = trimmedSql.lastIndexOf('/*');
	const end = trimmedSql.lastIndexOf('*/');

	if (start > end || end !== trimmedSql.length - 2) return { query: sql, comments: {} };

	const query = trimmedSql.substring(0, start);
	const rawComment = trimmedSql.substring(start + 2, end);

	const comments = Object.fromEntries(
		rawComment.split(',').map((kv) => {
			const [rawKey, rawValue] = kv.split('=');
			const key = decodeURIComponent(rawKey);
			const value = decodeURIComponent(rawValue.slice(1, -1));
			return [key, value];
		})
	);

	return { query, comments };
}
