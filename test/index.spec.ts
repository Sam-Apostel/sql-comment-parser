import { parse } from '../src';

describe('sql-comment-parse', () => {
	describe('parser', () => {
		it('should parse sqlcommenter sql', () => {
			const sql =
				"SELECT * FROM FOO /*action='%2Fparam*d',controller='index',framework='spring',traceparent='00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01',tracestate='congo%3Dt61rcWkgMzE%2Crojo%3D00f067aa0ba902b7'*/";

			const { query, comments } = parse(sql);

			expect(query).toMatch('SELECT * FROM FOO');
			expect(comments).toEqual({
				action: '/param*d',
				controller: 'index',
				framework: 'spring',
				traceparent: '00-5bd66ef5095369c7b0d1f8f4bd33716a-c532cb4098ac3dd2-01',
				tracestate: 'congo=t61rcWkgMzE,rojo=00f067aa0ba902b7',
			});
		});

		it('should return empty on no comment', () => {
			const sql = 'SELECT * FROM FOO';

			const { query, comments } = parse(sql);

			expect(query).toMatch('SELECT * FROM FOO');
			expect(comments).toEqual({});
		});
	});
});
