import { VFC } from 'react'

export const SelfIntroduce: VFC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-1 h-32 card rounded-box place-items-center h-fit">
        <label className="swap swap-flip text-9xl">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="avatar">
              <div className="w-64 rounded-xl">
                <img src="https://travel-gallery.s3.ap-northeast-1.amazonaws.com/REON2.jpg" />
              </div>
            </div>
          </div>
          <div className="swap-off">
            <div className="avatar">
              <div className="w-64 rounded-xl">
                <img src="https://travel-gallery.s3.ap-northeast-1.amazonaws.com/REON.jpg" />
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="divider lg:divider-horizontal" />

      <div className="grid flex-1 h-32 card rounded-box place-items-center h-fit">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">フルネーム</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              Reon Nishimura
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">生年月日</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">1996/06/23</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">好きなもの</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">Notion</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
