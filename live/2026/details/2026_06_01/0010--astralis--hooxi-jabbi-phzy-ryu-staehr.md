### Roster Details<br />
Team Name: Astralis<br />
Roster: HooXi, jabbi, phzy, ryu, Staehr<br />
Global Rank: [10](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [8]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1721.2<br />
<br />
Final Rank Value (1721.2) = Starting Rank Value (1728.9) + Head To Head Adjustments (-7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.843[<sup>1</sup>](#table2)
- Bounty Collected: 0.728[<sup>2</sup>](#table1)
- Opponent Network: 0.351[<sup>2</sup>](#table1)
- LAN Wins: 0.869[<sup>2</sup>](#table1)

The average of these factors is 0.698<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1728.9
- 400 + ( ( 0.698 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1728.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      610 | 2026-05-13 | GamerLegion   | L   | 1.000      | -            | -                | -                | -         |   -17.39 | HooXi, jabbi, phzy, ryu, Staehr |
|           38 |      616 | 2026-05-13 | SINNERS       | W   | 1.000      | 1.000        | -                | 0.588 (0.588)    | 1 (1.000) |     3.77 | HooXi, jabbi, phzy, ryu, Staehr |
|           37 |      649 | 2026-05-12 | Legacy        | L   | 1.000      | -            | -                | -                | -         |   -12.70 | HooXi, jabbi, phzy, ryu, Staehr |
|           36 |      691 | 2026-05-11 | Liquid        | W   | 1.000      | 1.000        | -                | 0.240 (0.240)    | 1 (1.000) |     2.06 | HooXi, jabbi, phzy, ryu, Staehr |
|           35 |      966 | 2026-05-01 | GamerLegion   | L   | 0.996      | -            | -                | -                | -         |   -19.09 | HooXi, jabbi, phzy, ryu, Staehr |
|           34 |     1036 | 2026-04-30 | FUT           | W   | 0.987      | 1.000        | 0.812 (0.801)    | 0.355 (0.350)    | 1 (0.987) |    14.91 | HooXi, jabbi, phzy, ryu, Staehr |
|           33 |     1075 | 2026-04-29 | G2            | L   | 0.981      | -            | -                | -                | -         |   -18.12 | HooXi, jabbi, phzy, ryu, Staehr |
|           32 |     1622 | 2026-04-11 | FUT           | L   | 0.860      | -            | -                | -                | -         |   -14.67 | HooXi, jabbi, phzy, ryu, Staehr |
|           31 |     1656 | 2026-04-10 | 3DMAX         | W   | 0.853      | 1.000        | -                | 0.428 (0.365)    | 1 (0.853) |     4.77 | HooXi, jabbi, phzy, ryu, Staehr |
|           30 |     1686 | 2026-04-09 | EYEBALLERS    | W   | 0.846      | 1.000        | -                | 0.534 (0.452)    | 1 (0.846) |     2.92 | HooXi, jabbi, phzy, ryu, Staehr |
|           29 |     1776 | 2026-04-06 | The MongolZ   | W   | 0.826      | 1.000        | 0.576 (0.476)    | 0.419 (0.346)    | 1 (0.826) |    14.63 | HooXi, jabbi, phzy, ryu, Staehr |
|           28 |     1838 | 2026-04-05 | B8            | W   | 0.819      | 1.000        | 0.329 (0.270)    | 0.469 (0.384)    | 1 (0.819) |     6.99 | HooXi, jabbi, phzy, ryu, Staehr |
|           27 |     1901 | 2026-04-04 | MIBR          | W   | 0.813      | 1.000        | 0.255 (0.207)    | 0.428 (0.347)    | 1 (0.813) |     4.37 | HooXi, jabbi, phzy, ryu, Staehr |
|           26 |     3172 | 2026-03-15 | FUT           | W   | 0.680      | 0.901        | 0.812 (0.497)    | 0.355 (0.217)    | 1 (0.680) |     9.45 | HooXi, jabbi, phzy, ryu, Staehr |
|           25 |     3197 | 2026-03-14 | Aurora        | L   | 0.675      | -            | -                | -                | -         |    -9.37 | HooXi, jabbi, phzy, ryu, Staehr |
|           24 |     3236 | 2026-03-13 | Spirit        | W   | 0.668      | 0.901        | 1.000 (0.602)    | 0.371 (0.223)    | 1 (0.668) |    16.49 | HooXi, jabbi, phzy, ryu, Staehr |
|           23 |     3381 | 2026-03-10 | FURIA         | W   | 0.648      | 0.805        | 0.702 (0.366)    | -                | -         |    10.67 | HooXi, jabbi, phzy, ryu, Staehr |
|           22 |     3440 | 2026-03-09 | FaZe          | W   | 0.641      | -            | -                | -                | -         |     6.05 | HooXi, jabbi, phzy, ryu, Staehr |
|           21 |     3524 | 2026-03-08 | Legacy        | L   | 0.633      | -            | -                | -                | -         |    -5.39 | HooXi, jabbi, phzy, ryu, Staehr |
|           20 |     3570 | 2026-03-07 | MOUZ          | L   | 0.627      | -            | -                | -                | -         |    -4.53 | HooXi, jabbi, phzy, ryu, Staehr |
|           19 |     3632 | 2026-03-06 | FUT           | W   | 0.619      | 0.805        | 0.812 (0.405)    | -                | -         |     8.92 | HooXi, jabbi, phzy, ryu, Staehr |
|           18 |     3733 | 2026-03-04 | 3DMAX         | W   | 0.606      | -            | -                | -                | -         |     4.35 | HooXi, jabbi, phzy, ryu, Staehr |
|           17 |     3787 | 2026-03-03 | FUT           | L   | 0.599      | -            | -                | -                | -         |   -10.35 | HooXi, jabbi, phzy, ryu, Staehr |
|           16 |     3826 | 2026-03-02 | HEROIC        | W   | 0.592      | -            | -                | -                | -         |     3.55 | HooXi, jabbi, phzy, ryu, Staehr |
|           15 |     3864 | 2026-03-01 | Monte         | W   | 0.586      | -            | -                | -                | -         |     3.92 | HooXi, jabbi, phzy, ryu, Staehr |
|           14 |     4444 | 2026-02-18 | Aurora        | L   | 0.512      | -            | -                | -                | -         |    -7.38 | HooXi, jabbi, phzy, ryu, Staehr |
|           13 |     4513 | 2026-02-17 | FaZe          | W   | 0.505      | -            | -                | -                | -         |     5.02 | HooXi, jabbi, phzy, ryu, Staehr |
|           12 |     4551 | 2026-02-16 | FUT           | L   | 0.499      | -            | -                | -                | -         |    -8.83 | HooXi, jabbi, phzy, ryu, Staehr |
|           11 |     4619 | 2026-02-15 | 3DMAX         | W   | 0.492      | -            | -                | -                | -         |     3.64 | HooXi, jabbi, phzy, ryu, Staehr |
|           10 |     4687 | 2026-02-14 | Natus Vincere | L   | 0.485      | -            | -                | -                | -         |    -3.67 | HooXi, jabbi, phzy, ryu, Staehr |
|            9 |     5022 | 2026-02-03 | FURIA         | L   | 0.414      | -            | -                | -                | -         |    -6.41 | HooXi, jabbi, phzy, ryu, Staehr |
|            8 |     5048 | 2026-02-02 | FUT           | W   | 0.408      | 1.000        | 0.812 (0.331)    | -                | -         |     5.54 | HooXi, jabbi, phzy, ryu, Staehr |
|            7 |     5077 | 2026-02-01 | PARIVISION    | W   | 0.401      | 1.000        | 0.671 (0.269)    | -                | -         |     7.34 | HooXi, jabbi, phzy, ryu, Staehr |
|            6 |     5120 | 2026-01-31 | Spirit        | L   | 0.394      | -            | -                | -                | -         |    -2.60 | HooXi, jabbi, phzy, ryu, Staehr |
|            5 |     5154 | 2026-01-30 | GamerLegion   | W   | 0.387      | -            | -                | -                | -         |     6.17 | HooXi, jabbi, phzy, ryu, Staehr |
|            4 |     5163 | 2026-01-30 | NRG           | L   | 0.386      | -            | -                | -                | -         |   -11.44 | HooXi, jabbi, phzy, ryu, Staehr |
|            3 |     5216 | 2026-01-28 | paiN          | W   | 0.373      | -            | -                | -                | -         |     3.01 | HooXi, jabbi, phzy, ryu, Staehr |
|            2 |     5523 | 2026-01-18 | PARIVISION    | L   | 0.306      | -            | -                | -                | -         |    -4.50 | HooXi, jabbi, phzy, ryu, Staehr |
|            1 |     5705 | 2026-01-13 | fnatic        | W   | 0.274      | -            | -                | -                | -         |     0.23 | HooXi, jabbi, phzy, ryu, Staehr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($406,000.19)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $42,000.00     | $42,000.00      |
| 2026-05-03 |      1.000 | $85,000.00     | $85,000.00      |
| 2026-04-11 |      0.860 | $187,500.00    | $161,313.53     |
| 2026-03-15 |      0.681 | $110,000.00    | $74,926.43      |
| 2026-02-22 |      0.541 | $31,250.00     | $16,896.71      |
| 2026-02-08 |      0.448 | $38,000.00     | $17,010.96      |
| 2026-01-18 |      0.308 | $28,750.00     | $8,852.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
