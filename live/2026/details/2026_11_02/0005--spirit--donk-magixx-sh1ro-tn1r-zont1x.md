### Roster Details<br />
Team Name: Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [5](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [4]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  1842.5<br />
<br />
Final Rank Value (1842.5) = Starting Rank Value (1868.1) + Head To Head Adjustments (-25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.852[<sup>2</sup>](#table1)
- Opponent Network: 0.365[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.784<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1868.1
- 400 + ( ( 0.784 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 1868.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      142 | 2026-10-28 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |   -25.14 | donk, magixx, sh1ro, tN1R, zont1x |
|           43 |      163 | 2026-10-27 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -12.62 | donk, magixx, sh1ro, tN1R, zont1x |
|           42 |      189 | 2026-10-26 | FURIA         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.472 (0.472)    | 1 (1.000) |    16.03 | donk, magixx, sh1ro, tN1R, zont1x |
|           41 |      230 | 2026-10-25 | TYLOO         | W   | 1.000      | 1.000        | -                | 0.337 (0.337)    | 1 (1.000) |     1.12 | donk, magixx, sh1ro, tN1R, zont1x |
|           40 |      251 | 2026-10-24 | BETBOOM       | L   | 1.000      | -            | -                | -                | -         |   -20.13 | donk, magixx, sh1ro, tN1R, zont1x |
|           39 |      776 | 2026-10-11 | Aurora        | L   | 1.000      | -            | -                | -                | -         |   -15.38 | donk, magixx, sh1ro, tN1R, zont1x |
|           38 |      802 | 2026-10-10 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -12.82 | donk, magixx, sh1ro, tN1R, zont1x |
|           37 |      860 | 2026-10-09 | Falcons       | W   | 1.000      | 1.000        | 0.787 (0.787)    | 0.344 (0.344)    | 1 (1.000) |    10.63 | donk, magixx, sh1ro, tN1R, zont1x |
|           36 |      965 | 2026-10-07 | M80           | W   | 1.000      | 1.000        | -                | 0.397 (0.397)    | 1 (1.000) |     2.89 | donk, magixx, sh1ro, tN1R, zont1x |
|           35 |     1040 | 2026-10-06 | 1win          | L   | 1.000      | -            | -                | -                | -         |   -27.40 | donk, magixx, sh1ro, tN1R, zont1x |
|           34 |     1051 | 2026-10-05 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -15.16 | donk, magixx, sh1ro, tN1R, zont1x |
|           33 |     1085 | 2026-10-04 | PARIVISION    | W   | 1.000      | 1.000        | 0.351 (0.351)    | -                | 1 (1.000) |     2.96 | donk, magixx, sh1ro, tN1R, zont1x |
|           32 |     1111 | 2026-10-03 | ShindeN       | W   | 0.999      | -            | -                | -                | 1 (0.999) |     0.35 | donk, magixx, sh1ro, tN1R, zont1x |
|           31 |     2457 | 2026-09-06 | MOUZ          | W   | 0.820      | 1.000        | 1.000 (0.820)    | 0.457 (0.375)    | 1 (0.820) |    14.44 | donk, magixx, sh1ro, tN1R, zont1x |
|           30 |     2515 | 2026-09-05 | Falcons       | W   | 0.813      | 1.000        | 0.787 (0.640)    | -                | 1 (0.813) |     7.95 | donk, magixx, sh1ro, tN1R, zont1x |
|           29 |     2736 | 2026-08-31 | FURIA         | W   | 0.778      | 1.000        | 1.000 (0.778)    | 0.472 (0.368)    | 1 (0.778) |    13.78 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |     2891 | 2026-08-28 | G2            | W   | 0.759      | 1.000        | 0.555 (0.421)    | -                | 1 (0.759) |     5.89 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |     2988 | 2026-08-26 | DENDELE       | W   | 0.746      | 1.000        | -                | 0.424 (0.316)    | -         |     2.22 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |     3081 | 2026-08-23 | FUT           | W   | 0.727      | 1.000        | 0.657 (0.477)    | -                | -         |     6.41 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     3103 | 2026-08-22 | Legacy        | W   | 0.721      | 1.000        | 1.000 (0.721)    | -                | -         |     8.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     3124 | 2026-08-21 | Vitality      | W   | 0.714      | 1.000        | 1.000 (0.714)    | 0.435 (0.310)    | -         |    12.40 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     3159 | 2026-08-20 | B8            | W   | 0.706      | 1.000        | -                | 0.491 (0.347)    | -         |     2.21 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     3276 | 2026-08-15 | BIG           | W   | 0.674      | -            | -                | -                | -         |     1.91 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     3357 | 2026-08-13 | Luminosity    | W   | 0.659      | -            | -                | -                | -         |     1.26 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     3385 | 2026-08-12 | JiJieHao      | L   | 0.652      | -            | -                | -                | -         |   -18.68 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     3658 | 2026-08-02 | MOUZ          | L   | 0.586      | -            | -                | -                | -         |    -6.67 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     3696 | 2026-08-01 | FaZe          | W   | 0.579      | -            | -                | -                | -         |     2.68 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     3764 | 2026-07-30 | Liquid        | W   | 0.566      | -            | -                | -                | -         |     3.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     3880 | 2026-07-26 | 100 Thieves   | W   | 0.541      | 0.903        | -                | 0.786 (0.383)    | -         |     1.71 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     3978 | 2026-07-23 | OG            | W   | 0.521      | -            | -                | -                | -         |     0.05 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     4602 | 2026-06-20 | Falcons       | L   | 0.301      | -            | -                | -                | -         |    -6.34 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     4626 | 2026-06-19 | G2            | W   | 0.294      | -            | -                | -                | -         |     2.16 | donk, magixx, sh1ro, tN1R, zont1x |
|           12 |     4715 | 2026-06-13 | 9z            | W   | 0.255      | -            | -                | -                | -         |     0.84 | donk, magixx, sh1ro, tN1R, zont1x |
|           11 |     4772 | 2026-06-12 | Aurora        | W   | 0.248      | -            | -                | -                | -         |     4.76 | donk, magixx, sh1ro, tN1R, zont1x |
|           10 |     4800 | 2026-06-11 | Natus Vincere | W   | 0.241      | -            | -                | -                | -         |     1.17 | donk, magixx, sh1ro, tN1R, zont1x |
|            9 |     4878 | 2026-06-07 | 9z            | W   | 0.214      | -            | -                | -                | -         |     0.68 | donk, magixx, sh1ro, tN1R, zont1x |
|            8 |     4899 | 2026-06-06 | MIBR          | W   | 0.208      | -            | -                | -                | -         |     0.99 | donk, magixx, sh1ro, tN1R, zont1x |
|            7 |     4915 | 2026-06-06 | BETBOOM       | W   | 0.206      | -            | -                | -                | -         |     2.85 | donk, magixx, sh1ro, tN1R, zont1x |
|            6 |     5599 | 2026-05-17 | Falcons       | W   | 0.073      | -            | -                | -                | -         |     0.76 | donk, magixx, sh1ro, tN1R, zont1x |
|            5 |     5629 | 2026-05-16 | MOUZ          | W   | 0.065      | -            | -                | -                | -         |     1.39 | donk, magixx, sh1ro, tN1R, zont1x |
|            4 |     5662 | 2026-05-15 | G2            | W   | 0.058      | -            | -                | -                | -         |     0.44 | donk, magixx, sh1ro, tN1R, zont1x |
|            3 |     5786 | 2026-05-11 | FURIA         | W   | 0.033      | -            | -                | -                | -         |     0.69 | donk, magixx, sh1ro, tN1R, zont1x |
|            2 |     5835 | 2026-05-10 | The MongolZ   | W   | 0.025      | -            | -                | -                | -         |     0.10 | donk, magixx, sh1ro, tN1R, zont1x |
|            1 |     5865 | 2026-05-09 | The Huns      | W   | 0.018      | -            | -                | -                | -         |     0.00 | donk, magixx, sh1ro, tN1R, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($875,938.17)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-31 |      1.000 | $31,250.00     | $31,250.00      |
| 2026-10-11 |      1.000 | $85,000.00     | $85,000.00      |
| 2026-09-06 |      0.820 | $250,000.00    | $205,069.89     |
| 2026-08-23 |      0.727 | $600,000.00    | $435,959.03     |
| 2026-08-02 |      0.586 | $97,188.00     | $56,952.69      |
| 2026-06-21 |      0.307 | $80,000.00     | $24,555.99      |
| 2026-05-17 |      0.073 | $512,000.00    | $37,150.58      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
