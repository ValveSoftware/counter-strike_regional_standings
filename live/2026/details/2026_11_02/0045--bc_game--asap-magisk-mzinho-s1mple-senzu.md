### Roster Details<br />
Team Name: BC.Game<br />
Roster: asap, Magisk, mzinho, s1mple, Senzu<br />
Global Rank: [45](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [2]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  1336.9<br />
<br />
Final Rank Value (1336.9) = Starting Rank Value (1371.1) + Head To Head Adjustments (-34.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.998[<sup>2</sup>](#table1)

The average of these factors is 0.518<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1371.1
- 400 + ( ( 0.518 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 1371.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       66 | 2026-10-30 | OG            | L   | 1.000      | -            | -                | -                | -         |   -30.01 | asap, Magisk, mzinho, s1mple, Senzu       |
|           29 |       70 | 2026-10-30 | Metizport     | L   | 1.000      | -            | -                | -                | -         |   -21.45 | asap, Magisk, mzinho, s1mple, Senzu       |
|           28 |       81 | 2026-10-30 | OG            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.12 | asap, Magisk, mzinho, s1mple, Senzu       |
|           27 |      303 | 2026-10-22 | JiJieHao      | L   | 1.000      | -            | -                | -                | -         |   -13.35 | asap, Magisk, mzinho, s1mple, Senzu       |
|           26 |      320 | 2026-10-22 | FaZe          | W   | 1.000      | 0.407        | 0.260 (0.106)    | 0.396 (0.161)    | 1 (1.000) |    22.08 | asap, Magisk, mzinho, s1mple, Senzu       |
|           25 |      336 | 2026-10-21 | Eternal Fire  | L   | 1.000      | -            | -                | -                | -         |   -14.30 | asap, Magisk, mzinho, s1mple, Senzu       |
|           24 |      367 | 2026-10-21 | Nexus         | W   | 1.000      | 0.407        | 0.016 (0.007)    | 0.590 (0.240)    | 1 (1.000) |     6.98 | asap, Magisk, mzinho, s1mple, Senzu       |
|           23 |      429 | 2026-10-20 | BBL           | W   | 1.000      | 0.407        | 0.032 (0.013)    | 0.675 (0.275)    | 1 (1.000) |    15.08 | asap, Magisk, mzinho, s1mple, Senzu       |
|           22 |      471 | 2026-10-19 | WBT           | W   | 1.000      | 0.407        | 0.019 (0.008)    | 0.389 (0.158)    | 1 (1.000) |     8.37 | asap, Magisk, mzinho, s1mple, Senzu       |
|           21 |      490 | 2026-10-19 | Drama         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.92 | asap, Magisk, mzinho, s1mple, Senzu       |
|           20 |      626 | 2026-10-15 | MIBR          | L   | 1.000      | -            | -                | -                | -         |    -8.40 | asap, Magisk, mzinho, s1mple, Senzu       |
|           19 |      637 | 2026-10-15 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |    -7.89 | asap, Magisk, mzinho, s1mple, Senzu       |
|           18 |      644 | 2026-10-15 | MIBR          | W   | 1.000      | 0.477        | 0.331 (0.158)    | 0.500 (0.238)    | 1 (1.000) |    23.00 | asap, Magisk, mzinho, s1mple, Senzu       |
|           17 |     1122 | 2026-10-03 | BBL           | L   | 0.999      | -            | -                | -                | -         |   -15.53 | asap, Magisk, mzinho, s1mple, Senzu       |
|           16 |     1148 | 2026-10-02 | Sashi         | W   | 0.993      | 0.371        | 0.032 (0.012)    | -                | 1 (0.993) |     4.94 | asap, Magisk, mzinho, s1mple, Senzu       |
|           15 |     1164 | 2026-10-02 | BASEMENT BOYS | W   | 0.993      | 0.371        | -                | 0.640 (0.235)    | 1 (0.993) |     5.36 | asap, Magisk, mzinho, s1mple, Senzu       |
|           14 |     1177 | 2026-10-02 | Voca          | W   | 0.993      | 0.371        | -                | 0.437 (0.161)    | 1 (0.993) |     7.57 | asap, Magisk, mzinho, s1mple, Senzu       |
|           13 |     1188 | 2026-10-02 | Prestige      | L   | 0.993      | -            | -                | -                | -         |   -30.13 | asap, Magisk, mzinho, s1mple, Senzu       |
|           12 |     1212 | 2026-10-02 | Glitch        | W   | 0.992      | -            | -                | -                | -         |     0.43 | asap, Magisk, mzinho, s1mple, Senzu       |
|           11 |     2555 | 2026-09-04 | FOKUS         | L   | 0.807      | -            | -                | -                | -         |   -15.14 | electroNic, Magisk, mzinho, s1mple, Senzu |
|           10 |     2573 | 2026-09-04 | GenOne        | W   | 0.806      | 0.624        | 0.037 (0.019)    | 0.709 (0.357)    | -         |     5.90 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            9 |     3413 | 2026-08-09 | 100 Thieves   | L   | 0.633      | -            | -                | -                | -         |    -7.33 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            8 |     3434 | 2026-08-09 | OG            | W   | 0.632      | 0.818        | 0.012 (0.006)    | -                | -         |     0.86 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            7 |     3511 | 2026-08-07 | 1win          | W   | 0.619      | 0.818        | 0.301 (0.152)    | 0.692 (0.351)    | -         |    14.13 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            6 |     3529 | 2026-08-07 | BASEMENT BOYS | W   | 0.619      | 0.818        | 0.011 (0.006)    | 0.640 (0.324)    | -         |     4.71 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            5 |     3683 | 2026-08-01 | ENCE          | W   | 0.581      | -            | -                | -                | -         |     3.75 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            4 |     3695 | 2026-08-01 | SINQU         | W   | 0.579      | -            | -                | -                | -         |     0.70 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            3 |     3726 | 2026-07-31 | Trainwrecks   | W   | 0.573      | -            | -                | -                | -         |     0.10 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            2 |     3734 | 2026-07-31 | HAVU          | W   | 0.572      | -            | -                | -                | -         |     3.14 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            1 |     3740 | 2026-07-31 | ROUNDS        | W   | 0.571      | -            | -                | -                | -         |     0.17 | electroNic, Magisk, mzinho, s1mple, Senzu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,645.48)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-23 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-10-17 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-10-03 |      1.000 | $750.00        | $750.00         |
| 2026-08-09 |      0.634 | $7,750.00      | $4,912.75       |
| 2026-08-01 |      0.581 | $8,582.00      | $4,982.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
