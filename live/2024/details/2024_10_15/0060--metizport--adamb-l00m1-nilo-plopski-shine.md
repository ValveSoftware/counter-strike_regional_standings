### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [60](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [42]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  976.7<br />
<br />
Final Rank Value (976.7) = Starting Rank Value (901.0) + Head To Head Adjustments (75.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 901.0
- 400 + ( ( 0.258 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 901.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       41 | 2024-10-12 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.06 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |       65 | 2024-10-10 | fnatic            | W   | 1.000      | 0.435        | 0.217 (0.094)    | 0.438 (0.190)    | 0 (0.000) |    23.66 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      142 | 2024-10-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.078 (0.034)    | 0.787 (0.342)    | 0 (0.000) |    12.51 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      168 | 2024-10-07 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -10.12 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      249 | 2024-10-04 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.774 (0.336)    | 0 (0.000) |    14.30 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      294 | 2024-10-03 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.45 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |      371 | 2024-10-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.29 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |      708 | 2024-09-23 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -14.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |      896 | 2024-09-16 | 9INE              | W   | 1.000      | 0.384        | 0.095 (0.036)    | 0.686 (0.264)    | 0 (0.000) |    15.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |     1052 | 2024-09-11 | Zero Tenacity     | L   | 0.973      | -            | -                | -                | -         |   -10.34 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |     1106 | 2024-09-09 | Zero Tenacity     | L   | 0.960      | -            | -                | -                | -         |   -11.03 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |     1252 | 2024-09-04 | Sampi             | W   | 0.927      | 0.384        | 0.046 (0.016)    | 0.677 (0.241)    | 0 (0.000) |    12.20 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |     1314 | 2024-09-02 | FAVBET            | W   | 0.913      | 0.384        | 0.044 (0.015)    | 0.887 (0.311)    | 0 (0.000) |    13.37 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |     1466 | 2024-08-28 | Nemiga            | W   | 0.879      | 0.384        | 0.192 (0.065)    | 0.736 (0.249)    | 0 (0.000) |    20.07 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1531 | 2024-08-27 | ex-Enterprise     | W   | 0.872      | 0.384        | -                | 0.463 (0.155)    | 0 (0.000) |    11.42 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1711 | 2024-08-22 | Complexity        | L   | 0.841      | -            | -                | -                | -         |    -0.55 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1782 | 2024-08-21 | 9INE              | L   | 0.833      | -            | -                | -                | -         |   -11.84 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     1831 | 2024-08-20 | TSM               | L   | 0.825      | -            | -                | -                | -         |    -9.86 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     1848 | 2024-08-19 | Sashi             | L   | 0.821      | -            | -                | -                | -         |    -9.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     1964 | 2024-08-15 | PARIVISION        | L   | 0.792      | -            | -                | -                | -         |    -8.85 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2065 | 2024-08-12 | Sampi             | W   | 0.773      | 0.384        | 0.046 (0.014)    | 0.677 (0.201)    | 0 (0.000) |    11.12 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2166 | 2024-08-08 | Into the Breach   | W   | 0.746      | -            | -                | -                | -         |    11.16 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2195 | 2024-08-07 | Johnny Speeds     | W   | 0.741      | -            | -                | -                | -         |    17.53 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2204 | 2024-08-07 | TSM               | W   | 0.740      | -            | -                | -                | -         |    14.18 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2251 | 2024-08-06 | BLEED             | W   | 0.734      | -            | -                | -                | -         |    17.39 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     2255 | 2024-08-06 | HAVU              | W   | 0.733      | -            | -                | -                | -         |     2.89 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     2260 | 2024-08-06 | Johnny Speeds     | L   | 0.732      | -            | -                | -                | -         |    -5.20 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     2416 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.701      | -            | -                | -                | -         |    12.46 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     2426 | 2024-08-01 | Insilio           | L   | 0.700      | -            | -                | -                | -         |    -9.29 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     2523 | 2024-07-30 | QUAZAR            | W   | 0.686      | -            | -                | -                | -         |     2.59 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2578 | 2024-07-28 | Insilio           | L   | 0.674      | -            | -                | -                | -         |    -8.90 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     2744 | 2024-07-23 | RUBY              | L   | 0.639      | -            | -                | -                | -         |   -12.13 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     2762 | 2024-07-22 | Permitta          | L   | 0.635      | -            | -                | -                | -         |    -9.53 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     2863 | 2024-07-19 | Sampi             | W   | 0.614      | 0.435        | -                | 0.677 (0.181)    | -         |    10.99 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     2919 | 2024-07-18 | BC.Game           | L   | 0.607      | -            | -                | -                | -         |   -11.29 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3042 | 2024-07-16 | Endpoint          | W   | 0.593      | 0.435        | 0.052 (0.014)    | -                | -         |     9.76 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     4106 | 2024-05-23 | Space             | L   | 0.232      | -            | -                | -                | -         |    -4.78 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     4211 | 2024-05-20 | Zero Tenacity     | L   | 0.215      | -            | -                | -                | -         |    -2.18 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     4265 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.201      | 0.500        | 0.133 (0.013)    | -                | -         |     5.40 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     4352 | 2024-05-16 | Rare Atom         | W   | 0.186      | -            | -                | -                | -         |     2.10 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     4536 | 2024-05-11 | BetBoom           | L   | 0.153      | -            | -                | -                | -         |    -0.90 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4551 | 2024-05-10 | EYEBALLERS        | W   | 0.147      | -            | -                | -                | -         |     1.31 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,626.75)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-09-14 |      0.995 | $500.00        | $497.26         |
| 2024-08-25 |      0.861 | $5,000.00      | $4,307.13       |
| 2024-05-12 |      0.161 | $2,000.00      | $322.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
