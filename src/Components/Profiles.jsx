import Card from "./ProfileCard.jsx"

export default function Profiles() {
    return (
        <div className="platDiv">
            <Card name={"Codeforces"} imgSrc={"./src/Image/Codeforces.jpg"} url={"https://codeforces.com/profile/soumyatiw"} para={"I enjoy solving coding problems and taking part in contests. I've solved over 140 problems and have a 900+ rating on Codeforces, which has helped me build strong problem-solving skills."} />

            <Card name={"Leetcode"} imgSrc={"./src/Image/Leetcode.jpg"} url={"https://leetcode.com/u/soumyatiw/"} para={"On LeetCode, I’ve solved 75+ problems and reached a rating of 1450+. It’s been a great platform to strengthen my data structures and algorithms knowledge through focused practice."} />

            <Card name={"Codechef"} imgSrc={"./src/Image/Codechef.jpg"} url={"https://www.codechef.com/users/soum_tiw"} para={"I also enjoy competing on CodeChef, where I have a 2-star rating (1400+) and have solved over 60 problems. It’s helped me improve my logic and consistency through regular practice."} />
        </div>
    )
}