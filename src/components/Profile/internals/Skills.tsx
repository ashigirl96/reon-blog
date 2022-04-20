import { VFC, FC, useState } from 'react'
import classNames from 'classnames'
import { SKILLS } from '@/constants/skills'

const DateComponent: FC = ({ children }) => {
  return <div className="badge badge-ghost rounded-md">{children}~</div>
}

const useSkills = () => {
  const [skillModal, setSkillModal] = useState('')
  return {
    skillModal,
    setSkillModal,
  }
}
export type ReturnTypeOfUseSkills = ReturnType<typeof useSkills>

const SkillModal: VFC<ReturnTypeOfUseSkills> = ({
  skillModal,
  setSkillModal,
}) => {
  return (
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
  )
}

export const Skills: VFC = () => {
  const { skillModal, setSkillModal } = useSkills()
  return (
    <>
      <SkillModal skillModal={skillModal} setSkillModal={setSkillModal} />
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
