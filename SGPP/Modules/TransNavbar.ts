/// <reference path="../ModuleDefinition.ts" />

module ModuleDefinition{

    export class TransNavbar implements SteamGiftsModule {

        if ($(window).scrollTop() > 40 ){
    
			$('header').addClass('scroll');
    
		} else {
    
			$('header').removeClass('scroll');
    
        };

        init(): void {
        }

        name(): string {
            return "Turn Navbar transparent";
        }

        shouldRun = (location: SGLocation) => true;
    }

}

