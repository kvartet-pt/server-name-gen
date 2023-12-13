// Generated by dts-bundle-generator v8.1.2

export interface Options {
	number: boolean;
	words: number;
	alliterative: boolean;
	firstLetter?: string;
	blocklist?: string[];
}
export interface Result {
	raw: (string | number)[];
	dashed: string;
	spaced: string;
}
declare function generate(options?: Partial<Options>): Result;
export declare function blocklistFilter(blocklist: string[], raw: string[]): string[];

export {
	generate as default,
};

export {};