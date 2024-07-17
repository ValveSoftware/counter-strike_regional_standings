### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, Plopski, Sapec<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [60](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  1046.0<br />
<br />
Final Rank Value (1046.0) = Starting Rank Value (963.4) + Head To Head Adjustments (82.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.418[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.4
- 400 + ( ( 0.262 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 963.4


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
|           64 |       58 | 2024-07-16 | Endpoint          | W   | 1.000      | 0.435        | 0.018 (0.008)    | 0.498 (0.216)    | 0 (0.000) |     9.86 | adamb, Jackinho, nilo, Plopski, Sapec |
|           63 |     1122 | 2024-05-23 | Space             | L   | 0.832      | -            | -                | -                | -         |   -17.41 | abdi, adamb, Jackinho, nilo, Plopski  |
|           62 |     1227 | 2024-05-20 | Zero Tenacity     | L   | 0.814      | -            | -                | -                | -         |   -11.41 | adamb, Jackinho, nilo, Plopski, ztr   |
|           61 |     1281 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.801      | 0.500        | 0.343 (0.137)    | 0.534 (0.214)    | 0 (0.000) |    24.54 | adamb, Jackinho, nilo, Plopski, ztr   |
|           60 |     1368 | 2024-05-16 | Rare Atom         | W   | 0.786      | 0.500        | -                | 0.372 (0.146)    | 0 (0.000) |     3.07 | adamb, Jackinho, nilo, Plopski, ztr   |
|           59 |     1552 | 2024-05-11 | BetBoom           | L   | 0.753      | -            | -                | -                | -         |    -1.52 | adamb, Jackinho, nilo, Plopski, ztr   |
|           58 |     1567 | 2024-05-10 | EYEBALLERS        | W   | 0.747      | 0.435        | -                | 0.619 (0.201)    | 0 (0.000) |     9.22 | adamb, Jackinho, nilo, Plopski, ztr   |
|           57 |     1692 | 2024-05-04 | AMKAL             | L   | 0.705      | -            | -                | -                | -         |    -6.98 | adamb, Jackinho, nilo, susp, ztr      |
|           56 |     1707 | 2024-05-03 | Zero Tenacity     | W   | 0.699      | 0.435        | 0.154 (0.047)    | 1.000 (0.304)    | 0 (0.000) |    12.56 | adamb, Jackinho, nilo, susp, ztr      |
|           55 |     1727 | 2024-05-02 | Sangal            | W   | 0.693      | 0.435        | 0.232 (0.070)    | 0.893 (0.269)    | 0 (0.000) |    14.42 | adamb, Jackinho, nilo, susp, ztr      |
|           54 |     1885 | 2024-04-25 | Nexus             | L   | 0.647      | -            | -                | -                | -         |   -14.38 | adamb, Jackinho, nilo, susp, ztr      |
|           53 |     1929 | 2024-04-23 | Alliance          | W   | 0.633      | 0.384        | -                | 0.349 (0.085)    | 0 (0.000) |     7.72 | adamb, Jackinho, nilo, p1ke, susp     |
|           52 |     2034 | 2024-04-19 | FURIA             | L   | 0.607      | -            | -                | -                | -         |    -0.68 | adamb, Jackinho, Plopski, susp, ztr   |
|           51 |     2072 | 2024-04-18 | Imperial          | L   | 0.600      | -            | -                | -                | -         |    -1.32 | adamb, Jackinho, Plopski, susp, ztr   |
|           50 |     2354 | 2024-04-09 | ex-Guild Eagles   | L   | 0.540      | -            | -                | -                | -         |   -11.62 | adamb, Jackinho, nilo, susp, ztr      |
|           49 |     2370 | 2024-04-08 | Aurora            | L   | 0.534      | -            | -                | -                | -         |    -0.51 | adamb, Jackinho, nilo, susp, ztr      |
|           48 |     2382 | 2024-04-08 | 9 Pandas          | L   | 0.533      | -            | -                | -                | -         |    -6.67 | adamb, Jackinho, nilo, susp, ztr      |
|           47 |     2407 | 2024-04-07 | EYEBALLERS        | W   | 0.527      | 0.330        | -                | 0.619 (0.108)    | 0 (0.000) |     6.23 | adamb, Jackinho, nilo, susp, ztr      |
|           46 |     2416 | 2024-04-07 | Johnny Speeds     | W   | 0.525      | 0.330        | 0.162 (0.028)    | 0.852 (0.148)    | 0 (0.000) |    14.65 | adamb, Jackinho, nilo, susp, ztr      |
|           45 |     2432 | 2024-04-06 | Young Gods        | W   | 0.518      | -            | -                | -                | 0 (0.000) |     3.20 | adamb, Jackinho, nilo, susp, ztr      |
|           44 |     2484 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.507      | -            | -                | -                | -         |    -0.20 | adamb, Jackinho, nilo, susp, ztr      |
|           43 |     2510 | 2024-04-03 | Monte             | W   | 0.501      | -            | -                | -                | -         |    10.33 | adamb, Jackinho, nilo, susp, ztr      |
|           42 |     2523 | 2024-04-03 | FAVBET            | W   | 0.500      | -            | -                | -                | -         |     4.60 | adamb, Jackinho, nilo, susp, ztr      |
|           41 |     2557 | 2024-04-02 | B8                | W   | 0.494      | 0.143        | 0.246 (0.017)    | 1.000 (0.071)    | -         |    11.11 | adamb, Jackinho, nilo, susp, ztr      |
|           40 |     2563 | 2024-04-02 | Aurora            | L   | 0.493      | -            | -                | -                | -         |    -0.39 | adamb, Jackinho, nilo, susp, ztr      |
|           39 |     2579 | 2024-04-01 | PARIVISION        | L   | 0.487      | -            | -                | -                | -         |    -7.45 | adamb, Jackinho, nilo, susp, ztr      |
|           38 |     2646 | 2024-03-27 | Aurora            | L   | 0.455      | -            | -                | -                | -         |    -0.35 | adamb, Jackinho, nilo, susp, ztr      |
|           37 |     2652 | 2024-03-27 | NAVI Junior       | W   | 0.454      | -            | -                | -                | -         |     2.48 | adamb, Jackinho, nilo, susp, ztr      |
|           36 |     2855 | 2024-03-15 | kONO              | L   | 0.374      | -            | -                | -                | -         |    -8.08 | adamb, Jackinho, nilo, susp, ztr      |
|           35 |     2892 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.366      | -            | -                | -                | -         |    -5.25 | adamb, Jackinho, nilo, susp, ztr      |
|           34 |     2926 | 2024-03-13 | HEROIC            | L   | 0.360      | -            | -                | -                | -         |    -0.18 | adamb, Jackinho, nilo, susp, ztr      |
|           33 |     2949 | 2024-03-12 | B8                | W   | 0.355      | 0.143        | 0.246 (0.012)    | -                | -         |     8.10 | adamb, Jackinho, nilo, susp, ztr      |
|           32 |     2957 | 2024-03-12 | Apeks             | W   | 0.353      | -            | -                | -                | -         |     6.51 | adamb, Jackinho, nilo, susp, ztr      |
|           31 |     2967 | 2024-03-11 | ex-Preasy         | W   | 0.348      | -            | -                | -                | -         |     4.21 | adamb, Jackinho, nilo, susp, ztr      |
|           30 |     2981 | 2024-03-11 | ENCE              | L   | 0.347      | -            | -                | -                | -         |    -0.70 | adamb, Jackinho, nilo, susp, ztr      |
|           29 |     2989 | 2024-03-10 | Spirit            | L   | 0.341      | -            | -                | -                | -         |    -0.04 | adamb, Jackinho, nilo, susp, ztr      |
|           28 |     3016 | 2024-03-09 | Monte             | W   | 0.334      | 0.535        | 0.103 (0.018)    | -                | -         |     7.34 | adamb, Jackinho, nilo, susp, ztr      |
|           27 |     3023 | 2024-03-09 | EYEBALLERS        | L   | 0.333      | -            | -                | -                | -         |    -5.88 | adamb, Jackinho, nilo, susp, ztr      |
|           26 |     3029 | 2024-03-09 | Lemondogs         | W   | 0.333      | -            | -                | -                | -         |     0.38 | adamb, Jackinho, nilo, susp, ztr      |
|           25 |     3047 | 2024-03-08 | Secret            | W   | 0.326      | -            | -                | -                | -         |     0.89 | adamb, Jackinho, nilo, susp, ztr      |
|           24 |     3088 | 2024-03-06 | Falcons           | W   | 0.315      | 0.535        | 0.344 (0.058)    | -                | -         |     9.55 | adamb, Jackinho, nilo, susp, ztr      |
|           23 |     3168 | 2024-03-03 | The Chosen Few    | W   | 0.295      | -            | -                | -                | -         |     1.70 | adamb, Jackinho, nilo, susp, ztr      |
|           22 |     3177 | 2024-03-03 | ILIN              | W   | 0.294      | -            | -                | -                | -         |     0.37 | adamb, Jackinho, nilo, susp, ztr      |
|           21 |     3181 | 2024-03-03 | RUSH B            | W   | 0.294      | -            | -                | -                | -         |     3.17 | adamb, Jackinho, nilo, susp, ztr      |
|           20 |     3190 | 2024-03-03 | ECLOT             | L   | 0.293      | -            | -                | -                | -         |    -1.79 | adamb, Jackinho, nilo, susp, ztr      |
|           19 |     3236 | 2024-02-29 | Endpoint          | W   | 0.273      | -            | -                | -                | -         |     3.71 | adamb, Jackinho, nilo, susp, ztr      |
|           18 |     3273 | 2024-02-27 | ex-Guild Eagles   | L   | 0.260      | -            | -                | -                | -         |    -4.90 | adamb, Jackinho, nilo, susp, ztr      |
|           17 |     3645 | 2024-02-11 | Apeks             | W   | 0.155      | -            | -                | -                | -         |     2.92 | adamb, Jackinho, nilo, susp, ztr      |
|           16 |     3650 | 2024-02-11 | ex-Sprout         | W   | 0.153      | -            | -                | -                | -         |     0.43 | adamb, Jackinho, nilo, susp, ztr      |
|           15 |     3658 | 2024-02-10 | FURIA             | W   | 0.147      | -            | -                | -                | -         |     4.53 | adamb, Jackinho, nilo, susp, ztr      |
|           14 |     3661 | 2024-02-10 | Apeks             | L   | 0.146      | -            | -                | -                | -         |    -1.86 | adamb, Jackinho, nilo, susp, ztr      |
|           13 |     3662 | 2024-02-10 | FURIA             | W   | 0.146      | -            | -                | -                | -         |     4.50 | adamb, Jackinho, nilo, susp, ztr      |
|           12 |     3697 | 2024-02-07 | ex-Sprout         | W   | 0.127      | -            | -                | -                | -         |     0.35 | adamb, Jackinho, nilo, susp, ztr      |
|           11 |     3705 | 2024-02-06 | Into the Breach   | L   | 0.120      | -            | -                | -                | -         |    -3.18 | adamb, Jackinho, nilo, susp, ztr      |
|           10 |     3718 | 2024-02-05 | TSM               | L   | 0.113      | -            | -                | -                | -         |    -2.81 | adamb, Jackinho, nilo, susp, ztr      |
|            9 |     3725 | 2024-02-04 | 500               | L   | 0.108      | -            | -                | -                | -         |    -2.68 | adamb, Jackinho, nilo, susp, ztr      |
|            8 |     3731 | 2024-02-04 | TMVG              | W   | 0.107      | -            | -                | -                | -         |     0.26 | adamb, Jackinho, nilo, susp, ztr      |
|            7 |     3742 | 2024-02-04 | DUSTY             | W   | 0.106      | -            | -                | -                | -         |     0.55 | adamb, Jackinho, nilo, susp, ztr      |
|            6 |     3772 | 2024-02-03 | Sangal            | W   | 0.098      | 0.371        | 0.232 (0.008)    | -                | -         |     2.35 | adamb, Jackinho, nilo, susp, ztr      |
|            5 |     3784 | 2024-02-02 | EYEBALLERS        | W   | 0.095      | -            | -                | -                | -         |     1.38 | adamb, Jackinho, nilo, susp, ztr      |
|            4 |     3786 | 2024-02-02 | ex-Preasy         | W   | 0.094      | -            | -                | -                | -         |     1.05 | adamb, Jackinho, nilo, susp, ztr      |
|            3 |     3823 | 2024-02-01 | Sampi             | W   | 0.087      | -            | -                | -                | -         |     1.30 | adamb, Jackinho, nilo, susp, ztr      |
|            2 |     3874 | 2024-01-29 | BLEED             | W   | 0.066      | -            | -                | -                | -         |     1.33 | adamb, Jackinho, nilo, susp, ztr      |
|            1 |     3935 | 2024-01-25 | BIG Academy       | W   | 0.039      | -            | -                | -                | -         |     0.05 | adamb, Jackinho, nilo, susp, ztr      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,620.37)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.761 | $2,000.00      | $1,521.37       |
| 2024-05-04 |      0.707 | $5,000.00      | $3,534.77       |
| 2024-04-20 |      0.615 | $5,000.00      | $3,075.95       |
| 2024-04-07 |      0.527 | $6,110.00      | $3,221.00       |
| 2024-03-10 |      0.341 | $12,500.00     | $4,267.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
