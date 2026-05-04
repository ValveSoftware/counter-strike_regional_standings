### Roster Details<br />
Team Name: Bushido Wildcats<br />
Roster: cadnyx, Darendeli, eNs, scolleN, Vej<br />
Global Rank: [204](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [132]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  750.3<br />
<br />
Final Rank Value (750.3) = Starting Rank Value (717.9) + Head To Head Adjustments (32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.9
- 400 + ( ( 0.171 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 717.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     2003 | 2026-03-19 | STATE            | L   | 0.893      | -            | -                | -                | -         |    -5.65 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|           31 |     2032 | 2026-03-18 | Lilmix           | W   | 0.888      | 0.384        | 0.006 (0.002)    | 0.516 (0.176)    | 0 (0.000) |    19.99 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           30 |     2092 | 2026-03-17 | K27              | L   | 0.880      | -            | -                | -                | -         |    -0.77 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           29 |     2140 | 2026-03-16 | CSDIILIT         | W   | 0.873      | 0.384        | 0.003 (0.001)    | 0.693 (0.233)    | 0 (0.000) |    17.21 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           28 |     3248 | 2026-02-22 | VP.Prodigy       | L   | 0.726      | -            | -                | -                | -         |   -11.85 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|           27 |     3377 | 2026-02-19 | BC.Game          | W   | 0.708      | 0.384        | 0.000 (0.000)    | -                | 0 (0.000) |     5.96 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           26 |     3442 | 2026-02-18 | ex-Zero Tenacity | L   | 0.700      | -            | -                | -                | -         |   -13.03 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           25 |     3463 | 2026-02-18 | TDK              | L   | 0.698      | -            | -                | -                | -         |    -1.36 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           24 |     3505 | 2026-02-17 | WW               | L   | 0.694      | -            | -                | -                | -         |    -1.18 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|           23 |     3529 | 2026-02-17 | Fuzos            | W   | 0.692      | 0.384        | 0.004 (0.001)    | 0.357 (0.095)    | 0 (0.000) |    13.95 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           22 |     3534 | 2026-02-16 | MASONIC          | W   | 0.688      | 0.384        | 0.005 (0.001)    | 0.549 (0.145)    | 0 (0.000) |    18.56 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           21 |     3595 | 2026-02-15 | VP.Prodigy       | L   | 0.681      | -            | -                | -                | -         |   -11.46 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           20 |     3614 | 2026-02-15 | Fuzos            | L   | 0.680      | -            | -                | -                | -         |    -7.95 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           19 |     3710 | 2026-02-13 | Leo              | L   | 0.668      | -            | -                | -                | -         |    -7.31 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           18 |     3735 | 2026-02-13 | Gentle Mates     | L   | 0.665      | -            | -                | -                | -         |    -0.69 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           17 |     3779 | 2026-02-12 | G2 Ares          | W   | 0.659      | 0.384        | 0.003 (0.001)    | 0.457 (0.116)    | 1 (0.659) |    16.78 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           16 |     3961 | 2026-02-06 | Nexus            | L   | 0.620      | -            | -                | -                | -         |    -5.17 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           15 |     3988 | 2026-02-05 | MASONIC          | L   | 0.614      | -            | -                | -                | -         |    -2.37 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           14 |     4018 | 2026-02-04 | Nexus            | W   | 0.606      | 0.384        | -                | 0.332 (0.077)    | 0 (0.000) |    14.28 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           13 |     4391 | 2026-01-23 | rottweilers      | L   | 0.525      | -            | -                | -                | -         |   -11.19 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           12 |     4485 | 2026-01-20 | Hashiras         | L   | 0.507      | -            | -                | -                | -         |    -6.79 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           11 |     4505 | 2026-01-19 | Clutchain fe     | W   | 0.499      | 0.384        | 0.025 (0.005)    | 0.261 (0.050)    | 0 (0.000) |     8.20 | cadnyx, Darendeli, eNs, scolleN, Vej |
|           10 |     4726 | 2026-01-13 | ALGO             | L   | 0.459      | -            | -                | -                | -         |    -3.40 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            9 |     4729 | 2026-01-13 | Acend            | L   | 0.459      | -            | -                | -                | -         |    -1.09 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            8 |     4735 | 2026-01-12 | Bebop            | L   | 0.453      | -            | -                | -                | -         |    -5.17 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            7 |     4740 | 2026-01-12 | MANA             | L   | 0.452      | -            | -                | -                | -         |    -3.34 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            6 |     4769 | 2026-01-08 | Lilmix           | W   | 0.426      | 0.333        | 0.006 (0.001)    | 0.516 (0.073)    | -         |    11.36 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            5 |     5371 | 2025-11-25 | CYBERSHOKE       | L   | 0.134      | -            | -                | -                | -         |    -0.30 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            4 |     5382 | 2025-11-25 | ex-RUBY          | W   | 0.133      | 0.371        | 0.052 (0.003)    | 0.995 (0.049)    | 1 (0.133) |     3.31 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            3 |     5403 | 2025-11-24 | Nemesis          | L   | 0.128      | -            | -                | -                | -         |    -0.10 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            2 |     5411 | 2025-11-24 | ex-RUBY          | W   | 0.127      | 0.371        | 0.052 (0.002)    | 0.995 (0.047)    | 1 (0.127) |     3.18 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            1 |     5898 | 2025-11-07 | Fire Flux        | L   | 0.014      | -            | -                | -                | -         |    -0.25 | cadnyx, Darendeli, eNs, scolleN, Vej |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($140.51)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-26 |      0.141 | $1,000.00      | $140.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
