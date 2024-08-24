
import { Dock as PDock } from 'primereact/dock';
// Launcher Icon
import LauncherImg from "../assets/launcher-img.png"
import LauncherCode from "../assets/launcher-code.png";
import LauncherDiscord from "../assets/launcher-discord.png";
import LauncherGithub from "../assets/launcher-github.png";



export type DockProps = {
    onClickCode: () => void,
    onClickGithub: () => void,
    onClickImage: () => void,
    onClickDiscord: () => void
}

export function Dock(props: DockProps) {

    const dockItems = [
        {
            label: 'Code',
            icon: () => <img alt="Launcher Code" src={LauncherCode} width="100%" />,
            command: () => {
                props.onClickCode()
            }
        },
        {
            label: 'Github',
            icon: () => <img alt="Launcher Github" src={LauncherGithub} width="100%" />,
            command: () => {
                props.onClickGithub()
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Launcher Photos" src={LauncherImg} width="100%" />,
            command: () => {
                props.onClickImage()
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Launcher Discord" src={LauncherDiscord} width="100%" />,
            command: () => {
                props.onClickGithub()
            }
        },
    ];

    return (
        <PDock model={dockItems} />
    )
}
        