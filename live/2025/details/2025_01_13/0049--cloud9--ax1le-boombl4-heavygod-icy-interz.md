### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [49](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1135.0<br />
<br />
Final Rank Value (1135.0) = Starting Rank Value (1050.1) + Head To Head Adjustments (84.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.399[<sup>2</sup>](#table1)

The average of these factors is 0.328<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1050.1
- 400 + ( ( 0.328 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1050.1


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
|           35 |      455 | 2024-12-02 | Complexity        | L   | 0.918      | -            | -                | -                | -         |    -6.66 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           34 |      475 | 2024-11-30 | paiN              | L   | 0.910      | -            | -                | -                | -         |    -4.57 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |      504 | 2024-11-30 | fnatic            | W   | 0.905      | 0.143        | 0.188 (0.024)    | 0.308 (0.040)    | 1 (0.905) |    15.51 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |      509 | 2024-11-29 | Liquid            | L   | 0.904      | -            | -                | -                | -         |    -1.75 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      706 | 2024-11-19 | FaZe              | L   | 0.833      | -            | -                | -                | -         |    -0.51 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      712 | 2024-11-18 | SINNERS           | W   | 0.830      | 0.143        | 0.103 (0.012)    | 0.698 (0.083)    | 1 (0.830) |    12.28 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      725 | 2024-11-17 | Sangal            | W   | 0.824      | 0.143        | 0.158 (0.019)    | 0.294 (0.035)    | 1 (0.824) |    18.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      736 | 2024-11-17 | Nemiga            | W   | 0.819      | 0.143        | 0.510 (0.060)    | 0.587 (0.069)    | 1 (0.819) |    18.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      749 | 2024-11-16 | FaZe              | L   | 0.817      | -            | -                | -                | -         |    -0.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |     1269 | 2024-10-25 | fnatic            | L   | 0.666      | -            | -                | -                | -         |    -8.74 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1297 | 2024-10-22 | 9z                | W   | 0.647      | 0.477        | 0.060 (0.018)    | 0.193 (0.060)    | 0 (0.000) |     7.68 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1303 | 2024-10-22 | The MongolZ       | L   | 0.646      | -            | -                | -                | -         |    -0.35 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1521 | 2024-10-11 | Passion UA        | L   | 0.572      | -            | -                | -                | -         |    -6.90 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     2457 | 2024-09-13 | Gaimin Gladiators | L   | 0.386      | -            | -                | -                | -         |    -8.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2620 | 2024-09-07 | Zero Tenacity     | W   | 0.347      | 0.384        | 0.084 (0.011)    | 0.622 (0.083)    | 0 (0.000) |     4.91 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2644 | 2024-09-06 | BetBoom           | W   | 0.341      | 0.384        | 0.114 (0.015)    | 0.428 (0.056)    | 0 (0.000) |     5.53 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2691 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.333      | 0.384        | 0.076 (0.010)    | 0.688 (0.088)    | 0 (0.000) |     5.59 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2783 | 2024-09-02 | GamerLegion       | W   | 0.313      | 0.384        | 0.200 (0.024)    | 0.606 (0.073)    | 0 (0.000) |     8.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2865 | 2024-08-29 | Insilio           | W   | 0.287      | 0.384        | -                | 0.312 (0.034)    | 0 (0.000) |     1.64 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     2980 | 2024-08-27 | fnatic            | L   | 0.273      | -            | -                | -                | -         |    -3.35 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     3042 | 2024-08-26 | Eternal Fire      | L   | 0.268      | -            | -                | -                | -         |    -1.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     3058 | 2024-08-26 | HEROIC            | W   | 0.267      | 0.143        | 0.873 (0.033)    | -                | -         |     8.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3151 | 2024-08-23 | paiN              | L   | 0.247      | -            | -                | -                | -         |    -0.63 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3183 | 2024-08-22 | 9 Pandas          | W   | 0.240      | -            | -                | -                | -         |     4.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3239 | 2024-08-21 | Passion UA        | W   | 0.233      | -            | -                | -                | -         |     5.06 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3270 | 2024-08-21 | Johnny Speeds     | W   | 0.232      | -            | -                | -                | -         |     3.85 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3305 | 2024-08-19 | 500               | W   | 0.221      | -            | -                | -                | -         |     2.49 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3311 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.221      | -            | -                | -                | -         |     4.12 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3316 | 2024-08-19 | UNPAID            | W   | 0.221      | -            | -                | -                | -         |     3.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3804 | 2024-08-03 | Johnny Speeds     | L   | 0.114      | -            | -                | -                | -         |    -1.65 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3833 | 2024-08-02 | UNPAID            | W   | 0.108      | -            | -                | -                | -         |     1.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3874 | 2024-08-01 | AMKAL             | W   | 0.102      | -            | -                | -                | -         |     0.82 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3887 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.100      | -            | -                | -                | -         |    -1.29 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3919 | 2024-07-31 | 3DMAX             | L   | 0.095      | -            | -                | -                | -         |    -0.30 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3943 | 2024-07-31 | FaZe              | L   | 0.093      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,103.05)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.926 | $10,000.00     | $9,256.79       |
| 2024-09-07 |      0.347 | $20,000.00     | $6,937.48       |
| 2024-08-25 |      0.261 | $5,000.00      | $1,306.98       |
| 2024-08-04 |      0.120 | $5,000.00      | $601.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
