import * as app from './lib';
import {ui} from './ui';
const container = <HTMLElement> document.querySelector('.container');
const content = <HTMLElement> document.querySelector('.content');

ui((x) => {
  container.style.display = 'inherit';
  content.textContent = 'Sense + Aimbot Running';
  return renderAsync(x);
});

async function renderAsync(core: app.core.Core) {
  await core.runAsync(() => {
    const localPlayer = core.playerList.get(core.localPlayer.value);
    updateSense(core, localPlayer);
  });
}

function updateSense(core: app.core.Core, localPlayer?: app.core.Player) {
  //console.log("localPlayer: ", localPlayer);
  if (!localPlayer) return;
  const sense = new app.features.Sense();
  const norecoil = new app.features.Norecoil();
  const aimbot = new app.features.Aimbot();
  sense.updateItems(localPlayer, core.itemList.values());
  sense.updatePlayers(localPlayer, core.playerList.values());
  aimbot.updateStates(core.levelName.value, localPlayer, core.playerList.values());
  norecoil.updateStates(localPlayer);
}
