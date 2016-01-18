/// <reference path="../ModuleDefinition.ts" />

module ModuleDefinition{

    export class scroll implements SteamGiftsModule {

        style = "header { transition: opacity 0.4s ease-in-out }\n" +
		"header.scroll { opacity:0.3 }" +
		"header:hover { opacity:1 }";

        init(): void {
        }

        name(): string {
            return "Turn Navbar transparent";
        }

        shouldRun = (location: SGLocation) => true;
    }

}
