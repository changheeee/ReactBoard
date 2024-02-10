import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 로케일 추가
dayjs.extend(relativeTime);
dayjs.locale("ko"); // 전역 로케일을 한국어로 설정

const categories = [
  "일반",
  "연애",
  "결혼",
  "육아",
  "가족",
  "친구",
  "학교",
  "회사",
  "골라줘",
  "몇대몇",
  "YES or No",
];

export const MockData = () => {
  const numberOfPosts = 9; // 생성할 포스트의 수
  let postData = []; // postData 배열 초기화

  for (let i = 0; i < numberOfPosts; i++) {
    postData.push({
      id: i,
      author: faker.person.firstName(),
      userType: faker.datatype.boolean(),
      postType: faker.datatype.boolean(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      createdAt: dayjs(faker.date.past()).format("YYYY.MM.DD"),
      likes: faker.number.int({ min: 0, max: 100 }),
      views: faker.number.int({ min: 0, max: 1000 }),
      imageUrl: faker.image.urlLoremFlickr(),
      category: faker.helpers.arrayElement(categories), // 카테고리 랜덤 지정
    });
  }

  return postData; // 생성된 데이터 반환
};
