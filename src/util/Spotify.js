const clientID = "be6dc545b51942e5af55cfbcbcb897cf";
const redirectUri = "http://localhost:3000";

let accessToken;

const getAccesToken = () => {
  if (accessToken) {
    return accessToken;
  }
  //check for access token match
  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    //this clears the parameters, allowing to grab a new access token when it expires
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/");
    return accessToken;
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  }
};

export const SpotifySearch = (term) => {
  const search = async () => {
    const accessToken = getAccesToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer  ${accessToken}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
      image: track.album.images[0].url,
    }));
  };

  return search();
};

export const SpotifySave = (playlistName, trackUris) => {
  const savePlayList = async () => {
    if (!playlistName || !trackUris.length) {
      return;
    }
    const accessToken = getAccesToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: headers,
      method: "GET",
    });
    const jsonResponse = await response.json();
    userId = jsonResponse.id;

    const response2 = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      }
    );
    const jsonResponse2 = await response2.json();
    let playlistId = jsonResponse2.id;

    return await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      }
    );
  };
  return savePlayList();
};
