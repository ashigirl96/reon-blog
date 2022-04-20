import { VFC, FC, useState } from 'react'
import classNames from 'classnames'

const DateComponent: FC = ({ children }) => {
  return <div className="badge badge-ghost rounded-md">{children}~</div>
}

type SkillType = {
  name: string
  categories: string[]
  level: string
  startAt: string
}
const SKILLS: SkillType[] = [
  {
    name: 'TypeScript',
    categories: ['Web'],
    level: '業務。申し分なし',
    startAt: '2019/10',
  },
  {
    name: 'React',
    categories: ['Web'],
    level: '業務。申し分なし',
    startAt: '2019/10',
  },
  {
    name: 'Next.js',
    categories: ['Web'],
    level: '業務。申し分なし',
    startAt: '2020/04',
  },
  {
    name: 'Tailwind CSS',
    categories: ['Web'],
    level: '趣味。このブログ作った',
    startAt: '2022/10',
  },
  {
    name: 'S3 + CloudFront',
    categories: ['Web'],
    level: '仕事で少し触るがほぼ趣味',
    startAt: '2022/10',
  },
  {
    name: 'Ruby on Rails',
    categories: ['Web'],
    level: '業務。申し分なし',
    startAt: '2019/10',
  },
  {
    name: 'GraphQL / Hasura',
    categories: ['Web'],
    level: '趣味。簡単なものなら作れる',
    startAt: '2021/12',
  },
  {
    name: 'Python',
    categories: ['機械学習', 'スクリプト作成'],
    level: '趣味。高校生からずっと触ってる',
    startAt: '2012/04',
  },
  {
    name: 'TensorFlow / PyTorch',
    categories: ['機械学習'],
    level: '研究。ライブラリ作るレベル',
    startAt: '2018/02',
  },
  {
    name: 'Jax / Rlax',
    categories: ['機械学習'],
    level: '研究。再現実験できるレベル',
    startAt: '2019/01',
  },
  {
    name: 'Rust',
    categories: ['簡単なもの'],
    level: '趣味。Monkey Languageやブラウザを作った経験あり',
    startAt: '2019/11',
  },
  {
    name: 'Figma',
    categories: ['デザイナ'],
    level: '趣味。ある程度使える',
    startAt: '2021/11',
  },
]

export const Skills: VFC = () => {
  const [skillModal, setSkillModal] = useState('')
  return (
    <>
      <label
        className={classNames(
          `modal cursor-pointer`,
          skillModal !== '' && 'modal-open',
        )}
      >
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p>{skillModal}</p>
          <div className="modal-action">
            <button className="btn" onClick={() => setSkillModal('')}>
              閉じる
            </button>
          </div>
        </label>
      </label>
      <div className="mx-auto max-w-[60rem]">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th />
                <th>ツール名</th>
                <th>カテゴリ</th>
                <th>業務・研究・趣味</th>
                <th>使い始め</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS.map((skill, index) => {
                return (
                  <label
                    className="table-row modal-button"
                    htmlFor={`my-modal-${index}`}
                  >
                    <input
                      className="modal-toggle hidden"
                      type="checkbox"
                      id={`my-modal-${index}`}
                      onClick={() => {
                        setSkillModal(skill.name)
                      }}
                    />
                    <th>{index + 1}</th>
                    <td>{skill.name}</td>
                    <td>
                      <div className="flex flex-col space-y-2">
                        {skill.categories.map((category) => (
                          <div className="badge badge-primary">{category}</div>
                        ))}
                      </div>
                    </td>
                    <td>{skill.level}</td>
                    <td>
                      <DateComponent>{skill.startAt}</DateComponent>
                    </td>
                  </label>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
