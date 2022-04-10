const blogTitle = (title: string) => {
  return `${title} | 1e0nhard's blog`
}

export const Meta = {
  Profile: {
    Title: blogTitle('Profile'),
    Description: '知らんがな',
  },
  Blogs: {
    Title: blogTitle('Blogs'),
    Description:
      '本ブログでは最近学習したノートや、作ったみた系を文章化してゆるく投稿しています。主に、機械学習、Web、哲学などで学びがあったものを殴り書きしていきます。',
  },
  Gallery: {
    Title: blogTitle('Gallery'),
    Description:
      '散歩中に見つけた景色をぼーっと観ながら、その時に感じていた情緒を言語化したもの(ポエム)と共に載せてギャラリーっぽくしてみました。',
  },
}
