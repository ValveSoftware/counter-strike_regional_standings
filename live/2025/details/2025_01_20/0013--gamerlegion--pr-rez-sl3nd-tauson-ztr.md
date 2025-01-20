### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [13](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1385.1<br />
<br />
Final Rank Value (1385.1) = Starting Rank Value (1372.4) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.490<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1372.4
- 400 + ( ( 0.490 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1372.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       11 | 2025-01-17 | paiN          | L   | 1.000      | -            | -                | -                | -         |   -13.69 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |      350 | 2024-12-06 | Natus Vincere | L   | 0.909      | -            | -                | -                | -         |    -3.83 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           22 |      376 | 2024-12-05 | Wildcard      | W   | 0.903      | 1.000        | 0.232 (0.210)    | 0.638 (0.576)    | 1 (0.903) |    12.20 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           21 |      404 | 2024-12-05 | Liquid        | L   | 0.896      | -            | -                | -                | -         |    -6.53 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           20 |      413 | 2024-12-04 | Vitality      | L   | 0.895      | -            | -                | -                | -         |    -2.63 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           19 |      465 | 2024-12-02 | Passion UA    | W   | 0.877      | 0.143        | 0.107 (0.013)    | 0.826 (0.103)    | 1 (0.877) |     6.33 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           18 |      483 | 2024-12-01 | The MongolZ   | L   | 0.870      | -            | -                | -                | -         |    -2.25 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           17 |      509 | 2024-11-30 | paiN          | W   | 0.864      | 0.143        | 0.253 (0.031)    | 0.717 (0.089)    | 1 (0.864) |    15.79 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           16 |      524 | 2024-11-29 | FURIA         | W   | 0.862      | 0.143        | 0.199 (0.024)    | 0.613 (0.075)    | 1 (0.862) |    20.51 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           15 |      708 | 2024-11-20 | BetBoom       | W   | 0.798      | 0.143        | 0.110 (0.013)    | -                | 1 (0.798) |     6.22 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           14 |      709 | 2024-11-20 | SINNERS       | W   | 0.797      | 0.143        | 0.100 (0.011)    | 0.676 (0.077)    | 1 (0.797) |     4.40 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |      720 | 2024-11-19 | Falcons       | W   | 0.790      | -            | -                | -                | 1 (0.790) |     3.15 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |      731 | 2024-11-18 | UNiTY         | W   | 0.784      | -            | -                | -                | 1 (0.784) |     2.06 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |      756 | 2024-11-17 | ECLOT         | L   | 0.777      | -            | -                | -                | -         |   -17.53 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |      764 | 2024-11-16 | Vitality      | L   | 0.775      | -            | -                | -                | -         |    -2.06 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     1529 | 2024-10-11 | GUN5          | L   | 0.532      | -            | -                | -                | -         |   -13.80 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     1654 | 2024-10-06 | Passion UA    | W   | 0.500      | 0.435        | 0.107 (0.023)    | 0.826 (0.179)    | 0 (0.000) |     3.72 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     1659 | 2024-10-06 | 9 Pandas      | W   | 0.499      | 0.435        | 0.160 (0.035)    | 0.804 (0.174)    | 0 (0.000) |     3.01 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     1686 | 2024-10-05 | B8            | W   | 0.493      | 0.435        | 0.162 (0.035)    | 0.490 (0.105)    | -         |     3.56 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     1724 | 2024-10-04 | DRILLAS       | W   | 0.486      | -            | -                | -                | -         |     0.81 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     1937 | 2024-09-28 | BetBoom       | L   | 0.446      | -            | -                | -                | -         |   -11.28 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     1941 | 2024-09-28 | Aurora        | W   | 0.445      | -            | -                | -                | -         |     1.22 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     1993 | 2024-09-27 | B8            | W   | 0.438      | 0.435        | 0.162 (0.031)    | 0.490 (0.093)    | -         |     2.71 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     2019 | 2024-09-26 | CPH Wolves    | W   | 0.433      | 0.435        | -                | 0.350 (0.066)    | -         |     0.58 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,725.30)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.964 | $20,000.00     | $19,276.72      |
| 2024-10-06 |      0.500 | $22,000.00     | $10,991.08      |
| 2024-09-28 |      0.446 | $10,000.00     | $4,457.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
