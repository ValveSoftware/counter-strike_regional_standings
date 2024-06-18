### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  2045.6<br />
<br />
Final Rank Value (2045.6) = Starting Rank Value (1989.1) + Head To Head Adjustments (56.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.771[<sup>2</sup>](#table1)
- Opponent Network: 0.358[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.782<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1989.1
- 400 + ( ( 0.782 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1989.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       18 | 2024-06-16 | Natus Vincere | W   | 1.000      | 0.729        | 1.000 (0.729)    | 0.337 (0.245)    | 1 (1.000) |    10.64 | chopper, donk, magixx, sh1ro, zont1x |
|           35 |       52 | 2024-06-15 | Vitality      | W   | 1.000      | 0.729        | 0.738 (0.538)    | 0.414 (0.302)    | 1 (1.000) |    12.91 | chopper, donk, magixx, sh1ro, zont1x |
|           34 |      118 | 2024-06-13 | Virtus.pro    | W   | 1.000      | 0.729        | -                | 0.427 (0.311)    | 1 (1.000) |     5.26 | chopper, donk, magixx, sh1ro, zont1x |
|           33 |      147 | 2024-06-12 | G2            | W   | 1.000      | 0.729        | 0.756 (0.551)    | 0.508 (0.371)    | 1 (1.000) |    12.05 | chopper, donk, magixx, sh1ro, zont1x |
|           32 |      613 | 2024-06-01 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -17.40 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      697 | 2024-05-29 | FaZe          | W   | 1.000      | 0.624        | 1.000 (0.624)    | 0.540 (0.337)    | 1 (1.000) |    13.82 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      726 | 2024-05-28 | Natus Vincere | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    11.99 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      742 | 2024-05-27 | FlyQuest      | W   | 1.000      | 0.624        | -                | 0.476 (0.297)    | 1 (1.000) |     1.27 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      964 | 2024-05-19 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -13.79 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |     1001 | 2024-05-18 | Falcons       | W   | 0.994      | 0.769        | -                | 0.296 (0.226)    | 1 (0.994) |     2.82 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |     1065 | 2024-05-16 | HEROIC        | W   | 0.982      | 0.769        | -                | 0.545 (0.412)    | 1 (0.982) |     5.19 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1123 | 2024-05-15 | Aurora        | W   | 0.974      | 0.769        | 0.526 (0.394)    | 0.874 (0.654)    | 1 (0.974) |     2.03 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     2312 | 2024-03-28 | FaZe          | L   | 0.657      | -            | -                | -                | -         |   -11.96 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     2420 | 2024-03-22 | Natus Vincere | W   | 0.616      | 1.000        | 1.000 (0.616)    | -                | -         |     7.99 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     2435 | 2024-03-21 | Imperial      | W   | 0.610      | 1.000        | -                | 0.694 (0.423)    | -         |     1.31 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     2447 | 2024-03-21 | Cloud9        | W   | 0.608      | -            | -                | -                | -         |     0.53 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     2692 | 2024-03-10 | Metizport     | W   | 0.537      | -            | -                | -                | -         |     0.07 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     2712 | 2024-03-09 | BIG           | W   | 0.530      | -            | -                | -                | -         |     0.62 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     2747 | 2024-03-08 | Elevate       | W   | 0.522      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     3102 | 2024-02-21 | HEROIC        | W   | 0.416      | -            | -                | -                | -         |     3.04 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     3133 | 2024-02-20 | MOUZ          | L   | 0.409      | -            | -                | -                | -         |    -6.66 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     3152 | 2024-02-19 | Astralis      | W   | 0.403      | -            | -                | -                | -         |     4.76 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     3167 | 2024-02-19 | ENCE          | W   | 0.401      | -            | -                | -                | -         |     0.94 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3350 | 2024-02-11 | FaZe          | W   | 0.349      | 1.000        | 1.000 (0.349)    | -                | -         |     5.12 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3358 | 2024-02-10 | Falcons       | W   | 0.343      | -            | -                | -                | -         |     1.23 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3407 | 2024-02-06 | FaZe          | W   | 0.315      | 1.000        | 1.000 (0.315)    | -                | -         |     4.63 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3436 | 2024-02-04 | Complexity    | W   | 0.302      | -            | -                | -                | -         |     2.49 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3457 | 2024-02-03 | Natus Vincere | W   | 0.296      | 1.000        | 1.000 (0.296)    | -                | -         |     4.13 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3531 | 2024-02-01 | The MongolZ   | W   | 0.281      | -            | -                | -                | -         |     4.05 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3544 | 2024-01-31 | Apeks         | W   | 0.275      | -            | -                | -                | -         |     0.06 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3636 | 2024-01-25 | FaZe          | L   | 0.235      | -            | -                | -                | -         |    -3.94 | baz, chopper, hally, sh1ro, zont1x   |
|            5 |     3651 | 2024-01-24 | Liquid        | L   | 0.229      | -            | -                | -                | -         |    -6.23 | baz, chopper, hally, sh1ro, zont1x   |
|            4 |     3768 | 2024-01-20 | MOUZ          | W   | 0.202      | -            | -                | -                | -         |     3.29 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3822 | 2024-01-19 | ex-Preasy     | W   | 0.195      | -            | -                | -                | -         |     0.01 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3865 | 2024-01-18 | Entropiq      | W   | 0.189      | -            | -                | -                | -         |     0.00 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     3893 | 2024-01-18 | KOI           | L   | 0.188      | -            | -                | -                | -         |    -5.87 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($502,134.78)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $200,000.00    | $200,000.00     |
| 2024-06-02 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-05-19 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-03-31 |      0.676 | $45,000.00     | $30,434.02      |
| 2024-03-10 |      0.537 | $20,000.00     | $10,733.30      |
| 2024-02-11 |      0.349 | $400,000.00    | $139,687.50     |
| 2024-01-28 |      0.256 | $5,000.00      | $1,279.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
