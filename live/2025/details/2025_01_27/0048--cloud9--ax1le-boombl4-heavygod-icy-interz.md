### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [48](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1088.6<br />
<br />
Final Rank Value (1088.6) = Starting Rank Value (1023.5) + Head To Head Adjustments (65.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.464[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.398[<sup>2</sup>](#table1)

The average of these factors is 0.319<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1023.5
- 400 + ( ( 0.319 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1023.5


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
|           34 |      671 | 2024-12-02 | Complexity        | L   | 0.824      | -            | -                | -                | -         |    -6.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |      691 | 2024-11-30 | paiN              | L   | 0.816      | -            | -                | -                | -         |    -3.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |      720 | 2024-11-30 | fnatic            | W   | 0.811      | 0.143        | 0.177 (0.020)    | 0.281 (0.033)    | 1 (0.811) |    14.38 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      725 | 2024-11-29 | Liquid            | L   | 0.810      | -            | -                | -                | -         |    -1.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      922 | 2024-11-19 | FaZe              | L   | 0.739      | -            | -                | -                | -         |    -0.39 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      928 | 2024-11-18 | SINNERS           | W   | 0.736      | 0.143        | 0.095 (0.010)    | 0.718 (0.076)    | 1 (0.736) |    11.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      941 | 2024-11-17 | HEROIC            | W   | 0.730      | 0.143        | 0.262 (0.027)    | 0.363 (0.038)    | 1 (0.730) |    16.47 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      952 | 2024-11-17 | Nemiga            | W   | 0.725      | 0.143        | 0.492 (0.051)    | 0.574 (0.059)    | 1 (0.725) |    16.78 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |      965 | 2024-11-16 | FaZe              | L   | 0.723      | -            | -                | -                | -         |    -0.28 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1485 | 2024-10-25 | fnatic            | L   | 0.572      | -            | -                | -                | -         |    -7.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1513 | 2024-10-22 | 9z                | W   | 0.553      | 0.477        | 0.054 (0.014)    | 0.178 (0.047)    | 0 (0.000) |     6.46 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1519 | 2024-10-22 | The MongolZ       | L   | 0.552      | -            | -                | -                | -         |    -0.26 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     1737 | 2024-10-11 | Passion UA        | L   | 0.478      | -            | -                | -                | -         |    -5.49 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2673 | 2024-09-13 | Gaimin Gladiators | L   | 0.292      | -            | -                | -                | -         |    -6.07 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2836 | 2024-09-07 | Zero Tenacity     | W   | 0.253      | 0.384        | 0.081 (0.008)    | 0.719 (0.070)    | 0 (0.000) |     3.97 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2860 | 2024-09-06 | BetBoom           | W   | 0.246      | 0.384        | 0.227 (0.021)    | 0.524 (0.050)    | 0 (0.000) |     4.74 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2907 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.239      | 0.384        | 0.070 (0.006)    | 0.666 (0.061)    | 0 (0.000) |     4.22 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2999 | 2024-09-02 | GamerLegion       | W   | 0.219      | -            | -                | -                | 0 (0.000) |     1.41 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     3081 | 2024-08-29 | Insilio           | W   | 0.193      | 0.384        | -                | 0.273 (0.020)    | 0 (0.000) |     1.13 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     3196 | 2024-08-27 | fnatic            | L   | 0.179      | -            | -                | -                | -         |    -2.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     3258 | 2024-08-26 | Eternal Fire      | L   | 0.174      | -            | -                | -                | -         |    -0.27 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3274 | 2024-08-26 | Falcons           | W   | 0.173      | 0.143        | 0.872 (0.021)    | -                | -         |     5.34 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3367 | 2024-08-23 | paiN              | L   | 0.153      | -            | -                | -                | -         |    -0.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3399 | 2024-08-22 | 9 Pandas          | W   | 0.146      | 0.143        | 0.163 (0.003)    | 0.864 (0.018)    | -         |     2.74 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3455 | 2024-08-21 | Passion UA        | W   | 0.139      | -            | -                | -                | -         |     2.99 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3486 | 2024-08-21 | Johnny Speeds     | W   | 0.138      | -            | -                | -                | -         |     2.27 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3521 | 2024-08-19 | 500               | W   | 0.127      | -            | -                | -                | -         |     1.47 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3527 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.127      | -            | -                | -                | -         |     2.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3532 | 2024-08-19 | UNPAID            | W   | 0.126      | -            | -                | -                | -         |     1.77 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     4020 | 2024-08-03 | Johnny Speeds     | L   | 0.020      | -            | -                | -                | -         |    -0.30 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     4049 | 2024-08-02 | UNPAID            | W   | 0.014      | -            | -                | -                | -         |     0.20 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     4090 | 2024-08-01 | AMKAL             | W   | 0.007      | -            | -                | -                | -         |     0.06 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     4103 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.006      | -            | -                | -                | -         |    -0.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     4135 | 2024-07-31 | 3DMAX             | L   | 0.001      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,337.33)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.832 | $10,000.00     | $8,315.36       |
| 2024-09-07 |      0.253 | $20,000.00     | $5,054.62       |
| 2024-08-25 |      0.167 | $5,000.00      | $836.26         |
| 2024-08-04 |      0.026 | $5,000.00      | $131.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
