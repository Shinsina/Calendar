import Alpine from 'alpinejs';
import calendarController from './calendar-controller';

window.Alpine = Alpine;

Alpine.data('calendarController', calendarController);

Alpine.start();
