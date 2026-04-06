### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [31](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [7]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  1408.0<br />
<br />
Final Rank Value (1408.0) = Starting Rank Value (1386.0) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

The average of these factors is 0.504<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1386.0
- 400 + ( ( 0.504 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1386.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |     1437 | 2026-03-08 | Imperial          | W   | 1.000      | 0.384        | 0.043 (0.016)    | 0.529 (0.203)    | 1 (1.000) |    10.73 | doc, gafolo, koala, maxxkor, rdnzao |
|           62 |     1476 | 2026-03-07 | 9z                | L   | 1.000      | -            | -                | -                | -         |   -10.48 | doc, gafolo, koala, maxxkor, rdnzao |
|           61 |     1494 | 2026-03-07 | Fluxo             | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.62 | doc, gafolo, koala, maxxkor, rdnzao |
|           60 |     1587 | 2026-03-05 | ODDIK             | W   | 0.987      | 0.384        | 0.048 (0.018)    | 0.564 (0.214)    | 1 (0.987) |    12.16 | doc, gafolo, koala, maxxkor, rdnzao |
|           59 |     1600 | 2026-03-05 | MIBR Academy      | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           58 |     1755 | 2026-03-01 | 9z                | L   | 0.963      | -            | -                | -                | -         |   -10.61 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |     1841 | 2026-02-27 | RED Canids        | W   | 0.950      | 0.435        | -                | 0.483 (0.200)    | 1 (0.950) |    11.08 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |     1895 | 2026-02-26 | 9z                | W   | 0.943      | 0.435        | 0.191 (0.078)    | 0.581 (0.238)    | 1 (0.943) |    19.40 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |     1964 | 2026-02-25 | Galorys           | W   | 0.937      | -            | -                | -                | 1 (0.937) |     4.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |     2171 | 2026-02-21 | ODDIK             | L   | 0.909      | -            | -                | -                | -         |   -15.93 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |     2222 | 2026-02-20 | Imperial          | W   | 0.902      | 0.363        | 0.043 (0.014)    | 0.529 (0.173)    | -         |    10.18 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |     2276 | 2026-02-19 | Procyon           | W   | 0.896      | -            | -                | -                | -         |     1.50 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |     2325 | 2026-02-18 | ShindeN           | L   | 0.889      | -            | -                | -                | -         |   -14.91 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |     2384 | 2026-02-17 | FOLHA AMARELA     | W   | 0.882      | -            | -                | -                | -         |     1.47 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |     2487 | 2026-02-15 | RED Canids        | W   | 0.869      | 0.371        | -                | 0.483 (0.156)    | -         |    11.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |     2500 | 2026-02-15 | ShindeN           | W   | 0.868      | 0.371        | 0.071 (0.023)    | 0.607 (0.195)    | -         |    13.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     2538 | 2026-02-14 | 9z                | W   | 0.863      | 0.371        | 0.191 (0.061)    | 0.581 (0.186)    | -         |    19.19 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     2653 | 2026-02-12 | ex-KRÜ            | W   | 0.849      | -            | -                | -                | -         |     1.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     2806 | 2026-02-08 | 9z                | L   | 0.820      | -            | -                | -                | -         |    -7.42 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     2819 | 2026-02-07 | RED Canids        | W   | 0.815      | 0.769        | 0.030 (0.019)    | 0.483 (0.303)    | -         |    12.62 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     2849 | 2026-02-06 | Galorys           | W   | 0.809      | 0.769        | -                | 0.291 (0.181)    | -         |     3.89 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     3029 | 2026-01-31 | 9z                | L   | 0.768      | -            | -                | -                | -         |    -7.19 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     3063 | 2026-01-30 | MIBR              | L   | 0.763      | -            | -                | -                | -         |   -11.45 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     3067 | 2026-01-30 | SUPERMATCH        | W   | 0.762      | -            | -                | -                | 1 (0.762) |     0.24 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     3230 | 2026-01-24 | Gaimin Gladiators | L   | 0.720      | -            | -                | -                | -         |    -9.93 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     3276 | 2026-01-23 | METANOIA          | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     3342 | 2026-01-21 | Galorys           | W   | 0.703      | -            | -                | -                | 1 (0.703) |     3.05 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     3349 | 2026-01-21 | 9z                | L   | 0.702      | -            | -                | -                | -         |    -5.95 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     3355 | 2026-01-21 | METANOIA          | L   | 0.701      | -            | -                | -                | -         |   -21.82 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     3356 | 2026-01-21 | RED Canids        | L   | 0.701      | -            | -                | -                | -         |   -13.86 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     3418 | 2026-01-18 | MIBR              | W   | 0.683      | 0.435        | 0.076 (0.022)    | -                | -         |     8.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     3502 | 2026-01-16 | Legacy            | W   | 0.670      | 0.435        | 0.258 (0.075)    | -                | -         |    12.53 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     3566 | 2026-01-15 | Imperial          | W   | 0.663      | 0.435        | 0.043 (0.012)    | -                | -         |     9.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     3597 | 2026-01-14 | Keyd Stars        | W   | 0.656      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     3729 | 2026-01-03 | Wildcard          | L   | 0.584      | -            | -                | -                | -         |   -16.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     3732 | 2026-01-03 | GamerLegion       | L   | 0.583      | -            | -                | -                | -         |    -5.68 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     3735 | 2026-01-03 | Wildcard          | W   | 0.582      | -            | -                | -                | -         |     1.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     3782 | 2025-12-21 | BC.Game           | L   | 0.494      | -            | -                | -                | -         |    -8.82 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     3785 | 2025-12-21 | ASTRAL            | W   | 0.493      | -            | -                | -                | -         |     2.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     3826 | 2025-12-19 | Famalicão         | W   | 0.481      | -            | -                | -                | -         |     1.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     3831 | 2025-12-19 | NIC               | W   | 0.481      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     4514 | 2025-11-16 | Keyd Stars        | W   | 0.262      | -            | -                | -                | -         |     0.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     4532 | 2025-11-15 | 9z                | L   | 0.256      | -            | -                | -                | -         |    -7.82 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     4546 | 2025-11-15 | Fake do Biru      | W   | 0.254      | -            | -                | -                | -         |     0.56 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     4567 | 2025-11-14 | Gaimin Gladiators | L   | 0.248      | -            | -                | -                | -         |    -3.79 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     4579 | 2025-11-13 | 9z                | W   | 0.243      | -            | -                | -                | -         |     0.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     4615 | 2025-11-12 | LP                | W   | 0.235      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     4671 | 2025-11-10 | ShindeN           | W   | 0.223      | -            | -                | -                | -         |     3.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     4695 | 2025-11-09 | Fluxo             | L   | 0.215      | -            | -                | -                | -         |    -3.59 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     4731 | 2025-11-08 | Imperial          | W   | 0.209      | -            | -                | -                | -         |     2.54 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     4754 | 2025-11-08 | Gaimin Gladiators | W   | 0.207      | -            | -                | -                | -         |     3.42 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     4786 | 2025-11-07 | 9z                | W   | 0.203      | -            | -                | -                | -         |     0.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     4789 | 2025-11-07 | METANOIA Wolves   | W   | 0.202      | -            | -                | -                | -         |     0.15 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     5204 | 2025-10-26 | Gaimin Gladiators | W   | 0.123      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     5283 | 2025-10-25 | BESTIA            | W   | 0.114      | -            | -                | -                | -         |     1.72 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     5328 | 2025-10-24 | METANOIA Wolves   | W   | 0.108      | -            | -                | -                | -         |     0.08 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     5345 | 2025-10-24 | Dusty Roots       | W   | 0.107      | -            | -                | -                | -         |     0.05 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     5480 | 2025-10-18 | Bounty Hunters    | W   | 0.069      | -            | -                | -                | -         |     0.44 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     5483 | 2025-10-18 | Fake do Biru      | W   | 0.068      | -            | -                | -                | -         |     0.16 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5503 | 2025-10-17 | Yawara            | W   | 0.062      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5536 | 2025-10-16 | MIBR Academy      | W   | 0.056      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     5740 | 2025-10-09 | Procyon           | L   | 0.009      | -            | -                | -                | -         |    -0.26 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     5788 | 2025-10-08 | Dusty Roots       | L   | 0.002      | -            | -                | -                | -         |    -0.07 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,624.75)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-03-01 |      0.963 | $8,750.00      | $8,424.15       |
| 2026-02-24 |      0.929 | $1,000.00      | $928.84         |
| 2026-02-15 |      0.869 | $10,000.00     | $8,687.39       |
| 2026-02-01 |      0.776 | $800.00        | $621.10         |
| 2026-01-18 |      0.683 | $30,000.00     | $20,496.44      |
| 2025-11-16 |      0.262 | $17,997.00     | $4,717.48       |
| 2025-11-15 |      0.256 | $4,000.00      | $1,022.66       |
| 2025-11-09 |      0.215 | $2,500.00      | $538.56         |
| 2025-10-18 |      0.069 | $10,000.00     | $688.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
