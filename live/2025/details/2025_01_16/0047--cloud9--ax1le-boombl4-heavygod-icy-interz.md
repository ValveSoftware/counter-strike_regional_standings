### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [47](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1125.6<br />
<br />
Final Rank Value (1125.6) = Starting Rank Value (1045.2) + Head To Head Adjustments (80.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.471[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.398[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.2
- 400 + ( ( 0.326 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1045.2


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
|           35 |      482 | 2024-12-02 | Complexity        | L   | 0.896      | -            | -                | -                | -         |    -6.63 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           34 |      502 | 2024-11-30 | paiN              | L   | 0.888      | -            | -                | -                | -         |    -4.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |      531 | 2024-11-30 | fnatic            | W   | 0.883      | 0.143        | 0.183 (0.023)    | 0.300 (0.038)    | 1 (0.883) |    15.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |      536 | 2024-11-29 | Liquid            | L   | 0.882      | -            | -                | -                | -         |    -1.68 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      733 | 2024-11-19 | FaZe              | L   | 0.811      | -            | -                | -                | -         |    -0.47 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      739 | 2024-11-18 | SINNERS           | W   | 0.808      | 0.143        | 0.101 (0.012)    | 0.686 (0.079)    | 1 (0.808) |    12.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      752 | 2024-11-17 | HEROIC            | W   | 0.801      | 0.143        | 0.154 (0.018)    | 0.333 (0.038)    | 1 (0.801) |    17.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      763 | 2024-11-17 | Nemiga            | W   | 0.797      | 0.143        | 0.508 (0.058)    | 0.596 (0.068)    | 1 (0.797) |    17.91 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      776 | 2024-11-16 | FaZe              | L   | 0.795      | -            | -                | -                | -         |    -0.34 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |     1296 | 2024-10-25 | fnatic            | L   | 0.644      | -            | -                | -                | -         |    -8.44 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1324 | 2024-10-22 | 9z                | W   | 0.625      | 0.477        | 0.059 (0.018)    | 0.190 (0.056)    | 0 (0.000) |     7.39 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1330 | 2024-10-22 | The MongolZ       | L   | 0.623      | -            | -                | -                | -         |    -0.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1548 | 2024-10-11 | Passion UA        | L   | 0.550      | -            | -                | -                | -         |    -6.58 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     2484 | 2024-09-13 | Gaimin Gladiators | L   | 0.364      | -            | -                | -                | -         |    -7.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2647 | 2024-09-07 | Zero Tenacity     | W   | 0.325      | 0.384        | 0.084 (0.010)    | 0.572 (0.071)    | 0 (0.000) |     4.62 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2671 | 2024-09-06 | BetBoom           | W   | 0.318      | 0.384        | 0.112 (0.014)    | 0.425 (0.052)    | 0 (0.000) |     5.20 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2718 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.310      | 0.384        | 0.075 (0.009)    | 0.684 (0.082)    | 0 (0.000) |     5.28 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2810 | 2024-09-02 | GamerLegion       | W   | 0.290      | 0.384        | 0.200 (0.022)    | 0.604 (0.067)    | 0 (0.000) |     7.63 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2892 | 2024-08-29 | Insilio           | W   | 0.265      | 0.384        | -                | 0.303 (0.031)    | 0 (0.000) |     1.49 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     3007 | 2024-08-27 | fnatic            | L   | 0.251      | -            | -                | -                | -         |    -3.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     3069 | 2024-08-26 | Eternal Fire      | L   | 0.245      | -            | -                | -                | -         |    -1.35 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     3085 | 2024-08-26 | Falcons           | W   | 0.244      | 0.143        | 0.874 (0.031)    | -                | -         |     7.56 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3178 | 2024-08-23 | paiN              | L   | 0.225      | -            | -                | -                | -         |    -0.58 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3210 | 2024-08-22 | 9 Pandas          | W   | 0.217      | -            | -                | -                | -         |     4.08 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3266 | 2024-08-21 | Passion UA        | W   | 0.211      | -            | -                | -                | -         |     4.57 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3297 | 2024-08-21 | Johnny Speeds     | W   | 0.210      | -            | -                | -                | -         |     3.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3332 | 2024-08-19 | 500               | W   | 0.199      | -            | -                | -                | -         |     2.25 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3338 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.198      | -            | -                | -                | -         |     3.65 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3343 | 2024-08-19 | UNPAID            | W   | 0.198      | -            | -                | -                | -         |     2.80 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3831 | 2024-08-03 | Johnny Speeds     | L   | 0.092      | -            | -                | -                | -         |    -1.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3860 | 2024-08-02 | UNPAID            | W   | 0.086      | -            | -                | -                | -         |     1.25 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3901 | 2024-08-01 | AMKAL             | W   | 0.079      | -            | -                | -                | -         |     0.64 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3914 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.078      | -            | -                | -                | -         |    -1.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3946 | 2024-07-31 | 3DMAX             | L   | 0.073      | -            | -                | -                | -         |    -0.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3970 | 2024-07-31 | FaZe              | L   | 0.070      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,208.58)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.903 | $10,000.00     | $9,033.17       |
| 2024-09-07 |      0.325 | $20,000.00     | $6,490.25       |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |
| 2024-08-04 |      0.098 | $5,000.00      | $489.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
