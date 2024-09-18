### Roster Details<br />
Team Name: DMS<br />
Roster: AW, kAlash, molodoy, sFade8, sm3t<br />
Global Rank: [99](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [72]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  845.6<br />
<br />
Final Rank Value (845.6) = Starting Rank Value (871.2) + Head To Head Adjustments (-25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 871.2
- 400 + ( ( 0.241 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 871.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      106 | 2024-09-14 | Monte Gen        | L   | 1.000      | -            | -                | -                | -         |   -10.17 | AW, kAlash, molodoy, sFade8, sm3t |
|           62 |      142 | 2024-09-13 | RUBY             | W   | 1.000      | 0.143        | 0.072 (0.010)    | -                | 0 (0.000) |    15.07 | AW, kAlash, molodoy, sFade8, sm3t |
|           61 |      173 | 2024-09-12 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -15.56 | AW, kAlash, molodoy, sFade8, sm3t |
|           60 |      180 | 2024-09-12 | Rebels           | W   | 1.000      | 0.384        | 0.063 (0.024)    | 0.682 (0.262)    | 0 (0.000) |    21.77 | AW, kAlash, molodoy, sFade8, sm3t |
|           59 |      217 | 2024-09-11 | RUBY             | W   | 1.000      | 0.143        | 0.072 (0.010)    | -                | 0 (0.000) |    16.38 | AW, kAlash, molodoy, sFade8, sm3t |
|           58 |      316 | 2024-09-07 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -10.73 | AW, kAlash, molodoy, sFade8, sm3t |
|           57 |      530 | 2024-08-30 | EYEBALLERS       | L   | 1.000      | -            | -                | -                | -         |   -19.32 | AW, kAlash, sFade8, sm3t, woozzzi |
|           56 |      562 | 2024-08-29 | CYBERSHOKE       | L   | 1.000      | -            | -                | -                | -         |    -9.18 | AW, kAlash, molodoy, sFade8, sm3t |
|           55 |      603 | 2024-08-28 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -10.22 | AW, kAlash, sFade8, sm3t, woozzzi |
|           54 |      634 | 2024-08-28 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -4.51 | AW, h1te, kAlash, sFade8, sm3t    |
|           53 |      773 | 2024-08-26 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -5.25 | AW, h1te, kAlash, sFade8, sm3t    |
|           52 |      945 | 2024-08-21 | Revenant         | L   | 1.000      | -            | -                | -                | -         |   -12.39 | AW, h1te, kAlash, sFade8, sm3t    |
|           51 |     1017 | 2024-08-19 | Space            | W   | 1.000      | 0.435        | -                | 0.497 (0.216)    | 0 (0.000) |    10.70 | AW, h1te, kAlash, sFade8, sm3t    |
|           50 |     1069 | 2024-08-17 | EYEBALLERS       | W   | 0.986      | 0.435        | -                | 0.469 (0.201)    | 0 (0.000) |    10.18 | AW, h1te, kAlash, sFade8, sm3t    |
|           49 |     1082 | 2024-08-16 | BetBoom          | L   | 0.980      | -            | -                | -                | -         |    -3.08 | AW, h1te, kAlash, sFade8, sm3t    |
|           48 |     1117 | 2024-08-15 | ALTERNATE aTTaX  | L   | 0.974      | -            | -                | -                | -         |   -16.23 | AW, h1te, kAlash, sFade8, sm3t    |
|           47 |     1167 | 2024-08-13 | Illuminar        | W   | 0.961      | 0.435        | -                | 0.357 (0.149)    | 0 (0.000) |    13.64 | AW, h1te, kAlash, sFade8, sm3t    |
|           46 |     1173 | 2024-08-13 | Endpoint         | L   | 0.960      | -            | -                | -                | -         |   -10.30 | AW, h1te, kAlash, sFade8, sm3t    |
|           45 |     1217 | 2024-08-12 | EYEBALLERS       | L   | 0.954      | -            | -                | -                | -         |   -19.89 | AW, h1te, kAlash, sFade8, sm3t    |
|           44 |     1274 | 2024-08-10 | FLuffy Gangsters | W   | 0.939      | 0.435        | -                | 0.414 (0.169)    | 0 (0.000) |     9.52 | AW, h1te, kAlash, sFade8, sm3t    |
|           43 |     1374 | 2024-08-07 | Monte Gen        | W   | 0.919      | 0.435        | -                | 0.490 (0.196)    | 0 (0.000) |    15.44 | AW, h1te, kAlash, sFade8, sm3t    |
|           42 |     1413 | 2024-08-06 | Endpoint         | L   | 0.913      | -            | -                | -                | -         |   -12.88 | AW, h1te, kAlash, sFade8, sm3t    |
|           41 |     1800 | 2024-07-26 | AMKAL            | L   | 0.839      | -            | -                | -                | -         |    -4.98 | AW, h1te, kAlash, sFade8, sm3t    |
|           40 |     1802 | 2024-07-26 | Revenant         | W   | 0.838      | 0.650        | 0.044 (0.024)    | 0.682 (0.372)    | 1 (0.838) |    15.01 | AW, h1te, kAlash, sFade8, sm3t    |
|           39 |     1840 | 2024-07-25 | 3DMAX            | L   | 0.831      | -            | -                | -                | -         |    -0.84 | AW, h1te, kAlash, sFade8, sm3t    |
|           38 |     1866 | 2024-07-24 | Eternal Fire     | L   | 0.826      | -            | -                | -                | -         |    -0.11 | AW, h1te, kAlash, sFade8, sm3t    |
|           37 |     2009 | 2024-07-19 | SINNERS          | L   | 0.795      | -            | -                | -                | -         |    -6.83 | AW, h1te, kAlash, sFade8, sm3t    |
|           36 |     2058 | 2024-07-18 | Space            | L   | 0.788      | -            | -                | -                | -         |   -13.44 | AW, h1te, kAlash, sFade8, sm3t    |
|           35 |     2191 | 2024-07-16 | ALTERNATE aTTaX  | W   | 0.775      | 0.435        | 0.110 (0.037)    | 0.792 (0.266)    | 0 (0.000) |    13.80 | AW, h1te, kAlash, sFade8, sm3t    |
|           34 |     2593 | 2024-06-12 | Verdant          | L   | 0.548      | -            | -                | -                | -         |    -8.66 | AW, h1te, kAlash, sFade8, sm3t    |
|           33 |     2618 | 2024-06-11 | Zero Tenacity    | L   | 0.541      | -            | -                | -                | -         |    -4.57 | AW, h1te, kAlash, sFade8, sm3t    |
|           32 |     2796 | 2024-06-07 | Zero Tenacity    | L   | 0.515      | -            | -                | -                | -         |    -4.40 | AW, h1te, kAlash, sFade8, sm3t    |
|           31 |     2897 | 2024-06-06 | CYBERSHOKE       | L   | 0.506      | -            | -                | -                | -         |    -7.62 | AW, h1te, kAlash, sFade8, sm3t    |
|           30 |     2997 | 2024-06-04 | Sampi            | L   | 0.492      | -            | -                | -                | -         |    -7.59 | AW, h1te, kAlash, sFade8, sm3t    |
|           29 |     3013 | 2024-06-03 | ARCRED           | L   | 0.487      | -            | -                | -                | -         |    -8.13 | AW, h1te, kAlash, sFade8, sm3t    |
|           28 |     3024 | 2024-06-02 | Zero Tenacity    | L   | 0.481      | -            | -                | -                | -         |    -4.12 | AW, h1te, kAlash, sFade8, sm3t    |
|           27 |     3034 | 2024-06-02 | fnatic           | W   | 0.480      | 0.143        | 0.321 (0.022)    | -                | -         |    13.86 | AW, h1te, kAlash, sFade8, sm3t    |
|           26 |     3057 | 2024-06-01 | ENCE             | W   | 0.474      | 0.143        | 0.138 (0.009)    | -                | -         |    12.35 | AW, h1te, kAlash, sFade8, sm3t    |
|           25 |     3067 | 2024-06-01 | Zero Tenacity    | L   | 0.473      | -            | -                | -                | -         |    -3.79 | AW, h1te, kAlash, sFade8, sm3t    |
|           24 |     3072 | 2024-06-01 | ENCE             | W   | 0.473      | -            | -                | -                | -         |    12.51 | AW, h1te, kAlash, sFade8, sm3t    |
|           23 |     3089 | 2024-05-31 | Spirit Academy   | W   | 0.468      | -            | -                | -                | -         |     6.18 | AW, h1te, kAlash, sFade8, sm3t    |
|           22 |     3125 | 2024-05-30 | Nemiga           | W   | 0.460      | 0.372        | 0.291 (0.050)    | 0.811 (0.139)    | -         |    11.85 | AW, h1te, kAlash, sFade8, sm3t    |
|           21 |     3144 | 2024-05-29 | Verdant          | W   | 0.455      | -            | -                | -                | -         |     7.93 | AW, h1te, kAlash, sFade8, sm3t    |
|           20 |     3215 | 2024-05-26 | GUN5             | L   | 0.432      | -            | -                | -                | -         |    -4.75 | AW, h1te, kAlash, sFade8, sm3t    |
|           19 |     3244 | 2024-05-24 | VP.Prodigy       | L   | 0.421      | -            | -                | -                | -         |    -7.47 | AW, h1te, kAlash, sFade8, sm3t    |
|           18 |     3253 | 2024-05-24 | BetBoom          | L   | 0.419      | -            | -                | -                | -         |    -1.78 | AW, h1te, kAlash, sFade8, sm3t    |
|           17 |     3263 | 2024-05-23 | B8               | L   | 0.413      | -            | -                | -                | -         |    -2.68 | AW, h1te, kAlash, sFade8, sm3t    |
|           16 |     3343 | 2024-05-21 | EYEBALLERS       | W   | 0.401      | -            | -                | -                | -         |     4.92 | AW, h1te, kAlash, sFade8, sm3t    |
|           15 |     3346 | 2024-05-21 | MOUZ NXT         | W   | 0.400      | 0.435        | 0.109 (0.019)    | -                | -         |     8.28 | AW, h1te, kAlash, sFade8, sm3t    |
|           14 |     3401 | 2024-05-19 | Space            | L   | 0.388      | -            | -                | -                | -         |    -7.16 | AW, h1te, kAlash, sFade8, sm3t    |
|           13 |     3433 | 2024-05-18 | 777              | W   | 0.380      | -            | -                | -                | -         |     2.92 | AW, h1te, kAlash, sFade8, sm3t    |
|           12 |     3438 | 2024-05-18 | Sampi            | W   | 0.380      | 0.435        | -                | 1.000 (0.165)    | -         |     6.96 | AW, h1te, kAlash, sFade8, sm3t    |
|           11 |     3482 | 2024-05-17 | MOUZ NXT         | L   | 0.372      | -            | -                | -                | -         |    -3.99 | AW, h1te, kAlash, sFade8, sm3t    |
|           10 |     3502 | 2024-05-16 | B8               | L   | 0.368      | -            | -                | -                | -         |    -2.52 | AW, h1te, kAlash, sFade8, sm3t    |
|            9 |     3554 | 2024-05-15 | Monte            | L   | 0.361      | -            | -                | -                | -         |    -4.76 | AW, h1te, kAlash, sFade8, sm3t    |
|            8 |     3614 | 2024-05-14 | Rare Atom        | W   | 0.354      | -            | -                | -                | -         |     5.16 | AW, h1te, kAlash, sFade8, sm3t    |
|            7 |     3625 | 2024-05-14 | Sangal           | W   | 0.352      | 0.435        | 0.292 (0.045)    | -                | -         |    10.17 | AW, h1te, kAlash, sFade8, sm3t    |
|            6 |     3641 | 2024-05-13 | Heimo            | W   | 0.347      | -            | -                | -                | -         |     2.53 | AW, h1te, kAlash, sFade8, sm3t    |
|            5 |     3694 | 2024-05-11 | CYBERSHOKE       | W   | 0.334      | -            | -                | -                | -         |     6.66 | AW, h1te, kAlash, sFade8, sm3t    |
|            4 |     3959 | 2024-04-28 | Alliance         | L   | 0.247      | -            | -                | -                | -         |    -4.25 | AW, h1te, kAlash, sFade8, sm3t    |
|            3 |     4010 | 2024-04-26 | BLEED            | L   | 0.233      | -            | -                | -                | -         |    -3.64 | AW, h1te, kAlash, sFade8, sm3t    |
|            2 |     4215 | 2024-04-18 | Apeks            | L   | 0.181      | -            | -                | -                | -         |    -3.79 | AW, h1te, kAlash, sFade8, sm3t    |
|            1 |     4224 | 2024-04-18 | EYEBALLERS       | W   | 0.181      | -            | -                | -                | -         |     2.24 | AW, h1te, kAlash, sFade8, sm3t    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($668.89)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
