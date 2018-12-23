



const RIGHT = 1;
const LEFT = 0;
const ON = 1;
const OFF = 0;
const DAMAGE = 40;
const CHARGE_VALUE = 40;
const HIT_VALUE = 30;
const CADR = 150;
const CADR_HIT = 200;
const DAMAGE_SPEAR = 25;
const CADR_CHARGE = 250;
const STANDART_FIRST_CADR_LEFT = 1100;
const STANDART_FIRST_CADR_RIGHT = 1250;

const cadr_height = 0;
const cadr_height_stay = 150;
const cadr_special_attack_height = 300;
const cadr_hit_height = 450;
const pain_Y = 600;
const deadly_Y = 750;


//////////////////////////////////////////////////


var cadr_right_X = STANDART_FIRST_CADR_RIGHT;
var cadr_left_X = STANDART_FIRST_CADR_LEFT;

var cadr_hit_width_right = 1250;
var cadr_hit_width_left = 1100;

var cadr_wight_stay_right = 1250;
var cadr_wight_stay_left = 350;

var cadr_wight_right_sheld = 2150;
var cadr_wight_left_sheld = 200;

var cadr_charge_wight_right = 1250;
var cadr_charge_wight_left = 1000;

var cadr_pain_right_X = 1250;
var cadr_pain_left_X = 1100;

var cadr_dead_right_X = 1250;
var cadr_dead_right_X = 1100;


var	Xposition = -250;
var BG_Xposition = 0;

var side = RIGHT;
var stay_player = ON;
var me_dead = OFF;
var couldness = ON;
var cooldown = OFF;
var shield_up = OFF;
var press = OFF;
var me_stun = OFF;


/////////////////////////////////////////


var enemy_position1 = 300;
var spear_position1 = 0;
var enemy_side1 = LEFT;
var stay_enemy1 = ON;
var atacking1 = ON;
var enemy_atack1 = OFF;
var throwing1 = ON;
var stun1 = OFF;
var dead1 = OFF;


var enemy_stay_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_stay_left_X1 = STANDART_FIRST_CADR_LEFT;

var enemy_run_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_run_left_X1 = STANDART_FIRST_CADR_LEFT;

var enemy_special_atack_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_special_atack_left_X1 = STANDART_FIRST_CADR_LEFT;

var enemy_atack_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_atack_left_X1 = STANDART_FIRST_CADR_LEFT;

var enemy_pain_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_pain_left_X1 = STANDART_FIRST_CADR_LEFT;

var enemy_dead_right_X1 = STANDART_FIRST_CADR_RIGHT;
var enemy_dead_left_X1 = STANDART_FIRST_CADR_LEFT;


/////////////////////////////////////////


var enemy_position2 = 500;
var spear_position2 = 0;
var enemy_side2 = RIGHT;
var stay_enemy2 = ON;
var atacking2 = ON;
var enemy_atack2 = OFF;
var throwing2 = ON;
var stun2 = OFF;
var dead2 = OFF;

var enemy_stay_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_stay_left_X2 = STANDART_FIRST_CADR_LEFT;

var enemy_run_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_run_left_X2 = STANDART_FIRST_CADR_LEFT;

var enemy_special_atack_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_special_atack_left_X2 = STANDART_FIRST_CADR_LEFT;

var enemy_atack_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_atack_left_X2 = STANDART_FIRST_CADR_LEFT;

var enemy_pain_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_pain_left_X2 = STANDART_FIRST_CADR_LEFT;

var enemy_dead_right_X2 = STANDART_FIRST_CADR_RIGHT;
var enemy_dead_left_X2 = STANDART_FIRST_CADR_LEFT;


/////////////////////////////////////////


var main_character = document.getElementById('main_character');
var BG = document.getElementById('BG');
var Stamina = document.getElementById('Stamina_bar');
var Health = document.getElementById('HP_bar');
var game = document.getElementById('Game');
var enemy1 = document.getElementById('enemy1');
var enemy_health_bar1 = document.getElementById('Health_of_enemy1');
var spear1 = document.getElementById('spear1');
var enemy2 = document.getElementById('enemy2');
var enemy_health_bar2 = document.getElementById('Health_of_enemy2');
var spear2 = document.getElementById('spear2');

var left_button = document.getElementById('left_but');