### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: k1nco, meetyoxanaji, r1pa4, redzed, starmie<br />
Global Rank: [230](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [149]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  695.2<br />
<br />
Final Rank Value (695.2) = Starting Rank Value (577.6) + Head To Head Adjustments (117.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 577.6
- 400 + ( ( 0.091 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 577.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1075 | 2026-03-15 | TNT             | L   | 1.000      | -            | -                | -                | -         |   -12.21 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           13 |     1085 | 2026-03-15 | eternal premium | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.092 (0.013)    | 0 (0.000) |     8.88 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           12 |     1174 | 2026-03-13 | HAVU            | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.569 (0.081)    | 0 (0.000) |    25.90 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           11 |     1426 | 2026-03-08 | OLDBOYS PL      | L   | 1.000      | -            | -                | -                | -         |   -16.01 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           10 |     1576 | 2026-03-05 | megoshort       | W   | 0.988      | 0.143        | 0.004 (0.001)    | 0.335 (0.047)    | 0 (0.000) |    27.09 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            9 |     1807 | 2026-02-28 | yngods          | L   | 0.955      | -            | -                | -                | -         |   -16.11 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            8 |     1819 | 2026-02-28 | HAVU            | L   | 0.954      | -            | -                | -                | -         |    -2.81 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            7 |     1863 | 2026-02-27 | G2 Ares         | W   | 0.947      | 0.278        | 0.002 (0.001)    | 0.143 (0.038)    | 0 (0.000) |    19.69 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            6 |     1905 | 2026-02-26 | Atreides        | L   | 0.942      | -            | -                | -                | -         |   -13.08 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            5 |     1928 | 2026-02-26 | MASONIC         | W   | 0.940      | 0.384        | 0.002 (0.001)    | 0.519 (0.188)    | 0 (0.000) |    26.71 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            4 |     1996 | 2026-02-25 | ENCE Academy    | W   | 0.932      | 0.384        | 0.001 (0.000)    | 0.513 (0.184)    | 0 (0.000) |    24.05 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            3 |     2822 | 2026-02-07 | TNC             | L   | 0.815      | -            | -                | -                | -         |    -2.59 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            2 |     2942 | 2026-02-03 | Rebels          | W   | 0.787      | 0.384        | 0.014 (0.004)    | 0.540 (0.163)    | 0 (0.000) |    23.83 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            1 |     2989 | 2026-02-02 | WW              | W   | 0.779      | 0.384        | 0.034 (0.010)    | 0.864 (0.259)    | 0 (0.000) |    24.25 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
