### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: demente, KusMe, shady, Something, spirit<br />
Global Rank: [223](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  703.5<br />
<br />
Final Rank Value (703.5) = Starting Rank Value (662.6) + Head To Head Adjustments (40.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.6
- 400 + ( ( 0.138 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 662.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     3048 | 2026-03-18 | Leo           | L   | 0.699      | -            | -                | -                | -         |    -5.93 | demente, KusMe, shady, Something, spirit       |
|           28 |     3136 | 2026-03-16 | rottweilers   | L   | 0.686      | -            | -                | -                | -         |   -14.74 | demente, KusMe, shady, Something, spirit       |
|           27 |     3791 | 2026-03-03 | K27           | L   | 0.598      | -            | -                | -                | -         |    -0.53 | aloneintokyo, KusMe, maloii, Something, spirit |
|           26 |     3821 | 2026-03-02 | Ursa          | W   | 0.593      | 0.333        | 0.016 (0.003)    | 0.962 (0.190)    | 0 (0.000) |    14.37 | aloneintokyo, floyd, Goody, KusMe, Something   |
|           25 |     4070 | 2026-02-25 | Oxuji         | L   | 0.559      | -            | -                | -                | -         |    -0.80 | aloneintokyo, floyd, KusMe, Something, spirit  |
|           24 |     4288 | 2026-02-21 | ex-RUBY       | W   | 0.532      | 0.371        | 0.033 (0.006)    | 0.989 (0.195)    | 0 (0.000) |    14.28 | aloneintokyo, floyd, KusMe, Something, spirit  |
|           23 |     5391 | 2026-01-22 | Eternal Fire  | W   | 0.335      | 0.384        | 0.000 (0.000)    | 0.067 (0.009)    | 0 (0.000) |     4.26 | demente, KusMe, shady, Something, spirit       |
|           22 |     5416 | 2026-01-22 | Phantom       | L   | 0.333      | -            | -                | -                | -         |    -0.68 | demente, KusMe, shady, Something, spirit       |
|           21 |     5420 | 2026-01-22 | Acend         | L   | 0.332      | -            | -                | -                | -         |    -0.36 | demente, KusMe, shady, Something, spirit       |
|           20 |     5447 | 2026-01-21 | MASONIC       | W   | 0.327      | 0.384        | 0.006 (0.001)    | 0.595 (0.075)    | 0 (0.000) |     9.57 | demente, KusMe, shady, Something, spirit       |
|           19 |     5474 | 2026-01-20 | Sangal        | L   | 0.320      | -            | -                | -                | -         |    -4.88 | demente, KusMe, shady, Something, spirit       |
|           18 |     5484 | 2026-01-19 | Nemesis       | L   | 0.314      | -            | -                | -                | -         |    -0.34 | demente, KusMe, shady, Something, spirit       |
|           17 |     5526 | 2026-01-18 | MASONIC       | L   | 0.305      | -            | -                | -                | -         |    -0.67 | demente, KusMe, shady, Something, spirit       |
|           16 |     5557 | 2026-01-17 | TNC           | W   | 0.300      | 0.384        | 0.002 (0.000)    | 0.174 (0.020)    | 0 (0.000) |     5.22 | demente, KusMe, shady, Something, spirit       |
|           15 |     5664 | 2026-01-15 | ARCRED        | W   | 0.287      | 0.384        | 0.025 (0.003)    | 0.586 (0.065)    | 0 (0.000) |     8.69 | demente, KusMe, shady, Something, spirit       |
|           14 |     5698 | 2026-01-14 | STATE         | W   | 0.279      | 0.384        | 0.020 (0.002)    | 0.632 (0.068)    | 0 (0.000) |     8.36 | demente, KusMe, shady, Something, spirit       |
|           13 |     5857 | 2025-12-22 | TNC           | W   | 0.128      | 0.333        | 0.022 (0.001)    | 1.000 (0.043)    | 0 (0.000) |     3.51 | demente, KusMe, noni, Something, spirit        |
|           12 |     5894 | 2025-12-20 | Partizan      | W   | 0.113      | -            | -                | -                | 0 (0.000) |     0.66 | Goody, KusMe, Something, spirit, youka         |
|           11 |     6013 | 2025-12-12 | Lavked        | L   | 0.060      | -            | -                | -                | -         |    -0.40 | Goody, KusMe, Something, spirit, youka         |
|           10 |     6032 | 2025-12-10 | Lavked        | L   | 0.048      | -            | -                | -                | -         |    -0.32 | Goody, KusMe, Something, spirit, youka         |
|            9 |     6038 | 2025-12-10 | BASEMENT BOYS | W   | 0.045      | 0.384        | 0.016 (0.000)    | 0.509 (0.009)    | 0 (0.000) |     1.37 | Goody, KusMe, Something, spirit, youka         |
|            8 |     6047 | 2025-12-09 | Fire Flux     | L   | 0.040      | -            | -                | -                | -         |    -0.70 | Goody, KusMe, Something, spirit, youka         |
|            7 |     6066 | 2025-12-08 | Nemiga        | W   | 0.034      | 0.435        | 0.135 (0.002)    | 1.000 (0.015)    | -         |     1.03 | Goody, KusMe, Something, spirit, youka         |
|            6 |     6116 | 2025-12-06 | VP.Prodigy    | L   | 0.020      | -            | -                | -                | -         |    -0.40 | Goody, KusMe, Something, spirit, youka         |
|            5 |     6120 | 2025-12-06 | Nexus         | W   | 0.019      | -            | -                | -                | -         |     0.37 | Goody, KusMe, Something, spirit, youka         |
|            4 |     6144 | 2025-12-05 | Inner Circle  | L   | 0.012      | -            | -                | -                | -         |    -0.01 | Goody, KusMe, Something, spirit, youka         |
|            3 |     6164 | 2025-12-04 | Johnny Speeds | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Goody, KusMe, Something, spirit, youka         |
|            2 |     6172 | 2025-12-04 | NOVAQ         | L   | 0.006      | -            | -                | -                | -         |    -0.04 | Goody, KusMe, Something, spirit, youka         |
|            1 |     6180 | 2025-12-03 | Sashi         | L   | 0.001      | -            | -                | -                | -         |    -0.00 | Goody, KusMe, Something, spirit, youka         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($134.38)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.134 | $1,000.00      | $134.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
