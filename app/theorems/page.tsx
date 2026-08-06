import type { Metadata } from "next";
import TheoremSearch from "./TheoremSearch";

export const metadata: Metadata = {
  title: "定义·定理·定律索引 | 结构信息与机器智能",
  description: "检索《人工智能科学——智能的数学原理》与《孙子兵法的人工智能原理》中的定义、定理、命题、引理和相关定律。",
};

export default function TheoremsPage() {
  return <TheoremSearch />;
}
