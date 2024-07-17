### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  2027.3<br />
<br />
Final Rank Value (2027.3) = Starting Rank Value (1990.7) + Head To Head Adjustments (36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.706[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.741<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1990.7
- 400 + ( ( 0.741 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1990.7


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
|           33 |      318 | 2024-06-16 | Natus Vincere | W   | 0.994      | 0.729        | 1.000 (0.724)    | 0.285 (0.207)    | 1 (0.994) |    10.15 | chopper, donk, magixx, sh1ro, zont1x |
|           32 |      352 | 2024-06-15 | Vitality      | W   | 0.987      | 0.729        | 0.733 (0.527)    | 0.416 (0.299)    | 1 (0.987) |    14.26 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      418 | 2024-06-13 | Virtus.pro    | W   | 0.975      | 0.729        | 0.349 (0.248)    | 0.367 (0.261)    | 1 (0.975) |     5.29 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      447 | 2024-06-12 | G2            | W   | 0.968      | -            | -                | -                | 1 (0.968) |     0.01 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      911 | 2024-06-01 | Vitality      | L   | 0.894      | -            | -                | -                | -         |   -14.55 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      995 | 2024-05-29 | FaZe          | W   | 0.875      | 0.624        | 0.902 (0.492)    | 0.479 (0.262)    | 1 (0.875) |    10.86 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |     1024 | 2024-05-28 | Natus Vincere | W   | 0.867      | 0.624        | 1.000 (0.541)    | 0.285 (0.154)    | 1 (0.867) |     9.41 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |     1040 | 2024-05-27 | FlyQuest      | W   | 0.861      | 0.624        | -                | 0.388 (0.209)    | 1 (0.861) |     0.82 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1262 | 2024-05-19 | MOUZ          | L   | 0.806      | -            | -                | -                | -         |   -11.18 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     1299 | 2024-05-18 | Falcons       | W   | 0.799      | 0.769        | 0.344 (0.212)    | 0.271 (0.167)    | 1 (0.799) |     1.96 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     1363 | 2024-05-16 | HEROIC        | W   | 0.787      | 0.769        | 0.333 (0.202)    | 0.448 (0.271)    | 1 (0.787) |     4.25 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     1421 | 2024-05-15 | Aurora        | W   | 0.779      | 0.769        | 0.514 (0.308)    | 0.813 (0.487)    | 1 (0.779) |     2.13 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     2609 | 2024-03-28 | FaZe          | L   | 0.462      | -            | -                | -                | -         |    -9.23 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     2717 | 2024-03-22 | Natus Vincere | W   | 0.421      | 1.000        | 1.000 (0.421)    | -                | -         |     4.82 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     2732 | 2024-03-21 | Imperial      | W   | 0.415      | 1.000        | 0.386 (0.160)    | 0.607 (0.252)    | -         |     0.69 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     2744 | 2024-03-21 | Cloud9        | W   | 0.413      | -            | -                | -                | -         |     0.17 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     2989 | 2024-03-10 | Metizport     | W   | 0.341      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     3009 | 2024-03-09 | BIG           | W   | 0.335      | -            | -                | -                | -         |     0.32 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     3044 | 2024-03-08 | Elevate       | W   | 0.326      | -            | -                | -                | -         |     0.06 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     3399 | 2024-02-21 | HEROIC        | W   | 0.220      | -            | -                | -                | -         |     1.46 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3430 | 2024-02-20 | MOUZ          | L   | 0.214      | -            | -                | -                | -         |    -3.38 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3449 | 2024-02-19 | Astralis      | W   | 0.208      | -            | -                | -                | -         |     2.40 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3464 | 2024-02-19 | ENCE          | W   | 0.205      | -            | -                | -                | -         |     0.31 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3647 | 2024-02-11 | FaZe          | W   | 0.154      | -            | -                | -                | -         |     1.87 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3655 | 2024-02-10 | Falcons       | W   | 0.148      | -            | -                | -                | -         |     0.39 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3704 | 2024-02-06 | FaZe          | W   | 0.120      | -            | -                | -                | -         |     1.45 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3733 | 2024-02-04 | Complexity    | W   | 0.107      | -            | -                | -                | -         |     0.94 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3754 | 2024-02-03 | Natus Vincere | W   | 0.101      | -            | -                | -                | -         |     1.15 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     3828 | 2024-02-01 | The MongolZ   | W   | 0.086      | -            | -                | -                | -         |     1.31 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     3841 | 2024-01-31 | Apeks         | W   | 0.080      | -            | -                | -                | -         |     0.01 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3933 | 2024-01-25 | FaZe          | L   | 0.039      | -            | -                | -                | -         |    -0.76 | baz, chopper, hally, sh1ro, zont1x   |
|            2 |     3948 | 2024-01-24 | Liquid        | L   | 0.033      | -            | -                | -                | -         |    -0.95 | baz, chopper, hally, sh1ro, zont1x   |
|            1 |     4065 | 2024-01-20 | MOUZ          | W   | 0.007      | -            | -                | -                | -         |     0.11 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($387,744.65)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $200,000.00    | $198,725.82     |
| 2024-06-02 |      0.901 | $20,000.00     | $18,027.85      |
| 2024-05-19 |      0.806 | $100,000.00    | $80,639.38      |
| 2024-03-31 |      0.481 | $45,000.00     | $21,646.27      |
| 2024-03-10 |      0.341 | $20,000.00     | $6,827.64       |
| 2024-02-11 |      0.154 | $400,000.00    | $61,574.17      |
| 2024-01-28 |      0.061 | $5,000.00      | $303.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
