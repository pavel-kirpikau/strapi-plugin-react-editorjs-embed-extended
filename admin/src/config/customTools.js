import PluginId from '../pluginId'

import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'

const customTools = {
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
        facebook: true,
        twitter: true,
        vimeo: true,
        gfycat: true,
        imgur: true,
        spotifyshow: {
          regex: /https?:\/\/open.spotify.com\/show\/(.+)/,
          embedUrl: 'https://open.spotify.com/embed/show/<%= remote_id %>',
          html: "<iframe style='border-radius:12px' border-width: '0px' width='100%' height='352' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
          height: 352,
          width: 644,
          id: (groups) => groups.join('/embed/')
          },
        spotifyepisode: {
          regex: /https?:\/\/open.spotify.com\/episode\/(.+)/,
          embedUrl: 'https://open.spotify.com/embed/episode/<%= remote_id %>',
          html: "<iframe style='border-radius:12px' border-width: '0px' width='100%' height='352' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
          height: 352,
          width: 644,
          id: (groups) => groups.join('/embed/')  
        },
        mixcloudepisode: {
          regex: /https?:\/\/www.mixcloud.com\/(.+)/,
          embedUrl: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=/<%= remote_id %>',
          html: "<iframe width='100%'' height='120' frameborder='0' ></iframe>",
          height: 120,
          id: (groups) => groups.join('/embed/') 
        },
        soundcloudtrack: {
          regex: /https?:\/\/soundcloud.com\/(.+).si.*/,
          embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/<%= remote_id %>&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          html: "<iframe width='100%' height='300' scrolling='no' frameborder='no' allow='autoplay'></iframe>",
          height: 300,
          id: (groups) => groups.join('/embed/') 
        }
        }
      }
    },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Quote',
      captionPlaceholder: 'Quote`s author',
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
}

export default customTools
