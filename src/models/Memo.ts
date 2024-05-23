// Memo 인터페이스를 정의. 메모의 기본 구조
export interface MemoInfo {
  memo: MemoList;
  count: number;
}

export interface MemoList {
  [property: string]: Memo[];
}

export interface Memo {
  id: number;
  title: string;
  content: string;
  year: number;
  month: number;
  date: number;
  tags: Set<string>;
  folder: number;
  star: boolean;
}