# no longer maintained, no longer working

YouTube changed their internals, so this fork doesn't work any more. I was about to go and fix it myself when I found [this](https://github.com/berrberr/streamkeys), which works pretty well and also offers more control. Please use that instead for the time being.

# old readme:

~~Global keyboard bindings to control your Chrome-based music player. Allows your keyboard media keys (play/pause, next, previous) to work when you're listening to music on common streaming websites.~~

~~This fork contains a modified YouTube socket, which **only** supports their HTML5 player. That's it. Nothing else different from the original.~~

~~**UPDATE: Now uses Chrome's built in key binding (as of version 25)**~~

**Supported sites:**
   * Amazon music player
   * Deezer
   * Google Music
   * Grooveshark
   * Jamstash
   * Jango.com
   * Naxos Music Library
   * Pandora
   * Slacker
   * Songza
   * SoundCloud
   * Spotify
   * Deezer
   * Jamstash
   * Music Choice
   * Phish Tracks
   * Synology Audio Station v.5
   * thesixtyone
   * Tracksflow.com
   * vk.com (Vkontakte)
   * Яндекс.Музыка (Yandex.Music)
   * **Youtube.com HTML5**
   * Xbox Music
   * Xiami Music
   * JB Hi-Fi Now
   * Plex
   * Tidal
   * Gaana.com
   * Saavn.com
   * Ok.ru

# ~~Usage~~

1. Clone this thing: `git clone https://github.com/xxyy/keysocket.git`
2. Open your Chrome extension menu by navigating to `☰ > More Tools... > Extensions` or `chrome://extensions`.
3. Check `[ ] Developer mode` on the top right of the page.
4. Click `[Load unpacked extension...]` and navigate to this repo's `extension` folder.
5. Installation complete.
6. Edit the `Keyboard shortcuts` to give Keysocket 'Global' permissions (apparently no longer necessary with latest Chrome)
    * scroll to the bottom & click `Keyboard shortcuts`
    * find `Keysocket Media Keys` and change each desired key to `Global`

<!--
# Contribute please!

* Looking for adapters for other music players.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik

-->
