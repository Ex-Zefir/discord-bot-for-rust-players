async function getSteamID(url, key) {
  const isProfileUrl = /^https?:\/\/steamcommunity\.com\/(id|profiles)\/\w+\/?/i;

  if (!isProfileUrl.test(url)) {
    return null;
  }

  const vanityUrlMatch = url.match(/^https?:\/\/steamcommunity\.com\/id\/([^/]+)\/?/i);

  if (vanityUrlMatch) {
    const vanityUserName = vanityUrlMatch[1];
    const apiUrl = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${key}&vanityurl=${vanityUserName}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.response && data.response.steamid) {
      return data.response.steamid;
    } else {
      return null;
    }
  }

  const id64urlMatch = url.match(/^https?:\/\/steamcommunity\.com\/profiles\/([\d]+)\/?/i);

  if (id64urlMatch) {
    return id64urlMatch[1];
  }

  return null;
}
  
  module.exports = { getSteamID };