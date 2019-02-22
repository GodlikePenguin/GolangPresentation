import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismGo from 'react-syntax-highlighter/languages/prism/go'

export default {
  ...future,
  heading: {
    fontWeight: 600,
    textTransform: 'none',
  },
  prism: {
    style: okaidia,
    languages: {
      go: prismGo
    }
  }
}