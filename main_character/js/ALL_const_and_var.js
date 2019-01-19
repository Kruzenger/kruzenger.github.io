



const RIGHT = 1;
const LEFT = 0;
const ON = 1;
const OFF = 0;
const DAMAGE = 40;
const DAMAGE_MOOB = 30;
const CHARGE_VALUE = 40;
const HIT_VALUE = 30;
const CADR = 150;
const CADR_HIT = 200;
const DAMAGE_SPEAR = 20;
const CADR_CHARGE = 250;
const STANDART_FIRST_CADR_LEFT = 1100;
const STANDART_FIRST_CADR_RIGHT = 1250;

const cadr_height = 0;
const cadr_height_stay = 150;
const cadr_special_attack_height = 300;
const cadr_hit_height = 450;
const pain_Y = 600;
const deadly_Y = 750;
const jamp_Y = 900;


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

var cadr_jamp_right_X = 1250;
var cadr_jamp_left_X = 1100;


var	Xposition = 0;
var Yposition = 145;
var BG_Xposition = 0;

var side = RIGHT;
var stay_player = ON;
var me_dead = OFF;
var couldness = ON;
var cooldown = OFF;
var shield_up = OFF;
var press = OFF;
var click = OFF;
var me_stun = OFF;
var me_atack = ON;
var me_jamp = OFF;

var me_run = OFF;
var shifting = OFF;

var play_or_not = OFF;

var length_of_walk = 0;

var run_right = OFF;
var run_left = OFF;

var healing_position = 1800;

var my_health = 100;
var my_stamina = 100;

var health_width = 200;
var stamina_width = 200;

var fix_bug_run_animation = OFF;
/////////////////////////////////////////

var znak1 = OFF;
var enemy_position1 = 1500;
var spear_position1 = 0;
var enemy_side1 = LEFT;
var stay_enemy1 = ON;
var atacking1 = ON;
var enemy_atack1 = OFF;
var throwing1 = ON;
var stun1 = OFF;
var dead1 = OFF;

var enemy1_run = OFF;

var health_of_enemy_width1 = 100;
var health_of_enemy1 = 100;


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

var znak2 = OFF;
var enemy_position2 = 4000;
var spear_position2 = 0;
var enemy_side2 = RIGHT;
var stay_enemy2 = ON;
var atacking2 = ON;
var enemy_atack2 = OFF;
var throwing2 = ON;
var stun2 = OFF;
var dead2 = OFF;

var enemy2_run = OFF;

var health_of_enemy_width2 = 100;
var health_of_enemy2 = 100;



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


//////////////////////////////////////////
 
var znak3 = OFF;
var enemy_position3 = 3700;
var spear_position3 = 0;
var enemy_side3 = RIGHT;
var stay_enemy3 = ON;
var atacking3 = ON;
var enemy_atack3 = OFF;
var throwing3 = ON;
var stun3 = OFF;
var dead3 = OFF;

var enemy3_run = OFF;

var health_of_enemy_width3 = 100;
var health_of_enemy3 = 100;



var enemy_stay_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_stay_left_X3 = STANDART_FIRST_CADR_LEFT;

var enemy_run_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_run_left_X3 = STANDART_FIRST_CADR_LEFT;

var enemy_special_atack_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_special_atack_left_X3 = STANDART_FIRST_CADR_LEFT;

var enemy_atack_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_atack_left_X3 = STANDART_FIRST_CADR_LEFT;

var enemy_pain_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_pain_left_X3 = STANDART_FIRST_CADR_LEFT;

var enemy_dead_right_X3 = STANDART_FIRST_CADR_RIGHT;
var enemy_dead_left_X3 = STANDART_FIRST_CADR_LEFT;

//////////////////////////////////////////


var npc_position = 300;

var npc_stay_left_X = 1100;
var npc_stay_right_X = 1250;

var npc_run_right_X = 1250;
var npc_run_left_X = 1100;

var npc_talked = OFF;
var	npc_side = LEFT;
var npc_angry = OFF;
var npc_moving = OFF;


//////////////////////////////////////////

var boss_stay_right_X = 1600;
var boss_stay_left_X = 1400;
var boss_stay_Y = 200;

var boss_run_right_X = 1600;
var boss_run_left_X = 1400;
var boss_run_Y = 0;

var boss_position = 6000;
var boss_atack = OFF;
var boss_side = RIGHT;
var boss_health = 600;
var boss_health_width = 100;

//////////////////////////////////////////


var main_character = document.getElementById('main_character');
var BG = document.getElementById('BG');
var Stamina = document.getElementById('Stamina');
var Stamina_bar = document.getElementById('Stamina_bar');
var Health = document.getElementById('Health');
var Health_bar = document.getElementById('HP_bar');

var game = document.getElementById('Game');

var enemy1 = document.getElementById('enemy1');
var enemy_health1 = document.getElementById('enemy_health1');
var spear1 = document.getElementById('spear1');
var enemy_health_bar1 = document.getElementById('Health_of_enemy1');

var enemy2 = document.getElementById('enemy2');
var enemy_health2 = document.getElementById('enemy_health2');
var spear2 = document.getElementById('spear2');
var enemy_health_bar2 = document.getElementById('Health_of_enemy2');

var enemy3 = document.getElementById('enemy3');
var enemy_health3 = document.getElementById('enemy_health3');
var spear3 = document.getElementById('spear3');
var enemy_health_bar3 = document.getElementById('Health_of_enemy3');

var boss = document.getElementById('boss');
var boss_health_bar = document.getElementById('boss_health');
var boss_HP = document.getElementById('boss_HP');

var field_for_text = document.getElementById('field_for_text');
var run_aud = document.getElementById('run_aud');
var hit_aud = document.getElementById('hit_aud');
var npc = document.getElementById('NPC');
var healing = document.getElementById('heal');

var quest_list = document.getElementById('quest_list');

var window_agree = document.getElementById('window');
var Q_wind = document.getElementById('Q_wind');
var darcness = document.getElementById('darkness');

var state = document.getElementById('state');
var statement_of_npc = document.getElementById('statement');

var teaching_shield_hide = 'Press S to hide from atacks of enemies, press SHIFT for charge, press Q to hit';
var teaching_walk_right_and_left = 'Press A to go left, press D to go right , press W to jump';
var teaching_talking = 'Press E to talk';
var teaching_reputation = 'GREEN frases are mean that your eputation with this fraction is up. RED means that it is down'

var need_help_state = 'Oh, praise the gods. Sombody robed my vagon and tried to kill me! Help me please';
var thank_you_stay = 'Ohh, thank you traveler. All goods for you';
var disapeard_frase = 'What a bad day! Goods left me';
var we_are_close_state = 'We are close';
var teach_heal_frase = 'To use items press F';


var quest_content1 = document.getElementById('quest_content1');


var apdate_quest1 = '#1)_ Continue your travel and find the problem';



var frase_N1 = OFF;
var frase_N2 = OFF;
var	frase_N3 = OFF;
var frase_N4 = OFF;
var frase_N5 = OFF;
var counter = 0;
var counter_state = 0;
var counter_quest = 0;
var speed = 35;


////////////audio/////////////////

var run_aud = document.getElementById('run_aud');
var main_theme = document.getElementById('main_theme');
var attackNT_sound = document.getElementById('attackNT_sound');
var attackS_sound = document.getElementById('attackS_sound');
var music_on = document.getElementById('music_on');
var music_on_l = 0;
var settings_release = document.getElementById('settings_icon_svg');
var settings_release_open = 0;
var settings = document.getElementById('settings');
var block = document.getElementById('block');

var skip = document.getElementById('skip');
var next = document.getElementById('next');
var images = document.getElementById('history_img');
var history_window = document.getElementById('history_window');
var number_next = 0;
