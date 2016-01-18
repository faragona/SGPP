/// <reference path="../ModuleDefinition.ts" />

module ModuleDefinition{

    export class TransNavbar implements SteamGiftsModule {

        style = "header { transition: opacity 0.4s ease-in-out }\n" +
		"header.scroll { opacity:0.3 }\n" +
		"header:hover { opacity:1 }\n";

        init(): void {
        }

        name(): string {
            return "Turn Navbar transparent";
        }

        shouldRun = (location: SGLocation) => true;
    }

}
