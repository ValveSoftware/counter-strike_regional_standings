### Roster Details<br />
Team Name: Acend<br />
Roster: h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN<br />
Global Rank: [46](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [34]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1234.8<br />
<br />
Final Rank Value (1234.8) = Starting Rank Value (1430.3) + Head To Head Adjustments (-195.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.464[<sup>1</sup>](#table2)
- Bounty Collected: 0.429[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.979[<sup>2</sup>](#table1)

The average of these factors is 0.547<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1430.3
- 400 + ( ( 0.547 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1430.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |       63 | 2026-06-28 | Inner Circle      | L   | 1.000      | -            | -                | -                | -         |   -10.39 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           85 |       85 | 2026-06-27 | Echo              | W   | 1.000      | 0.548        | 0.056 (0.031)    | 0.653 (0.358)    | 1 (1.000) |    16.14 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           84 |      109 | 2026-06-26 | INFINITE          | W   | 1.000      | 0.548        | 0.032 (0.018)    | 0.616 (0.338)    | 1 (1.000) |    18.50 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           83 |      118 | 2026-06-25 | Sharks            | L   | 1.000      | -            | -                | -                | -         |   -10.28 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           82 |      149 | 2026-06-24 | Sashi             | W   | 1.000      | 0.548        | -                | 0.490 (0.269)    | 1 (1.000) |    11.62 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           81 |      154 | 2026-06-23 | GamerLegion       | W   | 1.000      | 0.548        | 0.499 (0.274)    | 0.445 (0.244)    | 1 (1.000) |    28.23 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           80 |      189 | 2026-06-20 | K27               | L   | 1.000      | -            | -                | -                | -         |   -13.67 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           79 |      204 | 2026-06-19 | BET-M             | W   | 1.000      | -            | -                | -                | -         |     8.74 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           78 |      211 | 2026-06-19 | INOX Division     | L   | 1.000      | -            | -                | -                | -         |   -18.83 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           77 |      236 | 2026-06-17 | Lavked            | W   | 1.000      | 0.371        | -                | 0.929 (0.344)    | -         |     9.21 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           76 |      261 | 2026-06-15 | Gentle Mates      | L   | 1.000      | -            | -                | -                | -         |   -12.13 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           75 |      395 | 2026-06-11 | INOX Division     | W   | 1.000      | 0.435        | 0.024 (0.010)    | 1.000 (0.435)    | -         |    10.25 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           74 |      414 | 2026-06-10 | ARCRED            | W   | 1.000      | 0.435        | 0.021 (0.009)    | -                | -         |    11.99 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           73 |      433 | 2026-06-08 | ex-RUBY           | L   | 1.000      | -            | -                | -                | -         |   -20.91 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           72 |      461 | 2026-06-07 | Phantom           | L   | 1.000      | -            | -                | -                | -         |   -24.04 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           71 |      530 | 2026-06-05 | Ursa              | W   | 0.993      | 0.435        | -                | 0.903 (0.390)    | -         |     5.50 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           70 |      547 | 2026-06-04 | CYBERSHOKE        | L   | 0.986      | -            | -                | -                | -         |   -21.41 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           69 |      781 | 2026-05-28 | Just Players      | L   | 0.938      | -            | -                | -                | -         |   -26.11 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           68 |      943 | 2026-05-23 | Inner Circle      | L   | 0.909      | -            | -                | -                | -         |   -10.98 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           67 |      961 | 2026-05-23 | Betclic           | W   | 0.907      | -            | -                | -                | 1 (0.907) |     8.41 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           66 |      980 | 2026-05-23 | Wildcard          | L   | 0.906      | -            | -                | -                | -         |   -13.31 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           65 |     1020 | 2026-05-22 | Gaimin Gladiators | W   | 0.900      | -            | -                | -                | 1 (0.900) |     7.13 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           64 |     1066 | 2026-05-21 | INFINITE          | W   | 0.893      | 0.435        | 0.032 (0.013)    | 0.616 (0.239)    | 1 (0.893) |    16.00 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           63 |     1070 | 2026-05-21 | HAVU              | W   | 0.892      | -            | -                | -                | 1 (0.892) |     2.36 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           62 |     1074 | 2026-05-21 | Inner Circle      | W   | 0.892      | 0.435        | 0.142 (0.055)    | 0.608 (0.236)    | 1 (0.892) |    18.52 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           61 |     1079 | 2026-05-21 | KOLESIE           | L   | 0.892      | -            | -                | -                | -         |   -20.68 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           60 |     1087 | 2026-05-21 | CHAOS             | W   | 0.891      | -            | -                | -                | 1 (0.891) |     0.22 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           59 |     1361 | 2026-05-11 | BASEMENT BOYS     | L   | 0.827      | -            | -                | -                | -         |   -20.13 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           58 |     1371 | 2026-05-11 | 100 Thieves       | L   | 0.826      | -            | -                | -                | -         |   -13.55 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           57 |     1404 | 2026-05-10 | Coalesce          | W   | 0.820      | -            | -                | -                | -         |     0.60 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           56 |     1422 | 2026-05-10 | HAFO              | W   | 0.818      | -            | -                | -                | -         |     0.17 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           55 |     2030 | 2026-04-24 | BIG               | L   | 0.712      | -            | -                | -                | -         |    -8.92 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           54 |     2090 | 2026-04-22 | MOUZ NXT          | W   | 0.700      | -            | -                | -                | -         |     2.48 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           53 |     2116 | 2026-04-20 | Nuclear TigeRES   | L   | 0.686      | -            | -                | -                | -         |   -14.32 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           52 |     2165 | 2026-04-18 | GenOne            | W   | 0.673      | 0.435        | -                | 1.000 (0.292)    | -         |     1.26 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           51 |     2181 | 2026-04-17 | FAVBET            | W   | 0.666      | -            | -                | -                | -         |     1.59 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           50 |     2211 | 2026-04-15 | Ursa              | L   | 0.652      | -            | -                | -                | -         |   -18.02 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           49 |     2973 | 2026-03-30 | G2                | L   | 0.549      | -            | -                | -                | -         |    -2.07 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           48 |     2985 | 2026-03-30 | BESTIA            | L   | 0.548      | -            | -                | -                | -         |   -12.92 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           47 |     2996 | 2026-03-30 | HEROIC            | W   | 0.547      | 0.341        | 0.117 (0.022)    | -                | -         |     7.47 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           46 |     3039 | 2026-03-29 | G2                | L   | 0.541      | -            | -                | -                | -         |    -2.04 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           45 |     3049 | 2026-03-29 | Walczaki          | W   | 0.541      | 0.341        | 0.105 (0.019)    | -                | -         |     4.37 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           44 |     3057 | 2026-03-29 | cswalkers         | W   | 0.541      | -            | -                | -                | -         |     0.17 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           43 |     3068 | 2026-03-29 | CarritoSpain      | W   | 0.540      | -            | -                | -                | -         |     0.19 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           42 |     3698 | 2026-03-18 | CYBERSHOKE        | L   | 0.466      | -            | -                | -                | -         |   -11.80 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           41 |     3913 | 2026-03-13 | Eternal Fire      | W   | 0.434      | -            | -                | -                | -         |     2.48 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           40 |     4012 | 2026-03-11 | STATE             | W   | 0.421      | -            | -                | -                | -         |     3.96 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           39 |     4105 | 2026-03-09 | ex-Zero Tenacity  | L   | 0.407      | -            | -                | -                | -         |   -12.18 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           38 |     4129 | 2026-03-09 | Rune Eaters       | W   | 0.406      | -            | -                | -                | -         |     2.01 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           37 |     4153 | 2026-03-08 | MOUZ NXT          | L   | 0.402      | -            | -                | -                | -         |   -11.55 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           36 |     4186 | 2026-03-08 | Nemiga            | L   | 0.400      | -            | -                | -                | -         |    -9.82 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           35 |     4211 | 2026-03-08 | Nemesis           | L   | 0.399      | -            | -                | -                | -         |   -10.12 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           34 |     4243 | 2026-03-07 | BET-M             | W   | 0.394      | -            | -                | -                | -         |     2.17 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           33 |     4285 | 2026-03-06 | Omega             | W   | 0.387      | -            | -                | -                | -         |     1.85 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           32 |     4348 | 2026-03-05 | KOLESIE           | W   | 0.379      | -            | -                | -                | -         |     0.52 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           31 |     4383 | 2026-03-04 | ex-RUBY           | L   | 0.374      | -            | -                | -                | -         |   -10.91 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           30 |     4494 | 2026-03-02 | NOVAQ             | W   | 0.359      | -            | -                | -                | -         |     0.53 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           29 |     4506 | 2026-03-01 | G2 Ares           | L   | 0.355      | -            | -                | -                | -         |   -10.32 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           28 |     4523 | 2026-03-01 | Omega             | W   | 0.353      | -            | -                | -                | -         |     1.61 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           27 |     4557 | 2026-02-28 | DragonClaw        | W   | 0.348      | -            | -                | -                | -         |     0.62 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           26 |     4570 | 2026-02-28 | PsychoFace        | L   | 0.346      | -            | -                | -                | -         |   -10.04 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           25 |     4775 | 2026-02-24 | Omega             | W   | 0.320      | -            | -                | -                | -         |     1.44 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           24 |     4923 | 2026-02-21 | Metizport         | W   | 0.301      | -            | -                | -                | -         |     1.58 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           23 |     4940 | 2026-02-21 | Phantom           | W   | 0.300      | -            | -                | -                | -         |     0.12 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           22 |     4954 | 2026-02-21 | ReThink           | W   | 0.299      | -            | -                | -                | -         |     0.44 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           21 |     5027 | 2026-02-19 | SINNERS           | L   | 0.288      | -            | -                | -                | -         |    -6.75 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           20 |     5147 | 2026-02-17 | AM                | W   | 0.274      | -            | -                | -                | -         |     0.16 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           19 |     5326 | 2026-02-14 | Nemesis           | W   | 0.253      | 0.396        | 0.138 (0.014)    | -                | -         |     1.32 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           18 |     5376 | 2026-02-13 | Metizport         | W   | 0.246      | -            | -                | -                | -         |     1.21 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     5462 | 2026-02-11 | ex-Zero Tenacity  | W   | 0.233      | -            | -                | -                | -         |     0.27 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     5556 | 2026-02-08 | Hashiras          | W   | 0.212      | -            | -                | -                | -         |     0.15 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     5573 | 2026-02-07 | cirahvi           | W   | 0.207      | -            | -                | -                | -         |     0.12 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     5750 | 2026-02-01 | BRUTE             | L   | 0.167      | -            | -                | -                | -         |    -5.11 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     5919 | 2026-01-26 | MASONIC           | L   | 0.126      | -            | -                | -                | -         |    -3.31 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     5945 | 2026-01-25 | 777               | W   | 0.119      | -            | -                | -                | -         |     0.01 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     5975 | 2026-01-24 | los kogutos       | L   | 0.113      | -            | -                | -                | -         |    -3.35 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     6022 | 2026-01-23 | Bebop             | W   | 0.107      | -            | -                | -                | -         |     0.02 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     6081 | 2026-01-22 | Just Players      | W   | 0.099      | -            | -                | -                | -         |     0.04 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     6140 | 2026-01-20 | BASEMENT BOYS     | W   | 0.086      | -            | -                | -                | -         |     0.58 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     6148 | 2026-01-19 | Ursa              | L   | 0.081      | -            | -                | -                | -         |    -2.43 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     6169 | 2026-01-18 | Eternal Fire      | L   | 0.074      | -            | -                | -                | -         |    -2.33 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     6182 | 2026-01-18 | Eternal Fire      | L   | 0.073      | -            | -                | -                | -         |    -2.28 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     6303 | 2026-01-16 | Bebop             | L   | 0.059      | -            | -                | -                | -         |    -1.84 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     6376 | 2026-01-13 | Bushido Wildcats  | W   | 0.039      | -            | -                | -                | -         |     0.03 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     6386 | 2026-01-12 | Ursa              | L   | 0.032      | -            | -                | -                | -         |    -0.98 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     6394 | 2026-01-11 | The Last Resort   | W   | 0.026      | -            | -                | -                | -         |     0.03 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,394.72)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      1.000 | $30,000.00     | $30,000.00      |
| 2026-05-24 |      0.914 | $2,000.00      | $1,828.63       |
| 2026-05-11 |      0.828 | $1,753.00      | $1,451.48       |
| 2026-03-30 |      0.549 | $1,159.00      | $636.17         |
| 2026-03-08 |      0.400 | $8,000.00      | $3,202.25       |
| 2026-02-21 |      0.301 | $5,600.00      | $1,687.51       |
| 2026-02-20 |      0.294 | $2,000.00      | $588.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
