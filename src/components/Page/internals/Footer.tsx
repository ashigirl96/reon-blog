import { VFC } from 'react'
import classNames from 'classnames'

type Props = {
  margin: boolean
}
export const Footer: VFC<Props> = ({ margin }) => {
  return (
    <footer
      className={classNames(
        'footer footer-center p-4 bg-primary text-primary-content gap-y-0',
        margin ? 'mt-16' : '',
      )}
    >
      <p className="font-bold">
        Built with Next.js + daisyUI + Notion API + S3
      </p>
      <p>Copyright © 2022 - All right reserved</p>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com/ashigirl96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a
            href="https://qiita.com/ashigirl966"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="24"
              height="24"
              src="https://cdn.qiita.com/assets/favicons/public/production-c620d3e403342b1022967ba5e3db1aaa.ico"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
