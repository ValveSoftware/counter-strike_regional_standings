### Roster Details<br />
Team Name: Metizport<br />
Roster: abdi, adamb, Jackinho, nilo, Plopski<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  1043.2<br />
<br />
Final Rank Value (1043.2) = Starting Rank Value (958.2) + Head To Head Adjustments (85.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.173[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.2
- 400 + ( ( 0.265 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 958.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      958 | 2024-05-23 | Space             | L   | 0.871      | -            | -                | -                | -         |   -18.87 | abdi, adamb, Jackinho, nilo, Plopski |
|           62 |     1063 | 2024-05-20 | Zero Tenacity     | L   | 0.854      | -            | -                | -                | -         |   -12.13 | adamb, Jackinho, nilo, Plopski, ztr  |
|           61 |     1117 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.840      | 0.500        | 0.340 (0.143)    | 0.512 (0.215)    | 0 (0.000) |    25.64 | adamb, Jackinho, nilo, Plopski, ztr  |
|           60 |     1204 | 2024-05-16 | Rare Atom         | W   | 0.826      | 0.500        | -                | 0.298 (0.123)    | 0 (0.000) |     3.07 | adamb, Jackinho, nilo, Plopski, ztr  |
|           59 |     1388 | 2024-05-11 | BetBoom           | L   | 0.792      | -            | -                | -                | -         |    -1.61 | adamb, Jackinho, nilo, Plopski, ztr  |
|           58 |     1403 | 2024-05-10 | EYEBALLERS        | W   | 0.787      | 0.435        | -                | 0.646 (0.221)    | 0 (0.000) |     9.50 | adamb, Jackinho, nilo, Plopski, ztr  |
|           57 |     1528 | 2024-05-04 | AMKAL             | L   | 0.745      | -            | -                | -                | -         |    -6.91 | adamb, Jackinho, nilo, susp, ztr     |
|           56 |     1543 | 2024-05-03 | Zero Tenacity     | W   | 0.739      | 0.435        | 0.153 (0.049)    | 1.000 (0.321)    | 0 (0.000) |    13.08 | adamb, Jackinho, nilo, susp, ztr     |
|           55 |     1563 | 2024-05-02 | Sangal            | W   | 0.733      | 0.435        | 0.231 (0.073)    | 0.853 (0.272)    | 0 (0.000) |    15.15 | adamb, Jackinho, nilo, susp, ztr     |
|           54 |     1721 | 2024-04-25 | Romania           | L   | 0.687      | -            | -                | -                | -         |   -15.54 | adamb, Jackinho, nilo, susp, ztr     |
|           53 |     1765 | 2024-04-23 | Alliance          | W   | 0.673      | 0.384        | -                | 0.377 (0.097)    | 0 (0.000) |     8.12 | adamb, Jackinho, nilo, p1ke, susp    |
|           52 |     1870 | 2024-04-19 | FURIA             | L   | 0.647      | -            | -                | -                | -         |    -0.72 | adamb, Jackinho, Plopski, susp, ztr  |
|           51 |     1908 | 2024-04-18 | Imperial          | L   | 0.640      | -            | -                | -                | -         |    -1.39 | adamb, Jackinho, Plopski, susp, ztr  |
|           50 |     2190 | 2024-04-09 | ex-Guild Eagles   | L   | 0.579      | -            | -                | -                | -         |   -12.52 | adamb, Jackinho, nilo, susp, ztr     |
|           49 |     2206 | 2024-04-08 | Aurora            | L   | 0.574      | -            | -                | -                | -         |    -0.59 | adamb, Jackinho, nilo, susp, ztr     |
|           48 |     2218 | 2024-04-08 | 9 Pandas          | L   | 0.572      | -            | -                | -                | -         |    -7.21 | adamb, Jackinho, nilo, susp, ztr     |
|           47 |     2243 | 2024-04-07 | EYEBALLERS        | W   | 0.567      | 0.330        | -                | 0.646 (0.121)    | 0 (0.000) |     6.45 | adamb, Jackinho, nilo, susp, ztr     |
|           46 |     2252 | 2024-04-07 | Johnny Speeds     | W   | 0.565      | 0.330        | 0.158 (0.030)    | 0.825 (0.154)    | 0 (0.000) |    15.55 | adamb, Jackinho, nilo, susp, ztr     |
|           45 |     2268 | 2024-04-06 | Young Gods        | W   | 0.558      | -            | -                | -                | 0 (0.000) |     3.23 | adamb, Jackinho, nilo, susp, ztr     |
|           44 |     2320 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.546      | -            | -                | -                | -         |    -0.24 | adamb, Jackinho, nilo, susp, ztr     |
|           43 |     2346 | 2024-04-03 | Monte             | W   | 0.541      | 0.143        | 0.188 (0.014)    | -                | 0 (0.000) |    13.49 | adamb, Jackinho, nilo, susp, ztr     |
|           42 |     2359 | 2024-04-03 | FAVBET            | W   | 0.539      | -            | -                | -                | -         |     4.74 | adamb, Jackinho, nilo, susp, ztr     |
|           41 |     2393 | 2024-04-02 | B8                | W   | 0.534      | 0.143        | 0.242 (0.018)    | 1.000 (0.076)    | -         |    11.97 | adamb, Jackinho, nilo, susp, ztr     |
|           40 |     2399 | 2024-04-02 | Aurora            | L   | 0.533      | -            | -                | -                | -         |    -0.44 | adamb, Jackinho, nilo, susp, ztr     |
|           39 |     2415 | 2024-04-01 | PARIVISION        | L   | 0.527      | -            | -                | -                | -         |    -7.84 | adamb, Jackinho, nilo, susp, ztr     |
|           38 |     2482 | 2024-03-27 | Aurora            | L   | 0.494      | -            | -                | -                | -         |    -0.39 | adamb, Jackinho, nilo, susp, ztr     |
|           37 |     2488 | 2024-03-27 | NAVI Junior       | W   | 0.494      | -            | -                | -                | -         |     2.61 | adamb, Jackinho, nilo, susp, ztr     |
|           36 |     2691 | 2024-03-15 | kONO              | L   | 0.413      | -            | -                | -                | -         |    -9.13 | adamb, Jackinho, nilo, susp, ztr     |
|           35 |     2728 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.406      | -            | -                | -                | -         |    -6.11 | adamb, Jackinho, nilo, susp, ztr     |
|           34 |     2762 | 2024-03-13 | HEROIC            | L   | 0.399      | -            | -                | -                | -         |    -0.19 | adamb, Jackinho, nilo, susp, ztr     |
|           33 |     2785 | 2024-03-12 | B8                | W   | 0.394      | 0.143        | 0.242 (0.014)    | -                | -         |     8.99 | adamb, Jackinho, nilo, susp, ztr     |
|           32 |     2793 | 2024-03-12 | Apeks             | W   | 0.393      | -            | -                | -                | -         |     7.51 | adamb, Jackinho, nilo, susp, ztr     |
|           31 |     2803 | 2024-03-11 | ex-Preasy         | W   | 0.388      | -            | -                | -                | -         |     4.85 | adamb, Jackinho, nilo, susp, ztr     |
|           30 |     2817 | 2024-03-11 | ENCE              | L   | 0.386      | -            | -                | -                | -         |    -0.64 | adamb, Jackinho, nilo, susp, ztr     |
|           29 |     2825 | 2024-03-10 | Spirit            | L   | 0.381      | -            | -                | -                | -         |    -0.04 | adamb, Jackinho, nilo, susp, ztr     |
|           28 |     2852 | 2024-03-09 | Monte             | W   | 0.373      | 0.535        | 0.188 (0.037)    | 0.668 (0.133)    | -         |     9.85 | adamb, Jackinho, nilo, susp, ztr     |
|           27 |     2859 | 2024-03-09 | EYEBALLERS        | L   | 0.373      | -            | -                | -                | -         |    -6.63 | adamb, Jackinho, nilo, susp, ztr     |
|           26 |     2865 | 2024-03-09 | Lemondogs         | W   | 0.372      | -            | -                | -                | -         |     0.42 | adamb, Jackinho, nilo, susp, ztr     |
|           25 |     2883 | 2024-03-08 | Secret            | W   | 0.366      | -            | -                | -                | -         |     1.00 | adamb, Jackinho, nilo, susp, ztr     |
|           24 |     2924 | 2024-03-06 | Falcons           | W   | 0.354      | 0.535        | 0.352 (0.067)    | -                | -         |    10.81 | adamb, Jackinho, nilo, susp, ztr     |
|           23 |     3004 | 2024-03-03 | The Chosen Few    | W   | 0.335      | -            | -                | -                | -         |     1.93 | adamb, Jackinho, nilo, susp, ztr     |
|           22 |     3013 | 2024-03-03 | ILIN              | W   | 0.334      | -            | -                | -                | -         |     0.42 | adamb, Jackinho, nilo, susp, ztr     |
|           21 |     3017 | 2024-03-03 | RUSH B            | W   | 0.333      | -            | -                | -                | -         |     3.71 | adamb, Jackinho, nilo, susp, ztr     |
|           20 |     3026 | 2024-03-03 | Czech Republic    | L   | 0.333      | -            | -                | -                | -         |    -2.00 | adamb, Jackinho, nilo, susp, ztr     |
|           19 |     3072 | 2024-02-29 | Endpoint          | W   | 0.313      | -            | -                | -                | -         |     4.17 | adamb, Jackinho, nilo, susp, ztr     |
|           18 |     3109 | 2024-02-27 | ex-Guild Eagles   | L   | 0.300      | -            | -                | -                | -         |    -5.54 | adamb, Jackinho, nilo, susp, ztr     |
|           17 |     3481 | 2024-02-11 | Apeks             | W   | 0.194      | -            | -                | -                | -         |     3.83 | adamb, Jackinho, nilo, susp, ztr     |
|           16 |     3486 | 2024-02-11 | ex-Sprout         | W   | 0.193      | -            | -                | -                | -         |     0.57 | adamb, Jackinho, nilo, susp, ztr     |
|           15 |     3494 | 2024-02-10 | FURIA             | W   | 0.187      | -            | -                | -                | -         |     5.76 | adamb, Jackinho, nilo, susp, ztr     |
|           14 |     3497 | 2024-02-10 | Apeks             | L   | 0.186      | -            | -                | -                | -         |    -2.20 | adamb, Jackinho, nilo, susp, ztr     |
|           13 |     3498 | 2024-02-10 | FURIA             | W   | 0.186      | -            | -                | -                | -         |     5.73 | adamb, Jackinho, nilo, susp, ztr     |
|           12 |     3533 | 2024-02-07 | ex-Sprout         | W   | 0.166      | -            | -                | -                | -         |     0.49 | adamb, Jackinho, nilo, susp, ztr     |
|           11 |     3541 | 2024-02-06 | Into the Breach   | L   | 0.160      | -            | -                | -                | -         |    -4.15 | adamb, Jackinho, nilo, susp, ztr     |
|           10 |     3554 | 2024-02-05 | TSM               | L   | 0.152      | -            | -                | -                | -         |    -3.77 | adamb, Jackinho, nilo, susp, ztr     |
|            9 |     3561 | 2024-02-04 | 500               | L   | 0.148      | -            | -                | -                | -         |    -3.66 | adamb, Jackinho, nilo, susp, ztr     |
|            8 |     3567 | 2024-02-04 | TMVG              | W   | 0.147      | -            | -                | -                | -         |     0.35 | adamb, Jackinho, nilo, susp, ztr     |
|            7 |     3578 | 2024-02-04 | DUSTY             | W   | 0.145      | -            | -                | -                | -         |     0.76 | adamb, Jackinho, nilo, susp, ztr     |
|            6 |     3608 | 2024-02-03 | Sangal            | W   | 0.138      | -            | -                | -                | -         |     3.32 | adamb, Jackinho, nilo, susp, ztr     |
|            5 |     3620 | 2024-02-02 | EYEBALLERS        | W   | 0.134      | -            | -                | -                | -         |     1.97 | adamb, Jackinho, nilo, susp, ztr     |
|            4 |     3622 | 2024-02-02 | ex-Preasy         | W   | 0.134      | -            | -                | -                | -         |     1.55 | adamb, Jackinho, nilo, susp, ztr     |
|            3 |     3659 | 2024-02-01 | Slovakia          | W   | 0.126      | -            | -                | -                | -         |     1.82 | adamb, Jackinho, nilo, susp, ztr     |
|            2 |     3710 | 2024-01-29 | BLEED             | W   | 0.106      | 0.371        | 0.348 (0.014)    | -                | -         |     3.03 | adamb, Jackinho, nilo, susp, ztr     |
|            1 |     3771 | 2024-01-25 | BIG Academy       | W   | 0.079      | -            | -                | -                | -         |     0.10 | adamb, Jackinho, nilo, susp, ztr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,832.84)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.800 | $2,000.00      | $1,600.59       |
| 2024-05-04 |      0.747 | $5,000.00      | $3,732.82       |
| 2024-04-20 |      0.655 | $5,000.00      | $3,274.00       |
| 2024-04-07 |      0.567 | $6,110.00      | $3,463.02       |
| 2024-03-10 |      0.381 | $12,500.00     | $4,762.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
