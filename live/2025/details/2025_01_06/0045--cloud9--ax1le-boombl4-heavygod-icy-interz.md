### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [45](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1145.7<br />
<br />
Final Rank Value (1145.7) = Starting Rank Value (1052.6) + Head To Head Adjustments (93.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.471[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.399[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1052.6
- 400 + ( ( 0.330 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1052.6


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
|           35 |      414 | 2024-12-02 | Complexity        | L   | 0.964      | -            | -                | -                | -         |    -6.96 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           34 |      434 | 2024-11-30 | paiN              | L   | 0.957      | -            | -                | -                | -         |    -5.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |      463 | 2024-11-30 | fnatic            | W   | 0.951      | 0.143        | 0.189 (0.026)    | 0.326 (0.044)    | 1 (0.951) |    16.11 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |      468 | 2024-11-29 | Liquid            | L   | 0.950      | -            | -                | -                | -         |    -1.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      665 | 2024-11-19 | FaZe              | L   | 0.879      | -            | -                | -                | -         |    -0.64 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      671 | 2024-11-18 | SINNERS           | W   | 0.877      | 0.143        | 0.082 (0.010)    | 0.682 (0.085)    | 1 (0.877) |    12.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      684 | 2024-11-17 | Sangal            | W   | 0.870      | 0.143        | 0.158 (0.020)    | 0.318 (0.039)    | 1 (0.870) |    19.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      695 | 2024-11-17 | Nemiga            | W   | 0.865      | 0.143        | 0.491 (0.061)    | 0.605 (0.075)    | 1 (0.865) |    19.20 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      708 | 2024-11-16 | FaZe              | L   | 0.864      | -            | -                | -                | -         |    -0.45 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |     1228 | 2024-10-25 | fnatic            | L   | 0.712      | -            | -                | -                | -         |    -9.34 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1256 | 2024-10-22 | 9z                | W   | 0.694      | 0.477        | 0.059 (0.020)    | 0.201 (0.066)    | 0 (0.000) |     8.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1262 | 2024-10-22 | The MongolZ       | L   | 0.692      | -            | -                | -                | -         |    -0.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1480 | 2024-10-11 | Passion UA        | L   | 0.618      | -            | -                | -                | -         |    -7.64 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     2416 | 2024-09-13 | Gaimin Gladiators | L   | 0.432      | -            | -                | -                | -         |    -9.43 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2579 | 2024-09-07 | Zero Tenacity     | W   | 0.393      | 0.384        | 0.081 (0.012)    | 0.599 (0.090)    | 0 (0.000) |     5.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2603 | 2024-09-06 | BetBoom           | W   | 0.387      | 0.384        | 0.112 (0.017)    | 0.437 (0.065)    | 0 (0.000) |     6.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2650 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.379      | 0.384        | 0.074 (0.011)    | 0.706 (0.103)    | 0 (0.000) |     6.16 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2742 | 2024-09-02 | GamerLegion       | W   | 0.359      | 0.384        | 0.190 (0.026)    | 0.616 (0.085)    | 0 (0.000) |     9.14 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2824 | 2024-08-29 | Insilio           | W   | 0.334      | 0.384        | -                | 0.331 (0.042)    | 0 (0.000) |     1.93 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     2939 | 2024-08-27 | fnatic            | L   | 0.320      | -            | -                | -                | -         |    -3.88 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     3001 | 2024-08-26 | Eternal Fire      | L   | 0.314      | -            | -                | -                | -         |    -1.50 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     3017 | 2024-08-26 | HEROIC            | W   | 0.313      | 0.143        | 0.822 (0.037)    | -                | -         |     9.65 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3110 | 2024-08-23 | paiN              | L   | 0.293      | -            | -                | -                | -         |    -0.73 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3142 | 2024-08-22 | 9 Pandas          | W   | 0.286      | -            | -                | -                | -         |     5.17 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3198 | 2024-08-21 | Passion UA        | W   | 0.279      | -            | -                | -                | -         |     6.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3229 | 2024-08-21 | Johnny Speeds     | W   | 0.278      | -            | -                | -                | -         |     4.61 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3264 | 2024-08-19 | 500               | W   | 0.268      | -            | -                | -                | -         |     2.98 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3270 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.267      | -            | -                | -                | -         |     5.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3275 | 2024-08-19 | UNPAID            | W   | 0.267      | -            | -                | -                | -         |     4.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3763 | 2024-08-03 | Johnny Speeds     | L   | 0.161      | -            | -                | -                | -         |    -2.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3792 | 2024-08-02 | UNPAID            | W   | 0.154      | -            | -                | -                | -         |     2.39 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3833 | 2024-08-01 | AMKAL             | W   | 0.148      | -            | -                | -                | -         |     1.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3846 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.146      | -            | -                | -                | -         |    -1.83 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3878 | 2024-07-31 | 3DMAX             | L   | 0.141      | -            | -                | -                | -         |    -0.42 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3902 | 2024-07-31 | FaZe              | L   | 0.139      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,952.24)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.972 | $10,000.00     | $9,719.09       |
| 2024-09-07 |      0.393 | $20,000.00     | $7,862.08       |
| 2024-08-25 |      0.308 | $5,000.00      | $1,538.13       |
| 2024-08-04 |      0.167 | $5,000.00      | $832.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
