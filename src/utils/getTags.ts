import posts from "@/utils/getContents";

const allTags = posts.map((post) => post.meta.tag).filter((tag) => tag !== "reference");
function getCount(tag: any) {
  return allTags.filter((postTag) => postTag == tag).length;
}

const uniqueTags = allTags.filter(
  (item, index) => allTags.indexOf(item) === index
);

function convertToSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

interface TagInfo {
  tag: string;
  count: number;
  link: string;
}

function generateTagInfo(): TagInfo[] {
  const tagInfoList: TagInfo[] = [];
  tagInfoList.push({
    tag: "all",
    count: allTags.length,
    link: "all"
  })
  uniqueTags.forEach((tag) => {
    tagInfoList.push({
      tag: tag,
      count: getCount(tag),
      link: convertToSlug(tag),
    });
  });
  return tagInfoList;
}

const tags = generateTagInfo();

export { tags };
