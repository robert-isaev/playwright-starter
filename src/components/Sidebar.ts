import BaseComponent from "./Base";

export default class SideBar extends BaseComponent {
    public root = '.AsideDesktopMenu';

    get avatar() {
        return this.fromRoot('.MuiAvatar-root')
    }
}