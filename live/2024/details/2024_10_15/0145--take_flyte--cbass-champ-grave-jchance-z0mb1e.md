### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [145](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [37]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  727.0<br />
<br />
Final Rank Value (727.0) = Starting Rank Value (824.8) + Head To Head Adjustments (-97.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 824.8
- 400 + ( ( 0.219 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 824.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |       70 | 2024-10-09 | LAG              | L   | 1.000      | -            | -                | -                | -         |   -19.77 | cbass, Champ, Grave, jchancE, z0mb1e |
|           53 |       75 | 2024-10-09 | LAG              | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.268 (0.128)    | 0 (0.000) |    11.40 | cbass, Champ, Grave, jchancE, z0mb1e |
|           52 |      108 | 2024-10-08 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -11.90 | cbass, Champ, Grave, jchancE, z0mb1e |
|           51 |      115 | 2024-10-08 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -12.94 | cbass, Champ, Grave, jchancE, z0mb1e |
|           50 |      268 | 2024-10-03 | Mythic           | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.260 (0.124)    | 0 (0.000) |    14.40 | cbass, Champ, Grave, jchancE, z0mb1e |
|           49 |      275 | 2024-10-03 | Mythic           | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.260 (0.124)    | 0 (0.000) |    15.72 | cbass, Champ, Grave, jchancE, z0mb1e |
|           48 |      347 | 2024-10-01 | Limitless        | L   | 1.000      | -            | -                | -                | -         |   -16.63 | cbass, Champ, Grave, jchancE, z0mb1e |
|           47 |      352 | 2024-10-01 | Limitless        | W   | 1.000      | 0.477        | 0.007 (0.003)    | 0.290 (0.138)    | 0 (0.000) |    14.79 | cbass, Champ, Grave, jchancE, z0mb1e |
|           46 |      443 | 2024-09-28 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|           45 |      444 | 2024-09-28 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.03 | cbass, Champ, Grave, jchancE, z0mb1e |
|           44 |      575 | 2024-09-25 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -3.39 | cbass, Champ, Grave, jchancE, z0mb1e |
|           43 |      580 | 2024-09-25 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -3.51 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      819 | 2024-09-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -4.89 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      822 | 2024-09-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -5.13 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |     1110 | 2024-09-08 | timbermen        | L   | 0.956      | -            | -                | -                | -         |    -6.73 | cbass, Grave, jchancE, serv0, z0mb1e |
|           39 |     1128 | 2024-09-07 | Wanted Goons     | W   | 0.950      | -            | -                | -                | 1 (0.950) |     7.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           38 |     1143 | 2024-09-07 | Amped Red        | W   | 0.948      | -            | -                | -                | 1 (0.948) |     3.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|           37 |     1234 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.930      | -            | -                | -                | -         |   -10.72 | cbass, Grave, jchancE, serv0, z0mb1e |
|           36 |     1238 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.930      | -            | -                | -                | -         |   -11.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           35 |     1496 | 2024-08-27 | Legacy           | L   | 0.876      | -            | -                | -                | -         |    -5.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |     1547 | 2024-08-26 | LAG              | W   | 0.870      | 0.143        | 0.005 (0.001)    | 0.268 (0.033)    | 0 (0.000) |    13.07 | cbass, Champ, jchancE, serv0, z0mb1e |
|           33 |     2176 | 2024-08-07 | timbermen        | L   | 0.743      | -            | -                | -                | -         |    -4.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |     2178 | 2024-08-07 | timbermen        | L   | 0.743      | -            | -                | -                | -         |    -5.16 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |     2230 | 2024-08-06 | BOSS             | W   | 0.737      | 0.477        | 0.039 (0.014)    | 0.409 (0.144)    | 0 (0.000) |    14.37 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |     2234 | 2024-08-06 | BOSS             | L   | 0.736      | -            | -                | -                | -         |    -8.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     2292 | 2024-08-04 | Final Form       | L   | 0.724      | -            | -                | -                | -         |   -14.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     2331 | 2024-08-03 | Wildcard         | L   | 0.716      | -            | -                | -                | -         |    -2.77 | cbass, Champ, jchancE, serv0, z0mb1e |
|           27 |     2434 | 2024-07-31 | Revenge Nation   | L   | 0.697      | -            | -                | -                | -         |   -11.44 | cbass, Grave, jchancE, serv0, z0mb1e |
|           26 |     2439 | 2024-07-31 | Revenge Nation   | L   | 0.696      | -            | -                | -                | -         |   -12.16 | cbass, Grave, jchancE, serv0, z0mb1e |
|           25 |     2681 | 2024-07-24 | InControl        | W   | 0.650      | 0.371        | 0.011 (0.003)    | 0.142 (0.034)    | 0 (0.000) |     7.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     2878 | 2024-07-18 | Wildcard         | L   | 0.610      | -            | -                | -                | -         |    -3.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2883 | 2024-07-18 | Wildcard         | L   | 0.610      | -            | -                | -                | -         |    -3.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2940 | 2024-07-17 | Party Astronauts | L   | 0.603      | -            | -                | -                | -         |    -6.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2944 | 2024-07-17 | Party Astronauts | L   | 0.603      | -            | -                | -                | -         |    -6.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     3005 | 2024-07-16 | Phoenix          | W   | 0.596      | 0.477        | 0.002 (0.001)    | 0.139 (0.040)    | 0 (0.000) |     5.81 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     3011 | 2024-07-16 | Phoenix          | W   | 0.596      | 0.477        | -                | 0.139 (0.040)    | -         |     6.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     3058 | 2024-07-15 | Nouns            | L   | 0.590      | -            | -                | -                | -         |    -3.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     3063 | 2024-07-15 | Nouns            | L   | 0.590      | -            | -                | -                | -         |    -3.38 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3318 | 2024-06-15 | Akimbo           | W   | 0.390      | 0.143        | 0.029 (0.002)    | -                | -         |     6.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3353 | 2024-06-14 | E-Xolos LAZER    | W   | 0.384      | 0.143        | -                | 0.442 (0.024)    | -         |     5.72 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     4109 | 2024-05-22 | Wildcard         | L   | 0.230      | -            | -                | -                | -         |    -1.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     4113 | 2024-05-22 | Wildcard         | L   | 0.230      | -            | -                | -                | -         |    -1.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     4159 | 2024-05-21 | timbermen        | L   | 0.223      | -            | -                | -                | -         |    -1.44 | cbass, Champ, jchancE, serv0, z0mb1e |
|           11 |     4163 | 2024-05-21 | timbermen        | L   | 0.223      | -            | -                | -                | -         |    -1.45 | cbass, Champ, jchancE, serv0, z0mb1e |
|           10 |     4196 | 2024-05-20 | MIGHT            | W   | 0.217      | -            | -                | -                | -         |     1.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     4201 | 2024-05-20 | MIGHT            | L   | 0.216      | -            | -                | -                | -         |    -5.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     4325 | 2024-05-16 | Carpe Diem       | L   | 0.190      | -            | -                | -                | -         |    -4.04 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     4326 | 2024-05-16 | Carpe Diem       | L   | 0.190      | -            | -                | -                | -         |    -4.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4366 | 2024-05-15 | M80              | L   | 0.183      | -            | -                | -                | -         |    -0.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4372 | 2024-05-15 | M80              | L   | 0.183      | -            | -                | -                | -         |    -0.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4418 | 2024-05-14 | NRG              | L   | 0.176      | -            | -                | -                | -         |    -2.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4424 | 2024-05-14 | NRG              | L   | 0.176      | -            | -                | -                | -         |    -2.21 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4903 | 2024-04-23 | Nouns            | W   | 0.037      | 0.477        | 0.057 (0.001)    | -                | -         |     0.94 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4905 | 2024-04-23 | Nouns            | L   | 0.036      | -            | -                | -                | -         |    -0.21 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,636.76)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-09 |      1.000 | $400.00        | $400.00         |
| 2024-09-08 |      0.957 | $1,000.00      | $956.75         |
| 2024-06-09 |      0.350 | $800.00        | $280.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
